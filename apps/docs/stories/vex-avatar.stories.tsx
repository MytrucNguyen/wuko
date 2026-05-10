import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Avatar } from "@/registry/default/ui/vex-avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    fallback: { control: "text" },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    status: {
      control: "inline-radio",
      options: ["online", "away", "offline"],
    },
  },
  args: {
    size: "md",
    fallback: "VK",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = { args: { size: "sm" } };
export const Medium: Story = { args: { size: "md" } };
export const Large: Story = { args: { size: "lg" } };

export const WithImage: Story = {
  args: {
    src: "/vex.png",
    alt: "Vex, the VexKit mascot",
    size: "lg",
  },
};

export const Online: Story = { args: { status: "online" } };
export const Away: Story = { args: { status: "away" } };
export const Offline: Story = { args: { status: "offline" } };
