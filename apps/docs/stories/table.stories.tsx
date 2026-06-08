import type { Meta, StoryObj } from "@storybook/nextjs-vite";

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

const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const KIOSKS = [
  { id: "KIOSK-4729", region: "us-west", status: "healthy", firmware: "2.4.1" },
  { id: "KIOSK-3310", region: "us-east", status: "updating", firmware: "2.4.0" },
  { id: "KIOSK-3300", region: "us-west", status: "offline", firmware: "2.4.1" },
  { id: "KIOSK-2150", region: "eu-north", status: "healthy", firmware: "2.4.1" },
];

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Device</TableHead>
          <TableHead>Region</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Firmware</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {KIOSKS.map((kiosk) => (
          <TableRow key={kiosk.id}>
            <TableCell>{kiosk.id}</TableCell>
            <TableCell>{kiosk.region}</TableCell>
            <TableCell>{kiosk.status}</TableCell>
            <TableCell>{kiosk.firmware}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const WithFooter: Story = {
  render: () => (
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
        <TableRow>
          <TableCell>eu-north</TableCell>
          <TableCell>5</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell>28</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const WithCaption: Story = {
  render: () => (
    <Table>
      <TableCaption>A summary of the active retail kiosk fleet.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Device</TableHead>
          <TableHead>Region</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {KIOSKS.slice(0, 3).map((kiosk) => (
          <TableRow key={kiosk.id}>
            <TableCell>{kiosk.id}</TableCell>
            <TableCell>{kiosk.region}</TableCell>
            <TableCell>{kiosk.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const SelectedRow: Story = {
  render: () => (
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
  ),
};