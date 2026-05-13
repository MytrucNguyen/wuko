import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { useState } from "react";

import { Button } from "@/registry/default/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="api">API keys</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Update your name, email, and profile photo.
      </TabsContent>
      <TabsContent value="password">
        Change your password or enable two-factor authentication.
      </TabsContent>
      <TabsContent value="api">
        Generate, rotate, or revoke API keys for programmatic access.
      </TabsContent>
    </Tabs>
  ),
};

export const Controlled: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks -- Storybook render-fn idiom; arrow IS a function component
    const [tab, setTab] = useState("first");
    return (
      <div className="space-y-3">
        <Tabs value={tab} onValueChange={setTab} className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="first">First</TabsTrigger>
            <TabsTrigger value="second">Second</TabsTrigger>
            <TabsTrigger value="third">Third</TabsTrigger>
          </TabsList>
          <TabsContent value="first">First tab body.</TabsContent>
          <TabsContent value="second">Second tab body.</TabsContent>
          <TabsContent value="third">Third tab body.</TabsContent>
        </Tabs>
        <div className="flex flex-wrap items-center gap-2 text-[13px] text-wuko-text-muted">
          <span>External control:</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setTab("first")}
            disabled={tab === "first"}
          >
            First
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setTab("second")}
            disabled={tab === "second"}
          >
            Second
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setTab("third")}
            disabled={tab === "third"}
          >
            Third
          </Button>
        </div>
      </div>
    );
  },
};

export const WithDisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="active" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="locked" disabled>
          Locked
        </TabsTrigger>
        <TabsTrigger value="other">Other</TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        This tab is reachable and active by default.
      </TabsContent>
      <TabsContent value="locked">
        Locked content (unreachable while disabled).
      </TabsContent>
      <TabsContent value="other">
        Roving focus skips the disabled tab automatically.
      </TabsContent>
    </Tabs>
  ),
};

export const AsChild: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="overview" asChild>
          <a href="#overview" onClick={(e) => e.preventDefault()}>
            Overview
          </a>
        </TabsTrigger>
        <TabsTrigger value="changelog" asChild>
          <a href="#changelog" onClick={(e) => e.preventDefault()}>
            Changelog
          </a>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        Trigger is rendered as an anchor element. Useful for URL-synced tabs.
      </TabsContent>
      <TabsContent value="changelog">
        Combine asChild with Next Link for routing-driven tabs.
      </TabsContent>
    </Tabs>
  ),
};
