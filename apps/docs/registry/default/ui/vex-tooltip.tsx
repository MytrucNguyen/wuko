"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export interface TooltipProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
    "children" | "content" | "side" | "sideOffset" | "asChild"
  > {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  delayDuration?: number;
}

// Per-tooltip Provider: each Tooltip wrapper renders its own Provider so
// consumers don't need an app-root wrapper. Trade-off: ~50ms first-hover init
// cost per tooltip and no global delay coordination across multiple tooltips.
// Acceptable for v0.1.0; future major versions may expose <VexTooltipProvider>
// for global coordination if it becomes a real consumer need.
export function Tooltip({
  content,
  children,
  side = "top",
  sideOffset = 8,
  delayDuration = 700,
  className,
  ...rest
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root>
        {/* Spread pattern used (vs literal `asChild` attribute) to bypass
            shadcn 4.6.0's CLI install transform that strips JSX attributes
            named asChild. See shadcn-cli-strips-aschild-prop-investigation rule. */}
        <TooltipPrimitive.Trigger {...{asChild: true}}>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            sideOffset={sideOffset}
            className={cn(
              "z-50 rounded-md border px-2.5 py-1.5 text-xs shadow-md",
              "border-[#334155] bg-[#0f172a] text-[#e2e8f0]",
              className
            )}
            {...rest}
          >
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
Tooltip.displayName = "Tooltip";
