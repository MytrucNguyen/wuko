import { CodeBlock } from "@/components/docs/code-block";
import { H2 } from "@/components/docs/h2";
import { Pager } from "@/components/docs/pager";
import { PropsTable } from "@/components/docs/props-table";

import {
  TabsAsChildExample,
  TabsControlledExample,
  TabsUncontrolledExample,
} from "./tabs-example";

export const metadata = {
  title: "Tabs — VexKit",
};

const USAGE_SAMPLE = `import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/vex-tabs";

// Anatomy:
//   Tabs (Root, state container)
//   ├── TabsList
//   │   ├── TabsTrigger value="account"
//   │   ├── TabsTrigger value="password"
//   │   └── TabsTrigger value="api"
//   ├── TabsContent value="account"
//   ├── TabsContent value="password"
//   └── TabsContent value="api"
export function SettingsTabs() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="api">API keys</TabsTrigger>
      </TabsList>
      <TabsContent value="account">…</TabsContent>
      <TabsContent value="password">…</TabsContent>
      <TabsContent value="api">…</TabsContent>
    </Tabs>
  );
}`;

const CONTROLLED_SAMPLE = `"use client";

import { useState } from "react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/vex-tabs";

export function ControlledTabs() {
  const [tab, setTab] = useState("first");
  return (
    <Tabs value={tab} onValueChange={setTab}>
      <TabsList>
        <TabsTrigger value="first">First</TabsTrigger>
        <TabsTrigger value="second">Second</TabsTrigger>
        <TabsTrigger value="third">Third</TabsTrigger>
      </TabsList>
      <TabsContent value="first">First tab body.</TabsContent>
      <TabsContent value="second">Second tab body.</TabsContent>
      <TabsContent value="third">Third tab body.</TabsContent>
    </Tabs>
  );
}`;

const ASCHILD_SAMPLE = `import Link from "next/link";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/vex-tabs";

// Pass asChild to substitute your own element as the trigger — Radix
// applies the trigger's props (role, data-state, ref) to your child.
// Common use: a Link that updates the URL when the tab changes.
export function ReleaseNotesTabs() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview" asChild>
          <Link href="/notes#overview">Overview</Link>
        </TabsTrigger>
        <TabsTrigger value="changelog" asChild>
          <Link href="/notes#changelog">Changelog</Link>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">…</TabsContent>
      <TabsContent value="changelog">…</TabsContent>
    </Tabs>
  );
}`;

const TABS_PROPS = [
  {
    name: "value",
    type: "string",
    default: "—",
    description:
      "Controlled active tab value. Pair with onValueChange. Omit (and use defaultValue) for uncontrolled mode.",
  },
  {
    name: "defaultValue",
    type: "string",
    default: "—",
    description:
      "Initial active tab value when uncontrolled. Ignored when value is provided.",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    default: "—",
    description:
      "Fires when the active tab changes. Required for controlled mode.",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description:
      "Layout direction. Vertical orientation rotates roving-focus arrow keys (Up/Down instead of Left/Right).",
  },
  {
    name: "...rest",
    type: "ComponentPropsWithoutRef<typeof Radix.Tabs.Root>",
    default: "—",
    description: "Forwarded to the underlying Radix Tabs.Root.",
  },
];

const TRIGGER_PROPS = [
  {
    name: "value",
    type: "string",
    default: "—",
    description:
      "Required. The unique value matching one TabsContent's value prop.",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description:
      "When true, renders the consumer's child element as the trigger (Radix Slot pattern). Useful for URL-driven tabs (Next Link, anchor) or custom button components.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the trigger; it is skipped by roving focus.",
  },
  {
    name: "...rest",
    type: "ComponentPropsWithoutRef<typeof Radix.Tabs.Trigger>",
    default: "—",
    description: "Forwarded to the underlying Radix Tabs.Trigger button.",
  },
];

function ExampleSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 rounded-lg border border-vex-border bg-vex-card/40 p-6">
      {children}
    </div>
  );
}

