import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { useState } from "react";
import { Eye, EyeOff, Mail, Search } from "lucide-react";

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

export const WithHint: Story = {
  args: {
    label: "Username",
    defaultValue: "vex",
    hint: "Must be 3–20 characters.",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    defaultValue: "not-an-email",
    error: "Enter a valid email address.",
  },
};

export const Password: Story = {
  render: (args) => {
    const [show, setShow] = useState(false);
    return (
      <Input
        {...args}
        label="Password"
        type={show ? "text" : "password"}
        defaultValue="kitsune-9-tails"
        rightIcon={
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="hover:text-vex-heading"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        }
      />
    );
  },
};

export const Disabled: Story = { args: { disabled: true } };
