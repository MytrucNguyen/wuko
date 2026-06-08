import { CodeBlock } from "@/components/docs/code-block";
import { H2 } from "@/components/docs/h2";
import { InstallationTabs } from "@/components/docs/installation-tabs";
import { Pager } from "@/components/docs/pager";
import { PropsTable } from "@/components/docs/props-table";

import {
  ActionsExample,
  BasicExample,
  FilteringExample,
  PaginationExample,
  SelectionExample,
  SortingExample,
  VisibilityExample,
} from "./examples";

export const metadata = {
  title: "DataTable | Wuko",
};

const USAGE_SAMPLE = `import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";

type Device = {
  id: string;
  region: string;
  status: string;
};

const columns: ColumnDef<Device>[] = [
  { accessorKey: "id", header: "Device" },
  { accessorKey: "region", header: "Region" },
  { accessorKey: "status", header: "Status" },
];

const data: Device[] = [
  { id: "KIOSK-4729", region: "us-west", status: "healthy" },
  { id: "KIOSK-3310", region: "us-east", status: "updating" },
];

export function Example() {
  return <DataTable columns={columns} data={data} />;
}`;

const SORTING_SAMPLE = `import { SortableHeader } from "@/components/ui/data-table";

const columns: ColumnDef<Device>[] = [
  { accessorKey: "id", header: "Device" },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <SortableHeader column={column}>Status</SortableHeader>
    ),
  },
];`;

const PAGINATION_SAMPLE = `<DataTable
  columns={columns}
  data={data}
  pageSize={10}
/>`;

const FILTERING_SAMPLE = `<DataTable
  columns={columns}
  data={data}
  filterColumn="region"
  filterPlaceholder="Filter by region..."
/>`;

const SELECTION_SAMPLE = `import { Checkbox } from "@/components/ui/checkbox";

const columns: ColumnDef<Device>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
  },
  { accessorKey: "id", header: "Device" },
];`;

const VISIBILITY_SAMPLE = `<DataTable
  columns={columns}
  data={data}
  enableColumnVisibility
/>`;

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

const columns: ColumnDef<Device>[] = [
  { accessorKey: "id", header: "Device" },
  {
    id: "actions",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon-sm" aria-label="Open menu">
            <MoreHorizontal className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>Copy ID</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    enableSorting: false,
  },
];`;

const CUSTOM_SAMPLE = `// If Wuko's DataTable defaults don't fit, compose your own with the underlying primitives.
"use client";

import * as React from "react";
import {
  type ColumnDef,
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
} from "@/components/ui/table";

