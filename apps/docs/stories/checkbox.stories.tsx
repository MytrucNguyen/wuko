import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Checkbox } from "@/registry/default/ui/checkbox";
import React from "react";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "select",
      options: [false, true, "indeterminate"],
    },
    disabled: { control: "boolean" },
  },
  args: {
    checked: false,
    disabled: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = React.useState<boolean | "indeterminate">(false);
    return (
      <Checkbox
        checked={checked}
        onCheckedChange={setChecked}
        aria-label="Toggle"
      />
    );
  },
};

export const Checked: Story = {
  args: { checked: true },
};

export const Indeterminate: Story = {
  args: { checked: "indeterminate" },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { checked: true, disabled: true },
};

export const WithLabel: Story = {
  render: (args) => (
    <label className="flex items-center gap-2 text-sm text-wuko-text">
      <Checkbox {...args} />
      Accept terms and conditions
    </label>
  ),
};

export const Invalid: Story = {
  render: () => (
    <label className="flex items-center gap-2 text-sm text-wuko-text">
      <Checkbox aria-invalid="true" />
      Accept terms and conditions
    </label>
  ),
};

export const Group: Story = {
  render: () => {
    const [items, setItems] = React.useState({
      hardDisks: true,
      externalDisks: false,
      cdsDvds: false,
      servers: true,
    });

    return (
      <div className="flex flex-col gap-3">
        <div className="text-sm font-medium text-wuko-heading">
          Show these items on the desktop:
        </div>
        <label className="flex items-center gap-2 text-sm text-wuko-text">
          <Checkbox
            checked={items.hardDisks}
            onCheckedChange={(value) =>
              setItems({ ...items, hardDisks: value === true })
            }
          />
          Hard disks
        </label>
        <label className="flex items-center gap-2 text-sm text-wuko-text">
          <Checkbox
            checked={items.externalDisks}
            onCheckedChange={(value) =>
              setItems({ ...items, externalDisks: value === true })
            }
          />
          External disks
        </label>
        <label className="flex items-center gap-2 text-sm text-wuko-text">
          <Checkbox
            checked={items.cdsDvds}
            onCheckedChange={(value) =>
              setItems({ ...items, cdsDvds: value === true })
            }
          />
          CDs, DVDs, and iPods
        </label>
        <label className="flex items-center gap-2 text-sm text-wuko-text">
          <Checkbox
            checked={items.servers}
            onCheckedChange={(value) =>
              setItems({ ...items, servers: value === true })
            }
          />
          Connected servers
        </label>
      </div>
    );
  },
};