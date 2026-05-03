"use client";

import { useState } from "react";

import { Button } from "@/registry/default/ui/vex-button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/vex-tabs";

export function TabsUncontrolledExample() {
  return (
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
  );
}

export function TabsControlledExample() {
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
      <div className="flex flex-wrap items-center gap-2 text-[13px] text-vex-text-muted">
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
}

// preventDefault on the anchors below is docs-demo-only; in real usage you'd
// let the anchor navigate (or pass a Next <Link>) so the URL syncs with the
// active tab. The docs already navigate via the docs router; we don't want
// stray hash changes here.
export function TabsAsChildExample() {
  return (
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
        The trigger is rendered as your own anchor element. Clicks update the
        tab AND navigate to the hash.
      </TabsContent>
      <TabsContent value="changelog">
        Combine asChild with React Router or Next Link for URL-synced tabs.
      </TabsContent>
    </Tabs>
  );
}
