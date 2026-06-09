import { CodeBlock } from "@/components/docs/code-block";
import { H2 } from "@/components/docs/h2";
import { InstallationTabs } from "@/components/docs/installation-tabs";
import { Pager } from "@/components/docs/pager";
import { PropsTable } from "@/components/docs/props-table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

export const metadata = {
  title: "Select | Wuko",
};

const USAGE_SAMPLE = `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Example() {
  return (
    <Select>
      <SelectTrigger className="w-45">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
      </SelectContent>
    </Select>
  );
}`;

const STRUCTURE_SAMPLE = `Select
├── SelectTrigger
│   └── SelectValue
└── SelectContent
    ├── SelectGroup
    │   ├── SelectLabel
    │   ├── SelectItem
    │   └── SelectItem
    ├── SelectSeparator
    └── SelectGroup
        ├── SelectLabel
        ├── SelectItem
        └── SelectItem`;

const GROUPS_SAMPLE = `<Select>
  <SelectTrigger className="w-50">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Citrus</SelectLabel>
      <SelectItem value="orange">Orange</SelectItem>
      <SelectItem value="lemon">Lemon</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Berries</SelectLabel>
      <SelectItem value="strawberry">Strawberry</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`;

const SCROLLABLE_SAMPLE = `<Select>
  <SelectTrigger className="w-55">
    <SelectValue placeholder="Select a timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="utc-8">(UTC-08:00) Pacific Time</SelectItem>
    <SelectItem value="utc-5">(UTC-05:00) Eastern Time</SelectItem>
    <SelectItem value="utc-0">(UTC+00:00) UTC</SelectItem>
    <SelectItem value="utc+1">(UTC+01:00) Berlin</SelectItem>
    {/* ...more items */}
  </SelectContent>
</Select>`;

const DISABLED_SAMPLE = `<Select disabled>
  <SelectTrigger className="w-45">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
  </SelectContent>
</Select>`;

const INVALID_SAMPLE = `<Select>
  <SelectTrigger aria-invalid="true" className="w-45">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
  </SelectContent>
</Select>`;

const SUB_COMPONENTS_ROWS = [
  {
    name: "Select",
    type: "Radix Root",
    default: "—",
    description:
      "The root container. Controlled via value/onValueChange or uncontrolled via defaultValue.",
  },
  {
    name: "SelectTrigger",
    type: "Radix Trigger",
    default: "—",
    description:
      "The button that opens the menu. Styled like an Input. Accepts aria-invalid for error states.",
  },
  {
    name: "SelectValue",
    type: "Radix Value",
    default: "—",
    description:
      "Displays the selected value (or placeholder) inside the trigger.",
  },
  {
    name: "SelectContent",
    type: "Radix Content",
    default: "position=\"popper\"",
    description:
      "The floating panel. Renders into a portal. Position prop: \"popper\" (aligns to trigger edge) or \"item-aligned\" (positions selected item over trigger).",
  },
  {
    name: "SelectItem",
    type: "Radix Item",
    default: "—",
    description:
      "A selectable option. Requires a value prop. Supports disabled.",
  },
  {
    name: "SelectGroup",
    type: "Radix Group",
    default: "—",
    description:
      "Wraps related items. Pair with SelectLabel for a section heading.",
  },
  {
    name: "SelectLabel",
    type: "Radix Label",
    default: "—",
    description:
      "A non-selectable heading for a SelectGroup.",
  },
  {
    name: "SelectSeparator",
    type: "Radix Separator",
    default: "—",
    description: "A thin divider between SelectGroups.",
  },
];

function ExampleSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center justify-center rounded-lg border border-wuko-border bg-wuko-card/40 p-12">
      {children}
    </div>
  );
}

