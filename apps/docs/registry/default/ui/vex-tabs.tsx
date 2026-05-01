"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

// Tabs = TabsPrimitive.Root, re-exported directly. Root is the state
// container (no visuals), and consumers can still pass className /
// value / defaultValue / onValueChange directly to it.
export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("flex border-b border-vex-border", className)}
    {...props}
  />
));
TabsList.displayName = "TabsList";

// asChild support: consumers may pass asChild to render their own element
// (e.g. a <Link>) as the trigger. The asChild value flows through ...props
// to Radix; we deliberately do NOT extract it as a literal JSX attribute
// because shadcn 4.6.0's CLI install transform strips literal `asChild`
// attributes during sandbox install. Spreading a rest object is invisible
// to that transform's AST visitor. If you ever need to default or override
// asChild here, use the spread pattern `<Trigger {...{asChild: defaulted}}>`,
// NOT a literal `asChild={...}` attribute. See the
// shadcn-cli-strips-aschild-prop-investigation rule.
export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "relative px-4 py-2.5 text-sm font-medium transition-colors",
      "text-vex-text-muted hover:text-vex-heading",
      "data-[state=active]:text-vex-accent",
      "after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-vex-accent",
      "after:opacity-0 after:transition-opacity data-[state=active]:after:opacity-100",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vex-accent",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "pt-4 text-sm text-vex-text",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vex-accent",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";
