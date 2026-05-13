import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from "@/registry/default/ui/badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "teal", "success", "warning", "danger", "outline"],
    },
    children: { control: "text" },
  },
  args: {
    variant: "default",
    children: "Default",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Teal: Story = { args: { variant: "teal", children: "New" } };
export const Success: Story = { args: { variant: "success", children: "Live" } };
export const Warning: Story = { args: { variant: "warning", children: "Beta" } };
export const Danger: Story = { args: { variant: "danger", children: "Down" } };
export const Outline: Story = { args: { variant: "outline", children: "Outline" } };
