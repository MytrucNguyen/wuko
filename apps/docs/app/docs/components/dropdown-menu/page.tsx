import {
  ChevronDown,
  Copy,
  CreditCard,
  Eye,
  LogOut,
  Settings,
  Trash2,
  User,
} from "lucide-react";

import { CodeBlock } from "@/components/docs/code-block";
import { H2 } from "@/components/docs/h2";
import { InstallationTabs } from "@/components/docs/installation-tabs";
import { Pager } from "@/components/docs/pager";
import { PropsTable } from "@/components/docs/props-table";
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

export const metadata = {
  title: "DropdownMenu | Wuko",
};

const USAGE_SAMPLE = `import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

const STRUCTURE_SAMPLE = `DropdownMenu
├── DropdownMenuTrigger
└── DropdownMenuContent
    ├── DropdownMenuGroup
    │   ├── DropdownMenuLabel
    │   ├── DropdownMenuItem
    │   └── DropdownMenuItem
    ├── DropdownMenuSeparator
    ├── DropdownMenuGroup
    │   ├── DropdownMenuCheckboxItem
    │   └── DropdownMenuCheckboxItem
    ├── DropdownMenuSeparator
    ├── DropdownMenuRadioGroup
    │   ├── DropdownMenuRadioItem
    │   └── DropdownMenuRadioItem
    └── DropdownMenuSub
        ├── DropdownMenuSubTrigger
        └── DropdownMenuSubContent
            ├── DropdownMenuItem
            └── DropdownMenuItem`;

const BASIC_SAMPLE = `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`;

const SUBMENU_SAMPLE = `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">More options</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>New file</DropdownMenuItem>
    <DropdownMenuItem>Open</DropdownMenuItem>
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>Email link</DropdownMenuItem>
        <DropdownMenuItem>Copy link</DropdownMenuItem>
        <DropdownMenuItem>Embed</DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>`;

const SHORTCUTS_SAMPLE = `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Edit</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      Copy
      <DropdownMenuShortcut>\u2318C</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      Paste
      <DropdownMenuShortcut>\u2318V</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`;

const ICONS_SAMPLE = `import { User, Settings, LogOut } from "lucide-react";

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Options</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <User className="size-4" />
      Profile
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Settings className="size-4" />
      Settings
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <LogOut className="size-4" />
      Sign out
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`;

const CHECKBOXES_SAMPLE = `"use client";

import * as React from "react";

export function Example() {
  const [showBookmarks, setShowBookmarks] = React.useState(true);
  const [showFullURLs, setShowFullURLs] = React.useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">View</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showBookmarks}
          onCheckedChange={setShowBookmarks}
        >
          Show Bookmarks
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showFullURLs}
          onCheckedChange={setShowFullURLs}
        >
          Show Full URLs
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

const RADIO_GROUP_SAMPLE = `"use client";

import * as React from "react";

export function Example() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Panel position</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

const DESTRUCTIVE_SAMPLE = `import { Trash2 } from "lucide-react";

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Actions</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>View</DropdownMenuItem>
    <DropdownMenuItem>Duplicate</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">
      <Trash2 className="size-4" />
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`;

const COMPLEX_SAMPLE = `"use client";

import * as React from "react";
import { User, Settings, CreditCard, LogOut } from "lucide-react";

export function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Account</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="size-4" />
            Profile
            <DropdownMenuShortcut>\u2318P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="size-4" />
            Billing
            <DropdownMenuShortcut>\u2318B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="size-4" />
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut className="size-4" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

const SUB_COMPONENTS_ROWS = [
  {
    name: "DropdownMenu",
    type: "Radix Root",
    default: "—",
    description:
      "The root container. Forwards all props to Radix's DropdownMenu.Root.",
  },
  {
    name: "DropdownMenuTrigger",
    type: "Radix Trigger",
    default: "—",
    description:
      "The button or element that opens the menu. Supports asChild to compose with a Button.",
  },
  {
    name: "DropdownMenuContent",
    type: "Radix Content",
    default: "—",
    description:
      "The floating panel. Renders into a portal at the end of body. Supports align, side, sideOffset props from Radix.",
  },
  {
    name: "DropdownMenuItem",
    type: "Radix Item",
    default: "—",
    description:
      "A clickable item. Accepts variant=\"default\" | \"destructive\" for destructive actions, and inset for icon alignment.",
  },
  {
    name: "DropdownMenuCheckboxItem",
    type: "Radix CheckboxItem",
    default: "—",
    description:
      "A toggleable item. Controlled via checked and onCheckedChange.",
  },
  {
    name: "DropdownMenuRadioItem",
    type: "Radix RadioItem",
    default: "—",
    description:
      "A single choice in a DropdownMenuRadioGroup. Pass value; the group's value selects one.",
  },
  {
    name: "DropdownMenuRadioGroup",
    type: "Radix RadioGroup",
    default: "—",
    description:
      "Wraps multiple DropdownMenuRadioItems. Controlled via value and onValueChange.",
  },
  {
    name: "DropdownMenuLabel",
    type: "Radix Label",
    default: "—",
    description:
      "Section heading inside the menu. Not selectable. Supports inset for icon alignment.",
  },
  {
    name: "DropdownMenuSeparator",
    type: "Radix Separator",
    default: "—",
    description: "A thin horizontal divider between sections.",
  },
  {
    name: "DropdownMenuShortcut",
    type: "span",
    default: "—",
    description:
      "Displays a keyboard shortcut hint right-aligned in an item (e.g., \u2318C).",
  },
  {
    name: "DropdownMenuGroup",
    type: "Radix Group",
    default: "—",
    description:
      "Wraps related items so screen readers announce them as a group.",
  },
  {
    name: "DropdownMenuSub",
    type: "Radix Sub",
    default: "—",
    description: "Wraps a nested submenu (DropdownMenuSubTrigger + Content).",
  },
  {
    name: "DropdownMenuSubTrigger",
    type: "Radix SubTrigger",
    default: "—",
    description:
      "The item that opens a submenu. Automatically renders a chevron icon on the right.",
  },
  {
    name: "DropdownMenuSubContent",
    type: "Radix SubContent",
    default: "—",
    description: "The floating panel for a submenu.",
  },
];

function ExampleSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center justify-center rounded-lg border border-wuko-border bg-wuko-card/40 p-12">
      {children}
    </div>
  );
}

export default function DropdownMenuPage() {
  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-wuko-text-muted">
          Components
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-wuko-heading">
          DropdownMenu
        </h1>
        <p className="text-[15px] leading-relaxed text-wuko-text">
          Displays a menu of actions or options triggered by a button. Supports
          items, labels, separators, keyboard shortcuts, checkbox/radio items,
          nested submenus, and a destructive variant. Built on Radix UI for
          full keyboard navigation and accessibility.
        </p>
      </header>

      <H2 id="installation">Installation</H2>
      <InstallationTabs name="dropdown-menu" />

      <H2 id="usage">Usage</H2>
      <ExampleSurface>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Open
              <ChevronDown className="ml-2 size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ExampleSurface>
      <CodeBlock
        filename="components/example.tsx"
        lang="tsx"
        code={USAGE_SAMPLE}
      />

      <H2 id="composition">Composition</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Use the following composition to build a <code>DropdownMenu</code>.
      </p>
      <CodeBlock lang="text" code={STRUCTURE_SAMPLE} />

      <H2 id="basic">Basic</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        A basic dropdown menu with a label and separator.
      </p>
      <ExampleSurface>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Open
              <ChevronDown className="ml-2 size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={BASIC_SAMPLE} />

      <H2 id="submenu">Submenu</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Use <code>DropdownMenuSub</code> to nest secondary actions.
      </p>
      <ExampleSurface>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              More options
              <ChevronDown className="ml-2 size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>New file</DropdownMenuItem>
            <DropdownMenuItem>Open</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email link</DropdownMenuItem>
                <DropdownMenuItem>Copy link</DropdownMenuItem>
                <DropdownMenuItem>Embed</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={SUBMENU_SAMPLE} />

      <H2 id="shortcuts">Shortcuts</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Add <code>DropdownMenuShortcut</code> to show keyboard hints
        right-aligned in each item.
      </p>
      <ExampleSurface>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Edit
              <ChevronDown className="ml-2 size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              Copy
              <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Paste
              <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={SHORTCUTS_SAMPLE} />

      <H2 id="icons">Icons</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Combine icons with labels for quicker visual scanning.
      </p>
      <ExampleSurface>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Options
              <ChevronDown className="ml-2 size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <User className="size-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="size-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="size-4" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={ICONS_SAMPLE} />

      <H2 id="checkboxes">Checkboxes</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Use <code>DropdownMenuCheckboxItem</code> for independent toggle items.
        Each item maintains its own checked state.
      </p>
      <ExampleSurface>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              View
              <ChevronDown className="ml-2 size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>
              Show Bookmarks
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Show Full URLs</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={CHECKBOXES_SAMPLE} />

      <H2 id="radio-group">Radio Group</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Use <code>DropdownMenuRadioGroup</code> for mutually exclusive choices —
        pick one and only one.
      </p>
      <ExampleSurface>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Panel position
              <ChevronDown className="ml-2 size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Position</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value="bottom">
              <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">
                Bottom
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={RADIO_GROUP_SAMPLE} />

      <H2 id="destructive">Destructive</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Use <code>variant=&quot;destructive&quot;</code> for irreversible
        actions like delete. Renders the item with the danger color.
      </p>
      <ExampleSurface>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Actions
              <ChevronDown className="ml-2 size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Eye className="size-4" />
              View
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Copy className="size-4" />
              Duplicate
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <Trash2 className="size-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={DESTRUCTIVE_SAMPLE} />

      <H2 id="complex">Complex</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        A richer example combining groups, labels, icons, shortcuts, and a
        destructive item.
      </p>
      <ExampleSurface>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Account
              <ChevronDown className="ml-2 size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="size-4" />
                Profile
                <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="size-4" />
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="size-4" />
                Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <LogOut className="size-4" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={COMPLEX_SAMPLE} />

      <H2 id="props">Sub-components</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Each sub-component forwards <code>className</code> and all native
        attributes for its underlying Radix primitive. The most useful
        consumer-facing props are listed below.
      </p>
      <PropsTable rows={SUB_COMPONENTS_ROWS} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-wuko-text">
        <li>
          Built on Radix UI primitives. Full keyboard support: Enter or Space
          opens the menu, Arrow keys move between items, Esc closes, Tab moves
          focus out of the menu.
        </li>
        <li>
          The trigger and content are linked via <code>aria-controls</code> and{" "}
          <code>aria-expanded</code> automatically. Screen readers announce the
          menu state and item count.
        </li>
        <li>
          Use <code>DropdownMenuLabel</code> as a section heading. Labels are
          not focusable, but screen readers announce them when entering a
          group.
        </li>
        <li>
          For icon-only triggers, set <code>aria-label</code> on the trigger
          Button so the menu's purpose is announced.
        </li>
        <li>
          Checkbox and radio items expose their checked state via{" "}
          <code>aria-checked</code>; the indicator is{" "}
          <code>aria-hidden</code> so the announcement comes from the item
          itself.
        </li>
      </ul>

      <Pager
        prev={{ title: "DataTable", path: "/docs/components/data-table" }}
        next={{ title: "Input", path: "/docs/components/input" }}
      />
    </>
  );
}