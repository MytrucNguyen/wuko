import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Bell, Trash2, Zap } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import { Tooltip } from "@/registry/default/ui/tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    content: "Tooltip content",
    children: <span>Trigger</span>,
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip content="Trigger a deploy">
      <Button>
        <Zap className="size-4" />
        Deploy
      </Button>
    </Tooltip>
  ),
};

export const WithOutlineButton: Story = {
  render: () => (
    <Tooltip content="3 unread notifications">
      <Button variant="outline">
        <Bell className="size-4" />
        Inbox
      </Button>
    </Tooltip>
  ),
};

export const WithDangerButton: Story = {
  render: () => (
    <Tooltip content="Permanently delete">
      <Button variant="danger">
        <Trash2 className="size-4" />
        Delete
      </Button>
    </Tooltip>
  ),
};

export const Right: Story = {
  render: () => (
    <Tooltip content="Right side" side="right">
      <Button variant="outline" size="sm">
        Right
      </Button>
    </Tooltip>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Tooltip content="Bottom side" side="bottom">
      <Button variant="outline" size="sm">
        Bottom
      </Button>
    </Tooltip>
  ),
};

export const Left: Story = {
  render: () => (
    <Tooltip content="Left side" side="left">
      <Button variant="outline" size="sm">
        Left
      </Button>
    </Tooltip>
  ),
};
