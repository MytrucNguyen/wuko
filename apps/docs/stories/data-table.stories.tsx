import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ColumnDef } from "@tanstack/react-table";

import {
  DataTable,
  SortableHeader,
} from "@/registry/default/ui/data-table";

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
  {
    accessorKey: "firmware",
    header: ({ column }) => (
      <SortableHeader column={column}>Firmware</SortableHeader>
    ),
  },
];

// Generate 25 kiosks for the pagination story
const MANY_KIOSKS: Device[] = Array.from({ length: 25 }, (_, i) => ({
  id: `KIOSK-${4000 + i}`,
  region: ["us-west", "us-east", "eu-north"][i % 3],
  status: ["healthy", "updating", "offline", "degraded"][i % 4],
  firmware: i % 5 === 0 ? "2.4.0" : "2.4.1",
}));

type DataTableStoryArgs = {
  columns: ColumnDef<Device>[];
  data: Device[];
  pageSize?: number;
};

const meta: Meta<DataTableStoryArgs> = {
  title: "Components/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<DataTableStoryArgs>;

export const Default: Story = {
  args: {
    columns: basicColumns,
    data: KIOSKS,
  },
};

export const WithSorting: Story = {
  args: {
    columns: sortableColumns,
    data: KIOSKS,
  },
};

export const Pagination: Story = {
  args: {
    columns: basicColumns,
    data: MANY_KIOSKS,
    pageSize: 10,
  },
};

export const Empty: Story = {
  args: {
    columns: basicColumns,
    data: [],
  },
};