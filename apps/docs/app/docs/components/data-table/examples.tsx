"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import { Checkbox } from "@/registry/default/ui/checkbox";
import {
  DataTable,
  SortableHeader,
} from "@/registry/default/ui/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

type Device = {
  id: string;
  region: string;
  status: string;
  firmware: string;
};

const KIOSKS: Device[] = [
  { id: "KIOSK-4729", region: "us-west", status: "healthy", firmware: "2.4.1" },
  { id: "KIOSK-3310", region: "us-east", status: "updating", firmware: "2.4.0" },
  { id: "KIOSK-3300", region: "us-west", status: "offline", firmware: "2.4.1" },
  { id: "KIOSK-2150", region: "eu-north", status: "healthy", firmware: "2.4.1" },
  { id: "KIOSK-2199", region: "eu-north", status: "degraded", firmware: "2.4.0" },
];

const basicColumns: ColumnDef<Device>[] = [
  { accessorKey: "id", header: "Device" },
  { accessorKey: "region", header: "Region" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "firmware", header: "Firmware" },
];

const sortableColumns: ColumnDef<Device>[] = [
  { accessorKey: "id", header: "Device" },
  { accessorKey: "region", header: "Region" },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <SortableHeader column={column}>Status</SortableHeader>
    ),
  },
  { accessorKey: "firmware", header: "Firmware" },
];

const selectableColumns: ColumnDef<Device>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
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
  { accessorKey: "region", header: "Region" },
  { accessorKey: "status", header: "Status" },
];

const actionColumns: ColumnDef<Device>[] = [
  { accessorKey: "id", header: "Device" },
  { accessorKey: "region", header: "Region" },
  { accessorKey: "status", header: "Status" },
  {
    id: "actions",
    cell: () => (
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
          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    enableSorting: false,
  },
];

export function BasicExample() {
  return <DataTable columns={basicColumns} data={KIOSKS} />;
}

export function SortingExample() {
  return <DataTable columns={sortableColumns} data={KIOSKS} />;
}

export function PaginationExample() {
  return <DataTable columns={basicColumns} data={KIOSKS} pageSize={3} />;
}

export function FilteringExample() {
  return (
    <DataTable
      columns={basicColumns}
      data={KIOSKS}
      filterColumn="region"
      filterPlaceholder="Filter by region..."
    />
  );
}

export function SelectionExample() {
  return <DataTable columns={selectableColumns} data={KIOSKS} />;
}

export function VisibilityExample() {
  return (
    <DataTable columns={basicColumns} data={KIOSKS} enableColumnVisibility />
  );
}

export function ActionsExample() {
  return <DataTable columns={actionColumns} data={KIOSKS} />;
}