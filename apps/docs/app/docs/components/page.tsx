import Link from "next/link";

import { Pager } from "@/components/docs/pager";

export const metadata = {
  title: "Components | Wuko",
};

const COMPONENTS = [
  {
    name: "Alert",
    slug: "alert",
    description:
      "Inline contextual messages for info, success, warning, and danger states. Supports an optional title and dismissible variants.",
  },
  {
    name: "Avatar",
    slug: "avatar",
    description:
      "Displays a user image with a typed fallback, three size variants, and an optional presence status dot.",
  },
  {
    name: "Badge",
    slug: "badge",
    description:
      "A small inline label for status, counts, or category tags. Six color treatments cover neutral through destructive.",
  },
  {
    name: "Button",
    slug: "button",
    description:
      "Triggers an action. Five variants from primary to ghost cover the full hierarchy, with built-in loading, disabled, and icon slots.",
  },
  {
    name: "Card",
    slug: "card",
    description:
      "A bordered surface for grouping related content. The neutral building block behind most composed UI in the kit.",
  },
  {
    name: "Checkbox",
    slug: "checkbox",
    description:
      "A control that toggles between checked, unchecked, and indeterminate states. Built on Radix Checkbox with aria-invalid support and full keyboard accessibility.",
  },
  {
    name: "DropdownMenu",
    slug: "dropdown-menu",
    description:
      "A menu of actions or options triggered by a button. Supports items, labels, separators, shortcuts, checkbox/radio items, submenus, and a destructive variant. Built on Radix DropdownMenu.",
  },
  {
    name: "Input",
    slug: "input",
    description:
      "A labeled text field with hint and error states, three size variants, and a left-icon slot. Includes a built-in password reveal.",
  },
  {
    name: "Modal",
    slug: "modal",
    description:
      "An accessible dialog with title, description, and footer slots. Handles focus trap, scroll lock, and keyboard dismissal.",
  },
  {
    name: "Tabs",
    slug: "tabs",
    description:
      "Composable tab primitives: Root, List, Trigger, and Content. Supports controlled and uncontrolled usage with full keyboard navigation.",
  },
  {
    name: "Table",
    slug: "table",
    description:
      "A responsive table with header, body, footer, row, cell, head, and caption sub-components. Built on native HTML table elements with consistent border, hover, and selection states.",
  },
  {
    name: "Toggle",
    slug: "toggle",
    description:
      "A two-state on/off switch with an associated label, disabled state, and proper ARIA semantics.",
  },
  {
    name: "Tooltip",
    slug: "tooltip",
    description:
      "A small overlay that appears on hover or focus, anchored to its trigger. Includes side and alignment controls.",
  },
];

export default function ComponentsIndexPage() {
  return (
    <>
      <header className="mb-10">
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-wuko-heading">
          Components
        </h1>
        <p className="text-[15px] leading-relaxed text-wuko-text">
          Browse the full set of Wuko components. Each one is themeable,
          accessible, and ships with full keyboard support.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {COMPONENTS.map(({ name, slug, description }) => (
          <Link
            key={slug}
            href={`/docs/components/${slug}`}
            className="group rounded-lg border border-wuko-border p-5 transition-colors hover:border-wuko-accent/50 hover:bg-wuko-card/40"
          >
            <div className="mb-1.5 text-base font-semibold text-wuko-heading group-hover:text-wuko-accent">
              {name}
            </div>
            <p className="text-[13.5px] leading-relaxed text-wuko-text-muted">
              {description}
            </p>
          </Link>
        ))}
      </div>

      <Pager prev={{ title: "Tooltip", path: "/docs/components/tooltip" }} />
    </>
  );
}