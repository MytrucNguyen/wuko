import { MoreHorizontal } from "lucide-react";

import { CodeBlock } from "@/components/docs/code-block";
import { H2 } from "@/components/docs/h2";
import { InstallationTabs } from "@/components/docs/installation-tabs";
import { Pager } from "@/components/docs/pager";
import { PropsTable } from "@/components/docs/props-table";
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table";

export const metadata = {
  title: "Table | Wuko",
};

const USAGE_SAMPLE = `import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function Example() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Device</TableHead>
          <TableHead>Region</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>KIOSK-4729</TableCell>
          <TableCell>us-west</TableCell>
          <TableCell>healthy</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`;

const STRUCTURE_SAMPLE = `Table
├── TableCaption
├── TableHeader
│   └── TableRow
│       ├── TableHead
│       ├── TableHead
│       └── TableHead
├── TableBody
│   ├── TableRow
│   │   ├── TableCell
│   │   ├── TableCell
│   │   └── TableCell
│   └── TableRow
│       ├── TableCell
│       ├── TableCell
│       └── TableCell
└── TableFooter`;

const FOOTER_SAMPLE = `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Region</TableHead>
      <TableHead>Devices</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>us-west</TableCell>
      <TableCell>14</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>us-east</TableCell>
      <TableCell>9</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell>Total</TableCell>
      <TableCell>23</TableCell>
    </TableRow>
  </TableFooter>
</Table>`;

const ACTIONS_SAMPLE = `import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Device</TableHead>
      <TableHead>Region</TableHead>
      <TableHead className="w-12.5" />
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>KIOSK-4729</TableCell>
      <TableCell>us-west</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon-sm" aria-label="Open menu">
              <MoreHorizontal className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Copy device ID</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Restart device</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`;

const SELECTED_SAMPLE = `<TableRow data-state="selected">
  <TableCell>KIOSK-4729</TableCell>
  <TableCell>us-west</TableCell>
  <TableCell>healthy</TableCell>
</TableRow>`;

const DATA_TABLE_SAMPLE = `// Combine with @tanstack/react-table for sorting, filtering, and pagination.
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";`;

const SUB_COMPONENTS_ROWS = [
  {
    name: "Table",
    type: "HTMLAttributes<HTMLTableElement>",
    default: "—",
    description:
      "Wraps a native <table> in a scrollable <div>. The container handles horizontal overflow so wide tables don't break page layout.",
  },
  {
    name: "TableHeader",
    type: "HTMLAttributes<HTMLTableSectionElement>",
    default: "—",
    description:
      "Renders <thead>. Adds a bottom border between header rows and body content.",
  },
  {
    name: "TableBody",
    type: "HTMLAttributes<HTMLTableSectionElement>",
    default: "—",
    description:
      "Renders <tbody>. The last row's border is removed so the table reads cleanly into the footer or page bg.",
  },
  {
    name: "TableFooter",
    type: "HTMLAttributes<HTMLTableSectionElement>",
    default: "—",
    description:
      "Renders <tfoot>. Adds a top border, muted background, and medium-weight type for totals or summary rows.",
  },
  {
    name: "TableRow",
    type: "HTMLAttributes<HTMLTableRowElement>",
    default: "—",
    description:
      "Renders <tr>. Includes hover and selected (data-state=\"selected\") styling.",
  },
  {
    name: "TableHead",
    type: "ThHTMLAttributes<HTMLTableCellElement>",
    default: "—",
    description:
      "Renders <th>. Uses uppercase, tracked, muted-color typography to distinguish column labels from body cells.",
  },
  {
    name: "TableCell",
    type: "TdHTMLAttributes<HTMLTableCellElement>",
    default: "—",
    description:
      "Renders <td>. Standard padding and vertical alignment match TableHead so columns align cleanly.",
  },
  {
    name: "TableCaption",
    type: "HTMLAttributes<HTMLTableCaptionElement>",
    default: "—",
    description:
      "Renders <caption>. Use to describe the table's contents for screen readers. Visually placed below the table.",
  },
];

function ExampleSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 overflow-hidden rounded-lg border border-wuko-border bg-wuko-card/40 p-6">
      {children}
    </div>
  );
}

