import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { useState } from "react";

import { Toggle } from "@/registry/default/ui/toggle";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md"],
    },
    label: { control: "text" },
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
  },
  args: {
    checked: false,
    onChange: () => {},
    size: "md",
    label: "Enable notifications",
    disabled: false,
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks -- Storybook render-fn idiom; arrow IS a function component
    const [on, setOn] = useState(true);
    return <Toggle {...args} checked={on} onChange={setOn} />;
  },
};

export const Small: Story = {
  args: { size: "sm", label: "Compact mode" },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks -- Storybook render-fn idiom; arrow IS a function component
    const [on, setOn] = useState(false);
    return <Toggle {...args} checked={on} onChange={setOn} />;
  },
};

export const Disabled: Story = {
  args: { disabled: true, label: "Cannot toggle" },
};

export const DisabledOn: Story = {
  args: { checked: true, disabled: true, label: "Disabled (on)" },
};
