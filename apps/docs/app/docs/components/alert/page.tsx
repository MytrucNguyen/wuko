import { CodeBlock } from "@/components/docs/code-block";
import { H2 } from "@/components/docs/h2";
import { InstallationTabs } from "@/components/docs/installation-tabs";
import { Pager } from "@/components/docs/pager";
import { PropsTable } from "@/components/docs/props-table";
import { Alert } from "@/registry/default/ui/alert";

import { AlertCloseExample } from "./alert-example";

export const metadata = {
  title: "Alert | VexKit",
};

const VARIANTS_SAMPLE = `import { Alert } from "@/components/ui/vex-alert";

export function AlertVariants() {
  return (
    <div className="space-y-3">
      <Alert variant="info">A new version of VexKit is available.</Alert>
      <Alert variant="success">Your changes have been saved.</Alert>
      <Alert variant="warning">Your session expires in 2 minutes.</Alert>
      <Alert variant="danger">Could not connect to the server.</Alert>
    </div>
  );
}`;

const TITLE_SAMPLE = `<Alert variant="info" title="Heads up">
  We just shipped two new components — Alert and Tabs.
</Alert>
<Alert variant="danger" title="Build failed">
  3 of 12 tests failed. Check the logs for details.
</Alert>`;

const CLOSE_SAMPLE = `"use client";

import { useState } from "react";

import { Alert } from "@/components/ui/vex-alert";

export function DismissibleAlert() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <Alert
      variant="warning"
      title="Unsaved changes"
      onClose={() => setOpen(false)}
    >
      You have edits that haven't been saved. Save before navigating away.
    </Alert>
  );
}`;

const PROPS_ROWS = [
  {
    name: "variant",
    type: '"info" | "success" | "warning" | "danger"',
    default: '"info"',
    description:
      'Selects the icon, color, and ARIA role. info and success render with role="status" (polite); warning and danger render with role="alert" (assertive).',
  },
  {
    name: "title",
    type: "ReactNode",
    default: "—",
    description:
      "Optional bolded heading rendered above the body. Tinted with the variant's foreground color.",
  },
  {
    name: "onClose",
    type: "() => void",
    default: "—",
    description:
      'When provided, renders a close button at the top-right corner with aria-label="Close". The Alert does not own the dismissed state. Wire onClose to your own useState so the consumer controls visibility.',
  },
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "The body content of the alert.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Tailwind classes merged onto the Alert root div.",
  },
  {
    name: "...rest",
    type: "HTMLAttributes<HTMLDivElement>",
    default: "—",
    description:
      "Forwarded to the underlying div. Excludes title (redefined as ReactNode) and role (controlled internally by variant).",
  },
];

function ExampleSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 rounded-lg border border-wuko-border bg-wuko-card/40 p-6">
      {children}
    </div>
  );
}

export default function AlertPage() {
  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-wuko-text-muted">
          Components
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-wuko-heading">
          Alert
        </h1>
        <p className="text-[15px] leading-relaxed text-wuko-text">
          An inline message block with info, success, warning, and danger
          variants. Each variant ships its own icon, role-token color, and ARIA
          role appropriate to the urgency. Optional title and close button.
        </p>
      </header>

      <H2 id="installation">Installation</H2>
      <InstallationTabs name="vex-alert" />

      <H2 id="variants">Variants</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Four variants cover the typical message hierarchy. <code>info</code>{" "}
        and <code>success</code> render with{" "}
        <code>role=&quot;status&quot;</code> (polite, queued by the screen
        reader). <code>warning</code> and <code>danger</code> render with{" "}
        <code>role=&quot;alert&quot;</code> (assertive, interrupts the current
        announcement).
      </p>
      <ExampleSurface>
        <div className="space-y-3">
          <Alert variant="info">A new version of VexKit is available.</Alert>
          <Alert variant="success">Your changes have been saved.</Alert>
          <Alert variant="warning">
            Your session expires in 2 minutes.
          </Alert>
          <Alert variant="danger">Could not connect to the server.</Alert>
        </div>
      </ExampleSurface>
      <CodeBlock
        filename="components/alert-variants.tsx"
        lang="tsx"
        code={VARIANTS_SAMPLE}
      />

      <H2 id="title">With title</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Pass <code>title</code> to render a bolded heading above the body. The
        title takes the variant&apos;s foreground color so it pops against the
        tinted background.
      </p>
      <ExampleSurface>
        <div className="space-y-3">
          <Alert variant="info" title="Heads up">
            We just shipped two new components: Alert and Tabs.
          </Alert>
          <Alert variant="danger" title="Build failed">
            3 of 12 tests failed. Check the logs for details.
          </Alert>
        </div>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={TITLE_SAMPLE} />

      <H2 id="close">Dismissible</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Pass an <code>onClose</code> callback to render a close button at the
        top-right corner. The Alert does not own the dismissed state. Wire{" "}
        <code>onClose</code> to your own <code>useState</code> so the consumer
        controls visibility.
      </p>
      <ExampleSurface>
        <AlertCloseExample />
      </ExampleSurface>
      <CodeBlock
        filename="components/dismissible-alert.tsx"
        lang="tsx"
        code={CLOSE_SAMPLE}
      />

      <H2 id="props">Props</H2>
      <PropsTable rows={PROPS_ROWS} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-wuko-text">
        <li>
          ARIA role is variant-driven, not consumer-overridable.{" "}
          <code>info</code> and <code>success</code> use{" "}
          <code>role=&quot;status&quot;</code> (polite, appended to the
          screen-reader queue without interrupting). <code>warning</code> and{" "}
          <code>danger</code> use <code>role=&quot;alert&quot;</code>{" "}
          (assertive, interrupts the current announcement).
        </li>
        <li>
          Variant icons are <code>aria-hidden=&quot;true&quot;</code>. They
          are decorative duplicates of the role-driven semantic. Screen readers
          announce the role; sighted users see the icon.
        </li>
        <li>
          The close button gets <code>aria-label=&quot;Close&quot;</code> and a
          focus ring matching Button&apos;s convention (
          <code>focus-visible:outline</code>). It uses{" "}
          <code>type=&quot;button&quot;</code> so it does not submit forms.
        </li>
        <li>
          All variants pass WCAG AA for both title and body text on the tinted
          surface in dark and light themes: lowest contrast 4.57:1 for
          info-light and success-light titles.
        </li>
      </ul>

      <Pager
        prev={{ title: "Quick Start", path: "/docs/quick-start" }}
        next={{ title: "Avatar", path: "/docs/components/avatar" }}
      />
    </>
  );
}
