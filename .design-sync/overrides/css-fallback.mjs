// forked from design-sync lib/css-fallback.mjs — Wuko defines its font CSS
// variables (--font-inter / --font-jetbrains) via next/font (app) and the
// storybook preview-head INLINE <style>, never in globals.css. The compiled
// stylesheet the scrape copies therefore omits them, so `font-family:
// var(--font-inter)` resolves to an invalid value and every preview renders
// in the UA default font instead of Inter (a stark, every-component
// mismatch vs the storybook reference). This fork harvests those inline
// --font-* declarations from iframe.html and appends them to the scraped
// _ds_bundle.css (which is in the styles.css closure), so the bundle is
// self-contained and previews match the reference. Only fallbackCssFromStorybook
// changed; everything else is verbatim from the bundled module.

import { existsSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';

export function inlineFontFacesFromStorybook(sbStatic, existingRules) {
  if (!sbStatic) return [];
  let html;
  try { html = readFileSync(join(sbStatic, 'iframe.html'), 'utf8'); } catch { return []; }
  const familyOf = (block) => /font-family:\s*['"]?([^'";}]+)/i.exec(block)?.[1].trim().toLowerCase();
  const have = new Set(existingRules.map(familyOf).filter(Boolean));
  const out = [];
  for (const m of html.matchAll(/@font-face\s*\{[^}]*\}/gi)) {
    const block = m[0];
    const urls = [...block.matchAll(/url\(\s*['"]?([^'")]+)/gi)].map((u) => u[1]);
    if (!urls.length || !urls.every((u) => u.startsWith('data:'))) continue;
    const fam = familyOf(block);
    if (!fam || have.has(fam)) continue;
    out.push(block);
  }
  if (out.length) console.error(`  [FONTS_FROM_PREVIEW_HEAD] harvested ${out.length} data-URI @font-face rule(s) from the storybook reference`);
  return out;
}

export function isPlaceholderCss(p) {
  if (!existsSync(p)) return false;
  const sz = statSync(p).size;
  if (sz > 500) return false;
  const txt = readFileSync(p, 'utf8');
  const stripped = txt.replace(/\/\*[\s\S]*?\*\//g, '').replace(/@(import|charset)\b[^;]*;/g, '').trim();
  return stripped.length === 0;
}

// FORK ADDITION: collect `--font-*: …;` custom-property declarations from the
// storybook iframe.html (preview-head inline <style>), de-duplicated, as a
// single :root{} block. Returns '' when none found.
function inlineFontVarsBlock(sbStatic) {
  if (!sbStatic) return '';
  let html;
  try { html = readFileSync(join(sbStatic, 'iframe.html'), 'utf8'); } catch { return ''; }
  const seen = new Map();
  for (const m of html.matchAll(/(--font-[\w-]+)\s*:\s*([^;}]+)\s*[;}]/gi)) {
    const name = m[1].trim();
    if (!seen.has(name)) seen.set(name, m[2].trim());
  }
  if (!seen.size) return '';
  const decls = [...seen.entries()].map(([k, v]) => `${k}:${v}`).join(';');
  console.error(`  [FONT_VARS_FROM_PREVIEW_HEAD] appended ${seen.size} --font-* var(s) to _ds_bundle.css: ${[...seen.keys()].join(', ')}`);
  return `\n/* @ds-fork: font CSS vars harvested from storybook preview-head inline <style> */\n:root{${decls}}\n`;
}

// FORK ADDITION: the preview HTML template (emit.mjs, app-contract — not
// forkable) hardcodes `body{background:#fff}`. Wuko is a DARK-default DS whose
// translucent surfaces (bg-wuko-card/70, opacity-.5 disabled controls,
// transparent table cells) must composite over the navy --wuko-bg, not white,
// to match the storybook reference. `html body` (specificity 0,0,2) beats the
// inline `body` rule (0,0,1) regardless of source order, so this wins. It
// ships in the styles.css closure, so real designs render on navy too — which
// is exactly Wuko's intent (globals.css sets the same on html,body).
function darkBodyBackdropBlock() {
  console.error('  [DARK_BODY_BACKDROP] appended `html body{background:var(--wuko-bg)}` to _ds_bundle.css (beats emit.mjs inline body{#fff} so translucent surfaces composite over navy)');
  return '\n/* @ds-fork: force the navy DS backdrop to win over the preview template\'s inline body{#fff} (dark-default DS) */\nhtml body{background:var(--wuko-bg)}\n';
}

export function fallbackCssFromStorybook({ bundleCss, sbStatic, out }) {
  if ((existsSync(bundleCss) && !isPlaceholderCss(bundleCss)) || !sbStatic || !existsSync(join(sbStatic, 'iframe.html'))) return null;
  const iframeHtml = readFileSync(join(sbStatic, 'iframe.html'), 'utf8');
  const links = [...iframeHtml.matchAll(/<link\b[^>]*>/gi)]
    .map((m) => m[0])
    .filter((t) => /\brel\s*=\s*["']stylesheet["']/i.test(t))
    .map((t) => t.match(/\bhref\s*=\s*["']([^"']+)["']/i)?.[1])
    .filter((h) => h && !/^(https?:|\/\/)/.test(h))
    .map((h) => join(sbStatic, h.replace(/^\.\//, '')))
    .filter((p) => p.startsWith(sbStatic + sep) && existsSync(p))
    .sort((a, b) => statSync(b).size - statSync(a).size);
  if (links[0]) {
    const was = existsSync(bundleCss) ? `a ${statSync(bundleCss).size}B placeholder` : 'missing';
    const kb = (statSync(links[0]).size / 1024).toFixed(0);
    const srcDir = dirname(links[0]);
    const css = readFileSync(links[0], 'utf8');
    const assets = [...new Set([...css.matchAll(/url\(\s*(['"]?)(?!data:|https?:|\/\/|\/)([^'")]+)\1\s*\)/gi)].map((m) => m[2]))];
    // FORK: append harvested --font-* vars + the dark-backdrop override so the
    // bundle CSS is self-contained and previews composite over navy.
    writeFileSync(bundleCss, css + inlineFontVarsBlock(sbStatic) + darkBodyBackdropBlock());
    console.error(`[CSS_FROM_STORYBOOK] _ds_bundle.css was ${was} — replaced with ${relative(out, links[0])} (${kb} KB).`);
    if (assets.length) {
      console.error(`[CSS_ASSETS] ${assets.length} relative url() ref(s) in the fallback CSS won't resolve post-upload (fonts are copied separately via extractFonts; images will 404): ${assets.slice(0, 5).join(', ')}${assets.length > 5 ? ', …' : ''}`);
    }
    return srcDir;
  }
  console.error(`[CSS_PLACEHOLDER] _ds_bundle.css is missing or a stub (@import-only, <500B) and no storybook CSS found to fall back to — set cfg.cssEntry to the compiled stylesheet.`);
  return null;
}

export function scrapeRemoteImports(sbStatic) {
  if (!sbStatic || !existsSync(join(sbStatic, 'iframe.html'))) return [];
  const iframeHtml = readFileSync(join(sbStatic, 'iframe.html'), 'utf8');
  const out = [...new Set(
    [...iframeHtml.matchAll(/<link\b[^>]*>/gi)]
      .map((m) => m[0])
      .filter((t) => /\brel\s*=\s*["']stylesheet["']/i.test(t))
      .map((t) => t.match(/\bhref\s*=\s*["']([^"']+)["']/i)?.[1])
      .filter((h) => h && /^(https?:|\/\/)/.test(h))
      .map((h) => (h.startsWith('//') ? 'https:' + h : h)),
  )];
  if (out.length) {
    console.error(`  remote stylesheet(s) from storybook: ${out.length} → styles.css @import url(...)`);
  }
  return out;
}