export function CustomDataTable<TData>({
  columns,
  data,
}: {
  columns: ColumnDef<TData>[];
  data: TData[];
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}`;

const PROPS_ROWS = [
  {
    name: "columns",
    type: "ColumnDef<TData, TValue>[]",
    default: "—",
    description:
      "Required. Array of column definitions from @tanstack/react-table. Each column needs an accessorKey or accessorFn and a header.",
  },
  {
    name: "data",
    type: "TData[]",
    default: "—",
    description: "Required. Array of row objects to display.",
  },
  {
    name: "pageSize",
    type: "number",
    default: "10",
    description: "Number of rows per page when pagination is enabled.",
  },
  {
    name: "filterColumn",
    type: "string",
    default: "—",
    description:
      "Column accessorKey to filter on. When set, a search input renders above the table.",
  },
  {
    name: "filterPlaceholder",
    type: "string",
    default: '"Filter..."',
    description: "Placeholder text for the filter input.",
  },
  {
    name: "enableColumnVisibility",
    type: "boolean",
    default: "false",
    description:
      "When true, renders a Columns dropdown menu in the header bar for toggling column visibility.",
  },
];

function ExampleSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 overflow-hidden rounded-lg border border-wuko-border bg-wuko-card/40 p-6">
      {children}
    </div>
  );
}

export default function DataTablePage() {
  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-wuko-text-muted">
          Components
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-wuko-heading">
          DataTable
        </h1>
        <p className="text-[15px] leading-relaxed text-wuko-text">
          An opinionated table with sorting, pagination, filtering, row
          selection, and column visibility built on @tanstack/react-table and
          Wuko's Table primitive. Pass typed columns and data, opt into features
          with props. For full control, see Building your own at the bottom of
          this page.
        </p>
      </header>

      <H2 id="installation">Installation</H2>
      <InstallationTabs name="data-table" />

      <H2 id="usage">Usage</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Pass a <code>columns</code> array and <code>data</code> array. Column
        definitions follow{" "}
        <a
          href="https://tanstack.com/table/latest/docs/api/core/column-def"
          className="text-wuko-accent underline-offset-4 hover:underline"
        >
          TanStack Table's API
        </a>
        .
      </p>
      <ExampleSurface>
        <BasicExample />
      </ExampleSurface>
      <CodeBlock
        filename="components/example.tsx"
        lang="tsx"
        code={USAGE_SAMPLE}
      />

      <H2 id="sorting">Sorting</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Use the <code>SortableHeader</code> helper inside a column's{" "}
        <code>header</code> function to make a column sortable. Clicking the
        header toggles ascending, descending, and unsorted.
      </p>
      <ExampleSurface>
        <SortingExample />
      </ExampleSurface>
      <CodeBlock lang="tsx" code={SORTING_SAMPLE} />

      <H2 id="pagination">Pagination</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Pagination is built in. Pass <code>pageSize</code> to control rows per
        page. The footer shows the current range and total count, with
        previous/next buttons.
      </p>
      <ExampleSurface>
        <PaginationExample />
      </ExampleSurface>
      <CodeBlock lang="tsx" code={PAGINATION_SAMPLE} />

      <H2 id="filtering">Filtering</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Pass <code>filterColumn</code> with the accessorKey of the column to
        filter on. A search input renders above the table. Filtering happens
        client-side via TanStack's <code>getFilteredRowModel</code>.
      </p>
      <ExampleSurface>
        <FilteringExample />
      </ExampleSurface>
      <CodeBlock lang="tsx" code={FILTERING_SAMPLE} />

      <H2 id="row-selection">Row selection</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Add a column with <code>id: &quot;select&quot;</code> rendering a
        Checkbox in both header and cell to enable row selection. The selected
        count appears in the footer. Selected rows get a subtle accent
        background.
      </p>
      <ExampleSurface>
        <SelectionExample />
      </ExampleSurface>
      <CodeBlock lang="tsx" code={SELECTION_SAMPLE} />

      <H2 id="visibility">Column visibility</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Pass <code>enableColumnVisibility</code> to add a Columns dropdown in
        the header bar. Users can toggle individual columns on or off without
        losing data.
      </p>
      <ExampleSurface>
        <VisibilityExample />
      </ExampleSurface>
      <CodeBlock lang="tsx" code={VISIBILITY_SAMPLE} />

      <H2 id="row-actions">Row actions</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Add a column with a kebab icon trigger and DropdownMenu to provide
        per-row actions like view, edit, or delete. Set{" "}
        <code>enableSorting: false</code> on the action column.
      </p>
      <ExampleSurface>
        <ActionsExample />
      </ExampleSurface>
      <CodeBlock lang="tsx" code={ACTIONS_SAMPLE} />

      <H2 id="props">Props</H2>
      <PropsTable rows={PROPS_ROWS} />

      <H2 id="building-your-own">Building your own</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Wuko's DataTable is opinionated. If you need different behavior —
        server-side pagination, custom filter UI, row expansion, virtualized
        rows, or anything else — compose your own using <code>Table</code> and{" "}
        <code>useReactTable</code> directly. The DataTable source is a useful
        starting point.
      </p>
      <CodeBlock lang="tsx" code={CUSTOM_SAMPLE} />
      <p className="mt-4 text-[14px] leading-relaxed text-wuko-text">
        For more advanced patterns, see{" "}
        <a
          href="https://tanstack.com/table/latest/docs/introduction"
          className="text-wuko-accent underline-offset-4 hover:underline"
        >
          TanStack Table's documentation
        </a>
        .
      </p>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-wuko-text">
        <li>
          Built on the Table primitive, which renders native HTML table
          elements. Screen readers announce row and column counts and header
          relationships.
        </li>
        <li>
          Sortable column headers are rendered as buttons inside the{" "}
          <code>&lt;th&gt;</code>. The sort state is exposed via TanStack's
          column API; consumers can add <code>aria-sort</code> for additional
          screen reader support.
        </li>
        <li>
          Selection checkboxes use the Wuko Checkbox primitive, which supports
          indeterminate state for the &quot;some rows selected&quot; header.
        </li>
        <li>
          Column visibility dropdown is keyboard-navigable via the underlying
          DropdownMenu primitive (Tab, Arrow keys, Esc).
        </li>
        <li>
          Pagination controls are buttons with appropriate disabled states when
          on the first or last page. The current page range and selected count
          announce changes for screen readers.
        </li>
      </ul>

      <Pager
        prev={{ title: "Checkbox", path: "/docs/components/checkbox" }}
        next={{ title: "DropdownMenu", path: "/docs/components/dropdown-menu" }}
      />
    </>
  );
}
