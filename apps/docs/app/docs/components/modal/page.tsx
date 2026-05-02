import { CodeBlock } from "@/components/docs/code-block";
import { H2 } from "@/components/docs/h2";
import { InstallationTabs } from "@/components/docs/installation-tabs";
import { Pager } from "@/components/docs/pager";
import { PropsTable } from "@/components/docs/props-table";

import { ModalExample } from "./modal-example";

export const metadata = {
  title: "Modal — VexKit",
};

const USAGE_SAMPLE = `"use client";

import { useState } from "react";

import { Button } from "@/components/ui/vex-button";
import { Modal } from "@/components/ui/vex-modal";

export function DeleteProjectDialog() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Delete project?"
        description="This will permanently delete vex-app and all of its data. This action cannot be undone."
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </>
        }
      />
    </>
  );
}`;

const PROPS_ROWS = [
  {
    name: "open",
    type: "boolean",
    default: "—",
    description:
      "Required. Whether the dialog is visible. Modal is fully controlled — manage this state in your component.",
  },
  {
    name: "onClose",
    type: "() => void",
    default: "—",
    description:
      "Called when the user dismisses the dialog (close button, ESC, or backdrop click). Without this, the modal cannot be dismissed.",
  },
  {
    name: "title",
    type: "string",
    default: "—",
    description:
      "Required. Header title. Wired to aria-labelledby on the dialog content.",
  },
  {
    name: "description",
    type: "string",
    default: "—",
    description:
      "Optional descriptive text rendered below the title. When passed, wired to aria-describedby. Strongly recommended for confirmations and destructive actions.",
  },
  {
    name: "footer",
    type: "ReactNode",
    default: "—",
    description:
      "Footer region, typically action buttons. Right-aligned with a top divider.",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description:
      "Body content. Renders below the description (if any) and above the footer.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description:
      "Tailwind classes merged onto the dialog content (the panel). Does not target the overlay.",
  },
];

function ExampleSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 rounded-lg border border-vex-border bg-vex-card/40 p-6">
      {children}
    </div>
  );
}

export default function ModalPage() {
  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-vex-text-muted">
          Components
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-vex-heading">
          Modal
        </h1>
        <p className="text-[15px] leading-relaxed text-vex-text">
          An accessible dialog with focus trap, ESC-to-close, and overlay click
          handling. Built on Radix Dialog primitives. Controlled via{" "}
          <code>open</code> / <code>onClose</code>; supports title, optional
          description, footer slot, and children body.
        </p>
      </header>

      <H2 id="installation">Installation</H2>
      <InstallationTabs name="vex-modal" />

      <H2 id="usage">Usage</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-vex-text">
        Modal is fully controlled. Hold the open state in your component,
        render the trigger separately, and pass <code>open</code> and{" "}
        <code>onClose</code> down. Radix handles focus trap, ESC,
        click-outside, and ARIA wiring — your code just decides when the
        dialog is visible.
      </p>
      <ExampleSurface>
        <ModalExample />
      </ExampleSurface>
      <CodeBlock
        filename="components/delete-project-dialog.tsx"
        lang="tsx"
        code={USAGE_SAMPLE}
      />

      <H2 id="props">Props</H2>
      <PropsTable rows={PROPS_ROWS} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-vex-text">
        <li>
          <strong>Focus trap.</strong> While open, keyboard focus is trapped
          inside the dialog — Tab and Shift-Tab cycle through the
          dialog&apos;s focusable elements only. Implemented by Radix&apos;s{" "}
          <code>FocusScope</code> primitive.
        </li>
        <li>
          <strong>Auto-focus on open.</strong> Focus moves to the first
          focusable element inside the dialog when it opens. On close, focus
          returns to the element that triggered the open (typically the open
          button).
        </li>
        <li>
          <strong>ESC and click-outside close.</strong> Pressing Escape or
          clicking the backdrop both dismiss the dialog. Both fire{" "}
          <code>onClose</code>.
        </li>
        <li>
          <strong>Body scroll lock.</strong> While the dialog is open, the
          page behind the backdrop cannot be scrolled. Restored on close.
        </li>
        <li>
          <strong>ARIA wiring.</strong> The dialog has{" "}
          <code>role=&quot;dialog&quot;</code> and{" "}
          <code>aria-modal=&quot;true&quot;</code>. The <code>title</code>{" "}
          prop is wired as <code>aria-labelledby</code>. When you pass{" "}
          <code>description</code>, it is wired as{" "}
          <code>aria-describedby</code>; when you omit it,{" "}
          <code>aria-describedby</code> is set to <code>undefined</code>{" "}
          explicitly to suppress Radix&apos;s dev-mode warning.
        </li>
        <li>
          <strong>
            When to pass <code>description</code>.
          </strong>{" "}
          Pass it for confirmations, destructive actions, and any dialog
          where a screen-reader user needs context beyond the title. For
          trivial dialogs (e.g., a brief acknowledgement), title + children
          is acceptable.
        </li>
        <li>
          <strong>Close button.</strong> The X close button has{" "}
          <code>aria-label=&quot;Close&quot;</code>. The X svg is{" "}
          <code>aria-hidden</code>; screen readers announce only the label.
        </li>
        <li>
          <strong>Consumer responsibility.</strong> You render the trigger
          (typically a Button) and manage <code>open</code> state. Modal
          handles everything inside the dialog — focus, ARIA, dismiss, scroll
          lock — so the consumer doesn&apos;t need to wire those up.
        </li>
      </ul>

      <Pager
        prev={{ title: "Input", path: "/docs/components/input" }}
        next={{ title: "Tabs", path: "/docs/components/tabs" }}
      />
    </>
  );
}
