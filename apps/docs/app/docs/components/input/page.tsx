import { Mail, Search } from "lucide-react";

import { CodeBlock } from "@/components/docs/code-block";
import { H2 } from "@/components/docs/h2";
import { InstallationTabs } from "@/components/docs/installation-tabs";
import { Pager } from "@/components/docs/pager";
import { PropsTable } from "@/components/docs/props-table";
import { Input } from "@/registry/default/ui/input";

import { PasswordExample } from "./password-example";

export const metadata = {
  title: "Input | Wuko",
};

const USAGE_SAMPLE = `import { Input } from "@/components/ui/input";

export function Example() {
  return <Input label="Email" placeholder="you@example.com" />;
}`;

const SIZES_SAMPLE = `<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium" />
<Input size="lg" placeholder="Large" />`;

const ICONS_SAMPLE = `import { Mail, Search } from "lucide-react";

<Input
  leftIcon={<Mail className="size-4" />}
  placeholder="you@example.com"
/>
<Input
  leftIcon={<Search className="size-4" />}
  placeholder="Search docs..."
/>`;

const HINTS_SAMPLE = `<Input label="Username" defaultValue="wuko" hint="Must be 3–20 characters." />
<Input
  label="Email"
  defaultValue="not-an-email"
  error="Enter a valid email address."
/>`;

const PASSWORD_SAMPLE = `"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";

export function PasswordField() {
  const [show, setShow] = useState(false);
  return (
    <Input
      label="Password"
      type={show ? "text" : "password"}
      defaultValue="kitsune-9-tails"
      rightIcon={
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="hover:text-wuko-heading"
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      }
    />
  );
}`;

const DISABLED_SAMPLE = `<Input label="Read-only" disabled defaultValue="wuko@wuko.dev" />`;

const PROPS_ROWS = [
  {
    name: "label",
    type: "string",
    default: "—",
    description: "Visible field label, linked to the input via htmlFor.",
  },
  {
    name: "hint",
    type: "string",
    default: "—",
    description:
      "Helper text below the field. Linked to the input via aria-describedby.",
  },
  {
    name: "error",
    type: "string",
    default: "—",
    description:
      "Replaces hint with an error message, swaps the border to the destructive foreground token, and sets aria-invalid.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Controls height, font size, and horizontal padding.",
  },
  {
    name: "leftIcon",
    type: "ReactNode",
    default: "—",
    description:
      "Decorative icon inside the field on the left. Pointer events disabled so clicks fall through to the input.",
  },
  {
    name: "rightIcon",
    type: "ReactNode",
    default: "—",
    description:
      "Element inside the field on the right. Pointer events allowed. Supports interactive controls like a password reveal toggle.",
  },
  {
    name: "type",
    type: "string",
    default: '"text"',
    description: "Standard HTML input type.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables interaction and dims the field.",
  },
  {
    name: "id",
    type: "string",
    default: "—",
    description:
      "Optional. Defaults to a stable id generated via React.useId().",
  },
  {
    name: "...rest",
    type: "InputHTMLAttributes<HTMLInputElement>",
    default: "—",
    description: "All native input attributes are forwarded to the element.",
  },
];

function ExampleSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 rounded-lg border border-wuko-border bg-wuko-card/40 p-6">
      {children}
    </div>
  );
}

