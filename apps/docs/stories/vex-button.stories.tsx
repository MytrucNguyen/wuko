import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "@/registry/default/ui/vex-button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "outline", "ghost", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon-xs", "icon-sm", "icon", "icon-lg"],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    variant: "primary",
    size: "md",
    loading: false,
    disabled: false,
    children: "Deploy",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = { args: { variant: "primary" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Danger: Story = { args: { variant: "danger" } };

export const Small: Story = { args: { size: "sm" } };
export const Medium: Story = { args: { size: "md" } };
export const Large: Story = { args: { size: "lg" } };

export const Disabled: Story = { args: { disabled: true } };
export const Loading: Story = { args: { loading: true } };
