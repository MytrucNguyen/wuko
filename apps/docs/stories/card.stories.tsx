import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Image from "next/image";

import { Card } from "@/registry/default/ui/card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="max-w-sm">
      <div className="mb-1 text-sm font-semibold text-wuko-heading">
        Project usage
      </div>
      <p className="text-[13px] text-wuko-text-muted">
        8.2k of 10k tokens used this week.
      </p>
    </Card>
  ),
};

export const Stat: Story = {
  render: () => (
    <Card className="max-w-xs">
      <div className="text-[11px] font-semibold uppercase tracking-wider text-wuko-text-muted">
        Monthly active users
      </div>
      <div className="mt-1 text-3xl font-extrabold text-wuko-heading">
        12,847
      </div>
      <div className="mt-1 text-[12px] text-wuko-text-muted">
        +4.2% from last month
      </div>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card className="max-w-sm overflow-hidden p-0">
      <Image
        src="/brand/wuko.png"
        alt="Vex, the Wuko mascot"
        width={384}
        height={160}
        className="h-40 w-full object-cover"
      />
      <div className="p-5">
        <div className="mb-1 text-sm font-semibold text-wuko-heading">
          Meet Vex
        </div>
        <p className="text-[13px] text-wuko-text-muted">
          The nine-tailed kitsune behind every Wuko primitive.
        </p>
      </div>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card className="max-w-sm">
      <div className="mb-1 text-sm font-semibold text-wuko-heading">
        Storage almost full
      </div>
      <p className="mb-3 text-[13px] text-wuko-text-muted">
        You have used 92% of available storage.
      </p>
      <button
        type="button"
        className="text-[13px] font-medium text-wuko-heading hover:underline"
      >
        Upgrade plan
      </button>
    </Card>
  ),
};
