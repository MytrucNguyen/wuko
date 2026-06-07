import { CodeBlock } from "@/components/docs/code-block";
import { H2 } from "@/components/docs/h2";
import { InstallationTabs } from "@/components/docs/installation-tabs";
import { Pager } from "@/components/docs/pager";
import { PropsTable } from "@/components/docs/props-table";

import { ToggleExample } from "./toggle-example";

export const metadata = {
  title: "Toggle | Wuko",
};

const USAGE_SAMPLE = `"use client";

import { useState } from "react";

import { Toggle } from "@/components/ui/toggle";

export function NotificationSettings() {
  const [notifications, setNotifications] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [smallEnabled, setSmallEnabled] = useState(false);
  return (
    <div className="space-y-3">
      <Toggle
        checked={notifications}
        onChange={setNotifications}
        label="Enable notifications"
      />
      <Toggle
        checked={marketing}
        onChange={setMarketing}
        label="Marketing emails"
      />
      <Toggle
        checked={true}
        onChange={() => {}}
        disabled
        label="Disabled (on)"
      />
      <Toggle
        checked={smallEnabled}
        onChange={setSmallEnabled}
        size="sm"
        label="Small"
      />
    </div>
  );
}`;

const PROPS_ROWS = [
  {
    name: "checked",
    type: "boolean",
    default: "—",
    description:
      "Required. Whether the toggle is on. Toggle is fully controlled. Manage this state in your component.",
  },
  {
    name: "onChange",
    type: "(checked: boolean) => void",
    default: "—",
    description:
      "Required. Called with the new state when the user toggles via click, Space key, or label click.",
  },
  {
    name: "label",
    type: "string",
    default: "—",
    description:
      "Optional inline label rendered next to the switch. HTML5 implicit label association: clicking the label area toggles the switch.",
  },
  {
    name: "size",
    type: '"sm" | "md"',
    default: '"md"',
    description:
      "Two sizes available: sm for compact inline contexts (settings rows, table cells), md for standalone settings or form fields.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description:
      "Disables interaction. Dims the entire wrapper (label + switch) via opacity-50.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Tailwind classes merged onto the wrapping label element.",
  },
  {
    name: "...rest",
    type: "ComponentPropsWithoutRef<typeof Switch.Root>",
    default: "—",
    description:
      "Forwarded to the underlying Radix Switch.Root: id, name, value, form, aria-*, data-*, etc. Excludes the controlled-mode pair (checked, defaultChecked, onCheckedChange) to prevent control-mode mixing.",
  },
];

function ExampleSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 rounded-lg border border-wuko-border bg-wuko-card/40 p-6">
      {children}
    </div>
  );
}

export default function TogglePage() {
  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-wuko-text-muted">
          Components
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-wuko-heading">
          Toggle
        </h1>
        <p className="text-[15px] leading-relaxed text-wuko-text">
          A two-state switch built on Radix Switch. Controlled via{" "}
          <code>checked</code> / <code>onChange</code>; supports sm and md
          sizes, optional inline label, and disabled state. For
          form-submitted boolean inputs, prefer Checkbox.
        </p>
      </header>

      <H2 id="installation">Installation</H2>
      <InstallationTabs name="toggle" />

      <H2 id="usage">Usage</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Toggle is fully controlled. Hold the boolean state in your component
        and pass <code>checked</code> + <code>onChange</code> down. Radix
        handles the keyboard (Space toggles), focus management, and form
        integration; your code just decides what the toggle controls.
      </p>
      <ExampleSurface>
        <ToggleExample />
      </ExampleSurface>
      <CodeBlock
        filename="components/notification-settings.tsx"
        lang="tsx"
        code={USAGE_SAMPLE}
      />

      <H2 id="props">Props</H2>
      <PropsTable rows={PROPS_ROWS} />

      <Pager
        prev={{ title: "Table", path: "/docs/components/table" }}
        next={{ title: "Tooltip", path: "/docs/components/tooltip" }}
      />
    </>
  );
}
