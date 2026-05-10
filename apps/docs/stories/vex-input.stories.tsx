import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Mail, Search } from "lucide-react";

import { Input } from "@/registry/default/ui/vex-input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    label: { control: "text" },
    placeholder: { control: "text" },
    hint: { control: "text" },
    error: { control: "text" },
    type: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    size: "md",
    label: "Email",
    placeholder: "you@example.com",
    disabled: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = { args: { size: "sm" } };
export const Medium: Story = { args: { size: "md" } };
export const Large: Story = { args: { size: "lg" } };

export const WithLeftIcon: Story = {
  args: { leftIcon: <Mail className="size-4" /> },
};

export const WithRightIcon: Story = {
  args: { rightIcon: <Search className="size-4" /> },
};
