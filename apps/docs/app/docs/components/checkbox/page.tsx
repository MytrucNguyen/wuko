import { CodeBlock } from "@/components/docs/code-block";
import { H2 } from "@/components/docs/h2";
import { InstallationTabs } from "@/components/docs/installation-tabs";
import { Pager } from "@/components/docs/pager";
import { PropsTable } from "@/components/docs/props-table";
import { Checkbox } from "@/registry/default/ui/checkbox";

export const metadata = {
  title: "Checkbox | Wuko",
};

const USAGE_SAMPLE = `import { Checkbox } from "@/components/ui/checkbox";

export function Example() {
  return (
    <label className="flex items-center gap-2">
      <Checkbox />
      Accept terms and conditions
    </label>
  );
}`;

const CHECKED_STATE_SAMPLE = `"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

export function Example() {
  const [checked, setChecked] = React.useState(false);

  return <Checkbox checked={checked} onCheckedChange={setChecked} />;
}`;

const INDETERMINATE_SAMPLE = `<Checkbox checked="indeterminate" />`;

const INVALID_SAMPLE = `<label className="flex items-center gap-2">
  <Checkbox aria-invalid="true" />
  Accept terms and conditions
</label>`;

const DISABLED_SAMPLE = `<label className="flex items-center gap-2 opacity-50">
  <Checkbox disabled />
  Enable notifications
</label>`;

const GROUP_SAMPLE = `"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

export function Example() {
  const [items, setItems] = React.useState({
    hardDisks: true,
    externalDisks: false,
    cdsDvds: false,
    servers: true,
  });

  return (
    <div className="flex flex-col gap-3">
      <div className="text-sm font-medium">Show these items on the desktop:</div>
      {Object.entries(items).map(([key, value]) => (
        <label key={key} className="flex items-center gap-2 text-sm">
          <Checkbox
            checked={value}
            onCheckedChange={(v) => setItems({ ...items, [key]: v === true })}
          />
          {key}
        </label>
      ))}
    </div>
  );
}`;

const PROPS_ROWS = [
  {
    name: "checked",
    type: "boolean | \"indeterminate\"",
    default: "false",
    description:
      "Controlled checked state. Use the literal string \"indeterminate\" for the third state.",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    default: "false",
    description:
      "Initial checked state for uncontrolled use. Use checked + onCheckedChange for controlled state.",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean | \"indeterminate\") => void",
    default: "—",
    description: "Fires when the checked state changes.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables interaction and reduces opacity.",
  },
  {
    name: "required",
    type: "boolean",
    default: "false",
    description:
      "Marks the checkbox as required for form submission.",
  },
  {
    name: "aria-invalid",
    type: "boolean | \"true\" | \"false\"",
    default: "—",
    description:
      "When true, applies the invalid state styling (red border, red focus ring).",
  },
  {
    name: "name",
    type: "string",
    default: "—",
    description: "The name attribute submitted with form data.",
  },
  {
    name: "value",
    type: "string",
    default: "\"on\"",
    description: "The value submitted with form data when checked.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional Tailwind classes merged with defaults.",
  },
];

function ExampleSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center justify-center rounded-lg border border-wuko-border bg-wuko-card/40 p-12">
      {children}
    </div>
  );
}