export default function TabsPage() {
  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-vex-text-muted">
          Components
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-vex-heading">
          Tabs
        </h1>
        <p className="text-[15px] leading-relaxed text-vex-text">
          A roving-focus tab list with full keyboard navigation (arrow keys,
          Home, End) and an animated active indicator. Built on Radix Tabs.
        </p>
      </header>

      <H2 id="usage">Usage</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-vex-text">
        Tabs is a four-piece compound API: <code>Tabs</code> (Root, state
        container), <code>TabsList</code> (the row of triggers),{" "}
        <code>TabsTrigger</code> (one per tab, sibling under TabsList), and{" "}
        <code>TabsContent</code> (one per tab, sibling to TabsList). Each
        TabsTrigger&apos;s <code>value</code> matches one TabsContent&apos;s{" "}
        <code>value</code>.
      </p>
      <ExampleSurface>
        <TabsUncontrolledExample />
      </ExampleSurface>
      <CodeBlock
        filename="components/settings-tabs.tsx"
        lang="tsx"
        code={USAGE_SAMPLE}
      />

      <H2 id="controlled">Controlled</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-vex-text">
        For full control over the active tab — to sync with URL, server state,
        or external buttons — pass <code>value</code> and{" "}
        <code>onValueChange</code>. Below, the row of buttons under the tabs
        sets the active tab from outside the component.
      </p>
      <ExampleSurface>
        <TabsControlledExample />
      </ExampleSurface>
      <CodeBlock
        filename="components/controlled-tabs.tsx"
        lang="tsx"
        code={CONTROLLED_SAMPLE}
      />

      <H2 id="aschild">As trigger (asChild)</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-vex-text">
        Pass <code>asChild</code> to <code>TabsTrigger</code> to substitute
        your own element as the trigger. Radix applies the trigger&apos;s
        props (role, data-state, focus management) to your child. The most
        common use is URL-driven tabs — render a <code>Link</code> as the
        trigger so navigation and tab state stay in sync.
      </p>
      <ExampleSurface>
        <TabsAsChildExample />
      </ExampleSurface>
      <CodeBlock
        filename="components/release-notes-tabs.tsx"
        lang="tsx"
        code={ASCHILD_SAMPLE}
      />

      <H2 id="props">Props</H2>
      <p className="mb-3 text-[14px] leading-relaxed text-vex-text">
        <code>Tabs</code> (Root):
      </p>
      <PropsTable rows={TABS_PROPS} />
      <p className="mb-3 mt-6 text-[14px] leading-relaxed text-vex-text">
        <code>TabsTrigger</code>:
      </p>
      <PropsTable rows={TRIGGER_PROPS} />
      <p className="mt-6 text-[14px] leading-relaxed text-vex-text">
        <code>TabsList</code> and <code>TabsContent</code> are thin wrappers
        around their Radix counterparts and accept all of those primitives&apos;
        props.
      </p>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-vex-text">
        <li>
          Roving focus: arrow keys (Left/Right for horizontal, Up/Down for
          vertical), Home (first tab), End (last tab). Tabs not currently
          focused are skipped by Tab key — only the active tab is in the tab
          order, matching the ARIA tabs spec.
        </li>
        <li>
          The active TabsContent is reachable via Tab from the active trigger,
          and gets a <code>focus-visible:outline</code> when focused so
          long-content panels are keyboard-accessible.
        </li>
        <li>
          <code>asChild</code> uses Radix&apos;s Slot pattern: the
          consumer&apos;s child element receives the trigger&apos;s ARIA role
          (<code>role=&quot;tab&quot;</code>),{" "}
          <code>aria-selected</code>, <code>aria-controls</code>, and ref. The
          substituted element must accept those attributes — anchors, buttons,
          and any forwardRef component work.
        </li>
        <li>
          The active indicator bar is decorative — a CSS{" "}
          <code>::after</code> pseudo-element driven by{" "}
          <code>data-state=&quot;active&quot;</code>. Not announced by screen
          readers; the role + aria-selected does the announcing.
        </li>
      </ul>

      <Pager prev={{ title: "Alert", path: "/docs/components/alert" }} />
    </>
  );
}