export default function TablePage() {
  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-wuko-text-muted">
          Components
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-wuko-heading">
          Table
        </h1>
        <p className="text-[15px] leading-relaxed text-wuko-text">
          Displays structured data in rows and columns. Eight thin
          sub-components wrap native HTML table elements so screen readers,
          keyboard navigation, and accessibility tools work without extra
          wiring. Compose freely; combine with @tanstack/react-table for
          sorting, filtering, and pagination.
        </p>
      </header>

      <H2 id="installation">Installation</H2>
      <InstallationTabs name="table" />

      <H2 id="usage">Usage</H2>
      <ExampleSurface>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Device</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>KIOSK-4729</TableCell>
              <TableCell>us-west</TableCell>
              <TableCell>healthy</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>KIOSK-3310</TableCell>
              <TableCell>us-east</TableCell>
              <TableCell>updating</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>KIOSK-3300</TableCell>
              <TableCell>us-west</TableCell>
              <TableCell>offline</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ExampleSurface>
      <CodeBlock
        filename="components/example.tsx"
        lang="tsx"
        code={USAGE_SAMPLE}
      />

      <H2 id="structure">Structure</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Table is a compound component. Each sub-component is a thin wrapper
        around its native HTML counterpart, which keeps the API close to the
        platform and the markup readable.
      </p>
      <CodeBlock lang="text" code={STRUCTURE_SAMPLE} />

      <H2 id="footer">With footer</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Use <code>TableFooter</code> for totals, summary rows, or aggregate
        values. It picks up muted background and medium-weight typography to
        separate from the body.
      </p>
      <ExampleSurface>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Region</TableHead>
              <TableHead>Devices</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>us-west</TableCell>
              <TableCell>14</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>us-east</TableCell>
              <TableCell>9</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell>23</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={FOOTER_SAMPLE} />

      <H2 id="actions">Actions</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Compose Table with <code>DropdownMenu</code> to add per-row actions
        like edit, delete, or copy. The trigger is an icon-only Button to keep
        the action column visually compact.
      </p>
      <ExampleSurface>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Device</TableHead>
              <TableHead>Region</TableHead>
              <TableHead className="w-12.5" />
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>KIOSK-4729</TableCell>
              <TableCell>us-west</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      aria-label="Open menu"
                    >
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Copy device ID</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>Restart device</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>KIOSK-3310</TableCell>
              <TableCell>us-east</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      aria-label="Open menu"
                    >
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Copy device ID</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>Restart device</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={ACTIONS_SAMPLE} />

      <H2 id="states">Row states</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Rows hover automatically. To mark a row as selected (e.g., to pair
        with a checkbox column), set <code>data-state=&quot;selected&quot;</code>.
      </p>
      <ExampleSurface>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Device</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow data-state="selected">
              <TableCell>KIOSK-4729</TableCell>
              <TableCell>us-west</TableCell>
              <TableCell>healthy</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>KIOSK-3310</TableCell>
              <TableCell>us-east</TableCell>
              <TableCell>updating</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={SELECTED_SAMPLE} />

      <H2 id="data-table">Composing with TanStack Table</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Table is intentionally headless of behavior. For sortable, filterable,
        and paginated tables, compose Table with{" "}
        <a
          href="https://tanstack.com/table"
          className="text-wuko-accent underline-offset-4 hover:underline"
        >
          @tanstack/react-table
        </a>
        . The DataTable composition is on the roadmap; until then, this is the
        pattern to use directly.
      </p>
      <CodeBlock lang="tsx" code={DATA_TABLE_SAMPLE} />

      <H2 id="props">Sub-components</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Every sub-component forwards <code>className</code> and all native
        attributes for its underlying element. There are no custom props
        beyond what HTML already provides.
      </p>
      <PropsTable rows={SUB_COMPONENTS_ROWS} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-wuko-text">
        <li>
          Renders native HTML table elements (<code>&lt;table&gt;</code>,{" "}
          <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>,{" "}
          <code>&lt;tr&gt;</code>, etc.). Screen readers announce row and
          column counts, header relationships, and cell positions without
          additional ARIA wiring.
        </li>
        <li>
          Use <code>TableCaption</code> to give the table a name. Screen
          readers announce the caption before the table contents, which
          orients users entering the table.
        </li>
        <li>
          For columns that sort, render a button inside <code>TableHead</code>{" "}
          and toggle <code>aria-sort</code> on the <code>&lt;th&gt;</code>{" "}
          element. The base <code>&lt;th&gt;</code> already announces as a
          column header.
        </li>
        <li>
          Avoid using tables for visual layout. If the content is not tabular,
          reach for flex or grid layouts instead so screen readers don't
          announce false structure.
        </li>
        <li>
          For very wide tables, the outer scroll container preserves keyboard
          navigation. Users can tab through interactive cells regardless of
          horizontal scroll position.
        </li>
      </ul>

      <Pager
        prev={{ title: "Tabs", path: "/docs/components/tabs" }}
        next={{ title: "Toggle", path: "/docs/components/toggle" }}
      />
    </>
  );
}