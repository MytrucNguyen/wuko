import { CodeBlock } from "@/components/docs/code-block";
import { H2 } from "@/components/docs/h2";
import { InstallationTabs } from "@/components/docs/installation-tabs";
import { Pager } from "@/components/docs/pager";
import { PropsTable } from "@/components/docs/props-table";

import { TooltipExample } from "./tooltip-example";

export const metadata = {
  title: "Tooltip — VexKit",
};

const USAGE_SAMPLE = `import { Bell, Trash2, Zap } from "lucide-react";

import { Button } from "@/components/ui/vex-button";
import { Tooltip } from "@/components/ui/vex-tooltip";

export function ButtonRow() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Tooltip content="Trigger a deploy">
        <Button>
          <Zap className="size-4" />
          Deploy
        </Button>
      </Tooltip>
      <Tooltip content="3 unread notifications">
        <Button variant="outline">
          <Bell className="size-4" />
          Inbox
        </Button>
      </Tooltip>
      <Tooltip content="Permanently delete">
        <Button variant="danger">
          <Trash2 className="size-4" />
          Delete
        </Button>
      </Tooltip>
    </div>
  );
}`;

const PROPS_ROWS = [
  {
    name: "content",
    type: "ReactNode",
    default: "—",
    description:
      "Required. The tooltip body — a label, hint, or short description of the trigger.",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description:
      "Required. The trigger element. Tooltip uses Radix's asChild pattern, so the trigger renders as your element directly (no extra wrapper).",
  },
  {
    name: "side",
    type: '"top" | "bottom" | "left" | "right"',
    default: '"top"',
    description:
      "Which side of the trigger to position the tooltip on. Radix automatically flips to the opposite side if the chosen side would cause viewport collision.",
  },
  {
    name: "sideOffset",
    type: "number",
    default: "8",
    description:
      "Pixel gap between the trigger and the tooltip. Default 8 matches a typical small-but-distinct visual separation.",
  },
  {
    name: "delayDuration",
    type: "number",
    default: "700",
    description:
      "Milliseconds before the tooltip opens on hover. Lower values feel more responsive; higher values reduce noise. Each Tooltip has its own Provider, so this delay is per-tooltip.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description:
      "Tailwind classes merged onto the tooltip Content (the body, not the trigger).",
  },
  {
    name: "...rest",
    type: "ComponentPropsWithoutRef<typeof Tooltip.Content>",
    default: "—",
    description:
      "Forwarded to the underlying Radix Tooltip.Content — id, aria-label, data-*, onEscapeKeyDown, onPointerDownOutside, etc. Excludes children (which we use as the trigger), side, sideOffset, and asChild.",
  },
];

function ExampleSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 rounded-lg border border-vex-border bg-vex-card/40 p-6">
      {children}
    </div>
  );
}

export default function TooltipPage() {
  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-vex-text-muted">
          Components
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-vex-heading">
          Tooltip
        </h1>
        <p className="text-[15px] leading-relaxed text-vex-text">
          A short, hover- or focus-revealed label built on Radix Tooltip.
          Uncontrolled — Radix manages open/close internally; consumers pass{" "}
          <code>content</code> (the body) and <code>children</code> (the
          trigger). Each Tooltip is self-contained with its own Provider, so
          no app-root wrap is needed.
        </p>
      </header>

      <H2 id="installation">Installation</H2>
      <InstallationTabs name="vex-tooltip" />

      <H2 id="usage">Usage</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-vex-text">
        Wrap any focusable trigger element with a Tooltip. The first row
        below shows tooltips on Buttons (default top side); the second row
        demonstrates all four <code>side</code> options.
      </p>
      <ExampleSurface>
        <TooltipExample />
      </ExampleSurface>
      <CodeBlock
        filename="components/button-row.tsx"
        lang="tsx"
        code={USAGE_SAMPLE}
      />

      <H2 id="props">Props</H2>
      <PropsTable rows={PROPS_ROWS} />

      <Pager
        prev={{ title: "Toggle", path: "/docs/components/toggle" }}
        next={{ title: "Components", path: "/docs/components" }}
      />
    </>
  );
}
