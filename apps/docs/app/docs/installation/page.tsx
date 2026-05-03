import { CodeBlock } from "@/components/docs/code-block";
import { H2 } from "@/components/docs/h2";
import { InfoCallout } from "@/components/docs/info-callout";
import { Pager } from "@/components/docs/pager";
import { getRegistryItemUrl } from "@/lib/registry/base-url";

export const metadata = {
  title: "Installation | VexKit",
};

const TOKENS_SNIPPET = `@import "tailwindcss";

@custom-variant light (&:where([data-theme="light"] *));

:root {
  --vex-bg: #0f172a;
  --vex-card: #1e293b;
  --vex-border: #334155;
  --vex-heading: #e2e8f0;
  --vex-text: #cbd5e1;
  --vex-text-muted: #94a3b8;
  --vex-accent: #5eead4;
  --vex-accent-hover: #2dd4bf;
  --vex-accent-active: #14b8a6;
  --vex-danger: #e11d48;
  --vex-danger-hover: #be123c;
  --vex-danger-fg: #fb7185;
  --vex-success-fg: #10b981;
  --vex-warning-fg: #f59e0b;
  --vex-gold: #d4a017;
  color-scheme: dark;
}

[data-theme="light"] {
  --vex-bg: #f8fafc;
  --vex-card: #ffffff;
  --vex-border: #e2e8f0;
  --vex-heading: #0f172a;
  --vex-text: #475569;
  --vex-text-muted: #64748b;
  --vex-accent: #0f766e;
  --vex-accent-hover: #0d9488;
  --vex-accent-active: #134e4a;
  --vex-danger: #dc2626;
  --vex-danger-hover: #b91c1c;
  --vex-danger-fg: #b91c1c;
  --vex-success-fg: #047857;
  --vex-warning-fg: #92400e;
  --vex-gold: #d4a017;
  color-scheme: light;
}

@theme inline {
  --color-vex-bg: var(--vex-bg);
  --color-vex-card: var(--vex-card);
  --color-vex-border: var(--vex-border);
  --color-vex-heading: var(--vex-heading);
  --color-vex-text: var(--vex-text);
  --color-vex-text-muted: var(--vex-text-muted);
  --color-vex-accent: var(--vex-accent);
  --color-vex-accent-hover: var(--vex-accent-hover);
  --color-vex-accent-active: var(--vex-accent-active);
  --color-vex-danger: var(--vex-danger);
  --color-vex-danger-hover: var(--vex-danger-hover);
  --color-vex-danger-fg: var(--vex-danger-fg);
  --color-vex-success-fg: var(--vex-success-fg);
  --color-vex-warning-fg: var(--vex-warning-fg);
  --color-vex-gold: var(--vex-gold);
}`;

export default function InstallationPage() {
  const installCommand = `npx shadcn@latest add ${getRegistryItemUrl("vex-placeholder")}`;

  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-vex-text-muted">
          Getting Started
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-vex-heading">
          Installation
        </h1>
        <p className="text-[15px] leading-relaxed text-vex-text">
          Add VexKit&apos;s shadcn-style component registry to your project.
          Components land directly in your codebase, themed by VexKit&apos;s
          role tokens, ready to customize.
        </p>
      </header>

      <InfoCallout title="Prerequisites">
        VexKit requires <code>Tailwind v4</code> (the <code>@theme inline</code>{" "}
        pattern is v4-only) and <code>React 19+</code>. If your project is on
        Tailwind v3, migrate to v4 before continuing.
      </InfoCallout>

      <H2 id="initialize-shadcn">1. Initialize shadcn</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-vex-text">
        VexKit components are distributed through the shadcn CLI. Run{" "}
        <code>init</code> once in your project. It creates{" "}
        <code>components.json</code> and adds <code>lib/utils.ts</code> with the{" "}
        <code>cn</code> helper.
      </p>
      <CodeBlock filename="terminal" lang="bash" code="npx shadcn@latest init" />

      <H2 id="set-up-tokens">2. Set up VexKit&apos;s role tokens</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-vex-text">
        Paste the block below into your <code>app/globals.css</code> (or
        wherever you import Tailwind). It defines VexKit&apos;s public role
        tokens for both dark and light modes, and wires them as Tailwind v4
        utility classes (<code>bg-vex-card</code>, <code>text-vex-text</code>,{" "}
        and so on).
      </p>
      <CodeBlock
        filename="app/globals.css"
        lang="css"
        code={TOKENS_SNIPPET}
      />
      <p className="mt-3 text-[13px] leading-relaxed text-vex-text-muted">
        Without this block, VexKit components install but render with undefined
        utility classes. The role tokens are the foundation of the design
        system.
      </p>

      <H2 id="add-a-component">3. Add a component</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-vex-text">
        Pull any VexKit primitive into your codebase via the shadcn CLI:
      </p>
      <CodeBlock filename="terminal" lang="bash" code={installCommand} />
      <p className="mt-3 text-[13px] leading-relaxed text-vex-text-muted">
        VexKit&apos;s registry is currently served from{" "}
        <code>localhost:3000</code> during development. Replace the URL with
        the production origin once VexKit is publicly hosted.
      </p>

      <H2 id="verify-theming">4. Verify theming</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-vex-text">
        The component lands at <code>components/ui/vex-placeholder.tsx</code>{" "}
        (per your <code>components.json</code> aliases). To verify the role
        tokens flip correctly, set{" "}
        <code>{'<html data-theme="light">'}</code> in your dev tools or your
        layout. The component will switch to light values automatically.
      </p>
      <InfoCallout>
        Build a real theme toggle later, or copy VexKit&apos;s pattern from{" "}
        <code>THEMING.md</code>. The tokens you just installed are designed to
        respond to <code>data-theme</code> changes without component-side code.
      </InfoCallout>

      <Pager next={{ title: "Quick Start", path: "/docs/quick-start" }} />
    </>
  );
}
