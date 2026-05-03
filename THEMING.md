# Theming

VexKit's public theming surface is a small set of CSS custom properties (`--vex-*`) on `:root`. Override any of them and every VexKit component picks up the new value: no rebuild, no JavaScript, no theme provider.

## Public role tokens

These are the contract. Override them; everything else is internal.

| Token | Dark | Light | Used for |
|---|---|---|---|
| `--vex-bg` | `#0f172a` | `#f8fafc` | Page background |
| `--vex-card` | `#1e293b` | `#ffffff` | Card / surface background |
| `--vex-border` | `#334155` | `#e2e8f0` | Subtle dividers, card borders, decorative edges |
| `--vex-heading` | `#e2e8f0` | `#0f172a` | High-contrast text (headings, titles) |
| `--vex-text` | `#cbd5e1` | `#475569` | Primary body text |
| `--vex-text-muted` | `#94a3b8` | `#64748b` | Supporting / secondary text |
| `--vex-accent` | `#5eead4` | `#0f766e` | Primary accent (links, focus, primary CTA bg) |
| `--vex-accent-hover` | `#2dd4bf` | `#0d9488` | Accent hover state |
| `--vex-accent-active` | `#14b8a6` | `#134e4a` | Accent active/pressed state |
| `--vex-danger` | `#e11d48` | `#dc2626` | Destructive action background (paired with white text) |
| `--vex-danger-hover` | `#be123c` | `#b91c1c` | Destructive action hover state |
| `--vex-danger-fg` | `#fb7185` | `#b91c1c` | Destructive foreground (error text & error border) on `--vex-card` / `--vex-bg` |
| `--vex-success-fg` | `#10b981` | `#047857` | Success foreground (status badge text & border, success indicators) on `--vex-card` / `--vex-bg` |
| `--vex-warning-fg` | `#f59e0b` | `#92400e` | Warning foreground (status badge text & border, warning indicators) on `--vex-card` / `--vex-bg` |
| `--vex-gold` | `#d4a017` | `#d4a017` | Brand-fixed accent (decorative; not theme-adaptive) |

Two decorative tokens drive the hero backdrop. Override these to retheme `.grid-bg`:

| Token | Dark | Light | Used for |
|---|---|---|---|
| `--vex-grid-line` | `rgba(51, 65, 85, 0.35)` | `rgba(203, 213, 225, 0.6)` | Hero grid line color |
| `--vex-grid-glow` | `rgba(94, 234, 212, 0.18)` | `rgba(20, 184, 166, 0.14)` | Hero radial glow |

## Overriding

Override any token at any scope. Common patterns:

```css
/* Brand-tune the entire app */
:root {
  --vex-accent: #a855f7;
  --vex-accent-hover: #9333ea;
  --vex-accent-active: #7e22ce;
}

/* Per-section override */
.docs-section {
  --vex-bg: #050a14;
}

/* Per-component override */
<Card style={{ '--vex-card': '#1a1f2e' }}>...</Card>
```

Tokens cascade. A child element inherits whatever tokens its ancestor sets.

## Theme switching

Themes are toggled by setting `data-theme="light"` (or omitting it for dark) on the `<html>` element. The relevant CSS:

```css
:root { /* dark values */ }
[data-theme="light"] { /* light values */ }
```

To avoid flash-of-unstyled-content (FOUC), the docs app inlines a synchronous script in `<head>` that reads `localStorage.getItem('vex-theme')` and sets `data-theme` **before paint**. Pattern:

```html
<head>
  <script>
    (function () {
      try {
        var t = localStorage.getItem('vex-theme');
        document.documentElement.dataset.theme = t === 'light' ? 'light' : 'dark';
      } catch (e) {
        document.documentElement.dataset.theme = 'dark';
      }
    })();
  </script>
</head>
```

The toggle button itself just flips `documentElement.dataset.theme` and writes the new value to `localStorage`: no React state, no `useEffect`, no hydration mismatch.

## What is NOT public

These are internal and may change without notice:

- **Raw color scales** (slate, teal, amber Tailwind palettes). Do not target `bg-ink-700`, `text-teal-300`, etc. directly. They are not exposed as Tailwind utilities. Use the `--vex-*` tokens.
- **Per-component internal tokens** (button gradients, focus ring offsets, animation durations).
- **The exact CSS in `globals.css`**: keyframes, scrollbar treatment, `.grid-bg` implementation. Override the role tokens; do not patch the rules.
- **Spacing / radius / typography scales**: currently inherited from Tailwind defaults. Will be tokenized in a later phase if there's demand.

## WCAG AA contrast audit

Computed via WCAG 2.x relative luminance formula. **Targets: 4.5:1 body text · 3:1 large text & non-text UI · borders exempt per SC 1.4.11.**

### Dark mode

Background: `#0f172a` (L = 0.0088). Card: `#1e293b` (L = 0.0218).

| Foreground | on `bg` | on `card` | AA body | AA UI |
|---|---:|---:|:---:|:---:|
| `--vex-heading` `#e2e8f0` | 14.49 | 11.86 | ✓ | ✓ |
| `--vex-text` `#cbd5e1` | 12.03 | 9.85 | ✓ | ✓ |
| `--vex-text-muted` `#94a3b8` | 6.96 | 5.70 | ✓ | ✓ |
| `--vex-accent` `#5eead4` | 12.07 | 9.89 | ✓ | ✓ |
| `--vex-danger-fg` `#fb7185` | 6.63 | 5.44 | ✓ | ✓ |
| `--vex-success-fg` `#10b981` | 7.04 | 5.77 | ✓ | ✓ |
| `--vex-warning-fg` `#f59e0b` | 8.31 | 6.81 | ✓ | ✓ |
| `--vex-gold` `#d4a017` | 7.61 | 6.23 | ✓ | ✓ |

White text (`#ffffff`) on destructive surfaces:

| Surface | Ratio | AA body | AA UI |
|---|---:|:---:|:---:|
| `--vex-danger` `#e11d48` | 4.70 | ✓ | ✓ |
| `--vex-danger-hover` `#be123c` | 6.29 | ✓ | ✓ |

### Light mode

Background: `#f8fafc` (L = 0.9536). Card: `#ffffff` (L = 1.0).

| Foreground | on `bg` | on `card` | AA body | AA UI |
|---|---:|---:|:---:|:---:|
| `--vex-heading` `#0f172a` | 17.07 | 17.86 | ✓ | ✓ |
| `--vex-text` `#475569` | 7.24 | 7.58 | ✓ | ✓ |
| `--vex-text-muted` `#64748b` | 4.55 | 4.76 | ✓ | ✓ |
| `--vex-accent` `#0f766e` | 5.23 | 5.48 | ✓ | ✓ |
| `--vex-danger-fg` `#b91c1c` | 6.18 | 6.47 | ✓ | ✓ |
| `--vex-success-fg` `#047857` | 5.24 | 5.48 | ✓ | ✓ |
| `--vex-warning-fg` `#92400e` | 6.78 | 7.09 | ✓ | ✓ |
| `--vex-gold` `#d4a017` | **2.24** | **2.35** | ✗ | ✗ |

White text (`#ffffff`) on destructive surfaces:

| Surface | Ratio | AA body | AA UI |
|---|---:|:---:|:---:|
| `--vex-danger` `#dc2626` | 4.83 | ✓ | ✓ |
| `--vex-danger-hover` `#b91c1c` | 6.47 | ✓ | ✓ |

### Known exemptions and deferrals

- **`--vex-border` (both modes)** is intentionally low-contrast (`#334155` dark / `#e2e8f0` light) for visual subtlety. Border ratios sit between 1.18 and 1.72 against bg/card. This qualifies for the **WCAG SC 1.4.11 non-text-content exemption**: borders are decorative chrome, not essential to understanding or operation. Form inputs, focus indicators, and other operationally-meaningful boundaries use stronger contrast tokens (`--vex-accent` on focus, `--vex-text` on labels).
- **`--vex-gold` on light surfaces** fails AA as foreground text. `--vex-gold` is a **brand-fixed decorative accent** (icon tints, badge fills) and is not intended for use as text on light backgrounds. If a future component needs gold-on-white text, the fix is to pair gold with a darker surrounding container (gold icon inside a `--vex-card`-tinted pill) or to introduce a darker gold token at that time.