export default function SelectPage() {
  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-wuko-text-muted">
          Components
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-wuko-heading">
          Select
        </h1>
        <p className="text-[15px] leading-relaxed text-wuko-text">
          A dropdown menu of options triggered by a button. Built on Radix
          Select for full keyboard navigation, search-as-you-type, and
          accessibility. The trigger styling matches Input so Select fits
          cleanly into form layouts.
        </p>
      </header>

      <H2 id="installation">Installation</H2>
      <InstallationTabs name="select" />

      <H2 id="usage">Usage</H2>
      <ExampleSurface>
        <Select>
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </SelectContent>
        </Select>
      </ExampleSurface>
      <CodeBlock
        filename="components/example.tsx"
        lang="tsx"
        code={USAGE_SAMPLE}
      />

      <H2 id="composition">Composition</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Use the following composition to build a <code>Select</code>.
      </p>
      <CodeBlock lang="text" code={STRUCTURE_SAMPLE} />

      <H2 id="groups">Groups</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Use <code>SelectGroup</code>, <code>SelectLabel</code>, and{" "}
        <code>SelectSeparator</code> to organize related items into sections.
      </p>
      <ExampleSurface>
        <Select>
          <SelectTrigger className="w-50">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Citrus</SelectLabel>
              <SelectItem value="orange">Orange</SelectItem>
              <SelectItem value="lemon">Lemon</SelectItem>
              <SelectItem value="lime">Lime</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Berries</SelectLabel>
              <SelectItem value="strawberry">Strawberry</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="raspberry">Raspberry</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={GROUPS_SAMPLE} />

      <H2 id="scrollable">Scrollable</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        When the content exceeds the popover height, scroll buttons appear at
        the top and bottom for keyboard and mouse users.
      </p>
      <ExampleSurface>
        <Select>
          <SelectTrigger className="w-55">
            <SelectValue placeholder="Select a timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="utc-12">(UTC-12:00) Baker Island</SelectItem>
            <SelectItem value="utc-11">(UTC-11:00) Niue</SelectItem>
            <SelectItem value="utc-10">(UTC-10:00) Hawaii</SelectItem>
            <SelectItem value="utc-9">(UTC-09:00) Alaska</SelectItem>
            <SelectItem value="utc-8">(UTC-08:00) Pacific Time</SelectItem>
            <SelectItem value="utc-7">(UTC-07:00) Mountain Time</SelectItem>
            <SelectItem value="utc-6">(UTC-06:00) Central Time</SelectItem>
            <SelectItem value="utc-5">(UTC-05:00) Eastern Time</SelectItem>
            <SelectItem value="utc-4">(UTC-04:00) Atlantic Time</SelectItem>
            <SelectItem value="utc-3">(UTC-03:00) Buenos Aires</SelectItem>
            <SelectItem value="utc-0">(UTC+00:00) UTC</SelectItem>
            <SelectItem value="utc+1">(UTC+01:00) Berlin</SelectItem>
            <SelectItem value="utc+2">(UTC+02:00) Cairo</SelectItem>
            <SelectItem value="utc+3">(UTC+03:00) Moscow</SelectItem>
          </SelectContent>
        </Select>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={SCROLLABLE_SAMPLE} />

      <H2 id="disabled">Disabled</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Set <code>disabled</code> on the root <code>Select</code> to disable
        the whole control, or <code>disabled</code> on a single{" "}
        <code>SelectItem</code> to disable just that option.
      </p>
      <ExampleSurface>
        <div className="flex gap-4">
          <Select disabled>
            <SelectTrigger className="w-45">
              <SelectValue placeholder="All disabled" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-45">
              <SelectValue placeholder="Item disabled" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana" disabled>
                Banana (sold out)
              </SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={DISABLED_SAMPLE} />

      <H2 id="invalid">Invalid</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Set <code>aria-invalid=&quot;true&quot;</code> on the{" "}
        <code>SelectTrigger</code> to show an error state. The border and
        focus ring turn red.
      </p>
      <ExampleSurface>
        <Select>
          <SelectTrigger className="w-45" aria-invalid="true">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectContent>
        </Select>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={INVALID_SAMPLE} />

      <H2 id="props">Sub-components</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Each sub-component forwards <code>className</code> and all native
        props for its underlying Radix primitive.
      </p>
      <PropsTable rows={SUB_COMPONENTS_ROWS} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-wuko-text">
        <li>
          Built on Radix Select. Full keyboard support: Enter or Space opens,
          Arrow keys move between items, Esc closes, Home/End jump to first
          and last items, type-to-search jumps to the first matching item.
        </li>
        <li>
          The trigger automatically links to the content via{" "}
          <code>aria-controls</code> and <code>aria-expanded</code>. Screen
          readers announce the menu state and selected value.
        </li>
        <li>
          For invalid state, set <code>aria-invalid=&quot;true&quot;</code> on{" "}
          <code>SelectTrigger</code>. The visual change is paired with the
          ARIA attribute so screen readers announce the error.
        </li>
        <li>
          <code>SelectGroup</code> + <code>SelectLabel</code> creates a
          labeled section announced by screen readers (similar to{" "}
          <code>&lt;optgroup&gt;</code> in native select).
        </li>
        <li>
          For form submission, pass <code>name</code> on the root{" "}
          <code>Select</code>. Radix renders a hidden native select for form
          compatibility.
        </li>
      </ul>

      <Pager
        prev={{ title: "Pagination", path: "/docs/components/pagination" }}
        next={{ title: "Skeleton", path: "/docs/components/skeleton" }}
      />
    </>
  );
}