export default function CheckboxPage() {
  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-wuko-text-muted">
          Components
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-wuko-heading">
          Checkbox
        </h1>
        <p className="text-[15px] leading-relaxed text-wuko-text">
          A control that toggles between checked, unchecked, and indeterminate
          states. Built on Radix Checkbox for full keyboard accessibility, with
          aria-invalid styling for form validation. For form-submitted boolean
          inputs, use Checkbox. For instant-action toggles (e.g., enable a
          feature), prefer Toggle.
        </p>
      </header>

      <H2 id="installation">Installation</H2>
      <InstallationTabs name="checkbox" />

      <H2 id="usage">Usage</H2>
      <ExampleSurface>
        <label className="flex items-center gap-2 text-sm text-wuko-text">
          <Checkbox />
          Accept terms and conditions
        </label>
      </ExampleSurface>
      <CodeBlock
        filename="components/example.tsx"
        lang="tsx"
        code={USAGE_SAMPLE}
      />

      <H2 id="checked-state">Checked state</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Use <code>defaultChecked</code> for uncontrolled checkboxes, or{" "}
        <code>checked</code> and <code>onCheckedChange</code> to control the
        state.
      </p>
      <ExampleSurface>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 text-sm text-wuko-text">
            <Checkbox defaultChecked />
            Defaults to checked
          </label>
          <label className="flex items-center gap-2 text-sm text-wuko-text">
            <Checkbox />
            Defaults to unchecked
          </label>
        </div>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={CHECKED_STATE_SAMPLE} />

      <H2 id="indeterminate">Indeterminate</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Set <code>checked=&quot;indeterminate&quot;</code> for a third state —
        useful when a parent checkbox represents partial selection of its
        children (e.g., a header checkbox controlling some-but-not-all selected
        rows).
      </p>
      <ExampleSurface>
        <label className="flex items-center gap-2 text-sm text-wuko-text">
          <Checkbox checked="indeterminate" />
          Some items selected
        </label>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={INDETERMINATE_SAMPLE} />

      <H2 id="invalid">Invalid state</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Set <code>aria-invalid=&quot;true&quot;</code> to indicate a validation
        error. The border and focus ring turn red.
      </p>
      <ExampleSurface>
        <label className="flex items-center gap-2 text-sm text-wuko-text">
          <Checkbox aria-invalid="true" />
          Accept terms and conditions
        </label>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={INVALID_SAMPLE} />

      <H2 id="disabled">Disabled</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Use the <code>disabled</code> prop to prevent interaction. Pair with
        muted label styling for context.
      </p>
      <ExampleSurface>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 text-sm text-wuko-text opacity-50">
            <Checkbox disabled />
            Enable notifications
          </label>
          <label className="flex items-center gap-2 text-sm text-wuko-text opacity-50">
            <Checkbox disabled defaultChecked />
            Already enabled (disabled)
          </label>
        </div>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={DISABLED_SAMPLE} />

      <H2 id="group">Group</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Use multiple labeled checkboxes under a shared heading for selection
        lists. Each maintains independent state.
      </p>
      <ExampleSurface>
        <div className="flex flex-col gap-3">
          <div className="text-sm font-medium text-wuko-heading">
            Show these items on the desktop:
          </div>
          <label className="flex items-center gap-2 text-sm text-wuko-text">
            <Checkbox defaultChecked />
            Hard disks
          </label>
          <label className="flex items-center gap-2 text-sm text-wuko-text">
            <Checkbox />
            External disks
          </label>
          <label className="flex items-center gap-2 text-sm text-wuko-text">
            <Checkbox />
            CDs, DVDs, and iPods
          </label>
          <label className="flex items-center gap-2 text-sm text-wuko-text">
            <Checkbox defaultChecked />
            Connected servers
          </label>
        </div>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={GROUP_SAMPLE} />

      <H2 id="props">Props</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Forwards all props to the underlying Radix Checkbox. The most commonly
        used props are listed below.
      </p>
      <PropsTable rows={PROPS_ROWS} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-wuko-text">
        <li>
          Built on Radix Checkbox. Keyboard support: Tab to focus, Space to
          toggle. Screen readers announce checked, unchecked, and indeterminate
          states.
        </li>
        <li>
          Wrap each checkbox in a <code>&lt;label&gt;</code> with associated
          text. Clicking the label toggles the checkbox and screen readers
          announce the label as the checkbox's name.
        </li>
        <li>
          For invalid state, set <code>aria-invalid=&quot;true&quot;</code>.
          The styling change is paired with the ARIA attribute so screen
          readers announce the validation state.
        </li>
        <li>
          The <code>peer</code> utility on the underlying Radix Root lets you
          style sibling elements based on checkbox state (e.g.,{" "}
          <code>peer-disabled:opacity-50</code> on a label).
        </li>
        <li>
          For checkboxes in form submissions, set the <code>name</code> prop.
          The value (default <code>&quot;on&quot;</code>) is submitted when
          checked.
        </li>
      </ul>

      <Pager
        prev={{ title: "DropdownMenu", path: "/docs/components/dropdown-menu" }}
        next={{ title: "DropdownMenu", path: "/docs/components/dropdown-menu" }}
      />
    </>
  );
}