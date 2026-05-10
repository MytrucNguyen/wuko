import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { useState } from "react";

import { Alert } from "@/registry/default/ui/vex-alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["info", "success", "warning", "danger"],
    },
    title: { control: "text" },
    children: { control: "text" },
  },
  args: {
    variant: "info",
    children: "A new version of VexKit is available.",
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Your changes have been saved.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Your session expires in 2 minutes.",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Could not connect to the server.",
  },
};

export const WithTitle: Story = {
  args: {
    variant: "info",
    title: "Heads up",
    children: "We just shipped two new components: Alert and Tabs.",
  },
};

export const Dismissible: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);
    if (!open) {
      return (
        <p className="text-[13px] text-vex-text-muted">Alert dismissed.</p>
      );
    }
    return (
      <Alert
        {...args}
        variant="warning"
        title="Unsaved changes"
        onClose={() => setOpen(false)}
      >
        You have edits that haven&apos;t been saved. Save before navigating away.
      </Alert>
    );
  },
};