export default function InputPage() {
  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-wuko-text-muted">
          Components
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-wuko-heading">
          Input
        </h1>
        <p className="text-[15px] leading-relaxed text-wuko-text">
          Single-line text field. Supports labels, hints, error states, leading
          and trailing icons, and any native input type.
        </p>
      </header>

      <H2 id="installation">Installation</H2>
      <InstallationTabs name="input" />

      <H2 id="usage">Usage</H2>
      <ExampleSurface>
        <div className="max-w-sm">
          <Input label="Email" placeholder="you@example.com" />
        </div>
      </ExampleSurface>
      <CodeBlock
        filename="components/example.tsx"
        lang="tsx"
        code={USAGE_SAMPLE}
      />

      <H2 id="sizes">Sizes</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Three sizes mirror Button&apos;s sm / md / lg, so inputs and buttons line
        up cleanly when composed in the same row.
      </p>
      <ExampleSurface>
        <div className="max-w-sm space-y-3">
          <Input size="sm" placeholder="Small" />
          <Input size="md" placeholder="Medium" />
          <Input size="lg" placeholder="Large" />
        </div>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={SIZES_SAMPLE} />

      <H2 id="icons">With icons</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Pass any <code>ReactNode</code> to <code>leftIcon</code> or{" "}
        <code>rightIcon</code>. Left icons are decorative. Pointer events are
        disabled so clicks fall through to the input. Right icons accept pointer
        events to support interactive controls (see Password below).
      </p>
      <ExampleSurface>
        <div className="max-w-sm space-y-3">
          <Input
            leftIcon={<Mail className="size-4" />}
            placeholder="you@example.com"
          />
          <Input
            leftIcon={<Search className="size-4" />}
            placeholder="Search docs..."
          />
        </div>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={ICONS_SAMPLE} />

      <H2 id="hints">Hints &amp; errors</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        <code>hint</code> renders supportive text below the field.{" "}
        <code>error</code> replaces it with an error message, swaps the border
        to <code>--wuko-danger-fg</code>, and sets{" "}
        <code>aria-invalid=&quot;true&quot;</code>. Visual and screen-reader
        signals are coupled. The styling is driven from the ARIA attribute, so
        you cannot show the error state without also announcing it.
      </p>
      <ExampleSurface>
        <div className="max-w-sm space-y-4">
          <Input
            label="Username"
            defaultValue="wuko"
            hint="Must be 3–20 characters."
          />
          <Input
            label="Email"
            defaultValue="not-an-email"
            error="Enter a valid email address."
          />
        </div>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={HINTS_SAMPLE} />

      <H2 id="password">Password with toggle</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Compose <code>rightIcon</code> with a clickable visibility toggle. This
        is the design intent behind the asymmetric icon slots. The right slot
        accepts pointer events so an embedded button can receive clicks.
      </p>
      <ExampleSurface>
        <div className="max-w-sm">
          <PasswordExample />
        </div>
      </ExampleSurface>
      <CodeBlock
        filename="components/password-field.tsx"
        lang="tsx"
        code={PASSWORD_SAMPLE}
      />

      <H2 id="disabled">Disabled</H2>
      <ExampleSurface>
        <div className="max-w-sm">
          <Input label="Read-only" disabled defaultValue="wuko@wuko.dev" />
        </div>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={DISABLED_SAMPLE} />

      <H2 id="props">Props</H2>
      <PropsTable rows={PROPS_ROWS} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-wuko-text">
        <li>
          Renders a native <code>&lt;input&gt;</code> element. Tab focus, typing,
          and form submission work without extra wiring.
        </li>
        <li>
          Each input gets a stable id via <code>React.useId()</code>. The label
          is linked via <code>htmlFor</code>; clicking the label focuses the
          input. Pass <code>id</code> to override.
        </li>
        <li>
          <code>error</code> sets <code>aria-invalid=&quot;true&quot;</code>;
          the visual error styling is driven from that ARIA attribute, so the
          screen-reader and visual signals are structurally coupled.
        </li>
        <li>
          The hint or error message gets a unique id (suffixed{" "}
          <code>-msg</code>). The input&apos;s <code>aria-describedby</code>{" "}
          points at it. If you pass your own <code>aria-describedby</code>,
          Wuko merges yours with the message id rather than overwriting.
        </li>
        <li>
          Focus uses{" "}
          <code>focus-visible:border-wuko-accent</code> plus a soft{" "}
          <code>focus-visible:ring-wuko-accent/30</code> ring inside the visual
          frame, different convention from Button&apos;s external{" "}
          <code>focus-visible:outline</code>, because input fields conventionally
          show focus on the editable surface itself.
        </li>
        <li>
          <code>disabled</code> uses the native attribute, removing the input
          from the tab order and blocking interaction. Style adjusts via{" "}
          <code>disabled:opacity-50</code> and{" "}
          <code>disabled:cursor-not-allowed</code>.
        </li>
        <li>
          Left icons set <code>pointer-events-none</code> so they don&apos;t
          swallow clicks meant for the input. Right icons leave pointer events
          enabled, so an embedded button (e.g., password toggle) receives
          clicks. When using an interactive right-icon control, give the button
          a clear <code>aria-label</code>.
        </li>
      </ul>

      <Pager
        prev={{ title: "DropdownMenu", path: "/docs/components/dropdown-menu" }}
        next={{ title: "Modal", path: "/docs/components/modal" }}
      />
    </>
  );
}
