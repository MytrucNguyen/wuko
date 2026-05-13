"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export type ToggleSize = "sm" | "md";

export interface ToggleProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    "checked" | "onChange" | "onCheckedChange" | "disabled" | "defaultChecked"
  > {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: ToggleSize;
  label?: string;
}

const sizeClasses: Record<
  ToggleSize,
  { track: string; thumb: string; thumbOn: string }
> = {
  sm: {
    track: "h-4 w-8",
    thumb: "h-3 w-3",
    thumbOn: "data-[state=checked]:translate-x-4",
  },
  md: {
    track: "h-5 w-10",
    thumb: "h-4 w-4",
    thumbOn: "data-[state=checked]:translate-x-5",
  },
};

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    { checked, onChange, disabled, size = "md", label, className, ...rest },
    ref
  ) => {
    const { track, thumb, thumbOn } = sizeClasses[size];
    return (
      <label
        className={cn(
          "inline-flex items-center gap-2.5",
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
          className
        )}
      >
        <SwitchPrimitive.Root
          ref={ref}
          checked={checked}
          onCheckedChange={onChange}
          disabled={disabled}
          className={cn(
            "relative shrink-0 rounded-full transition-colors",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuko-accent",
            "data-[state=checked]:bg-wuko-accent data-[state=unchecked]:bg-wuko-border",
            track
          )}
          {...rest}
        >
          <SwitchPrimitive.Thumb
            className={cn(
              "absolute left-0.5 top-0.5 block rounded-full bg-white shadow transition-transform",
              thumb,
              thumbOn
            )}
          />
        </SwitchPrimitive.Root>
        {label && <span className="text-sm text-wuko-text">{label}</span>}
      </label>
    );
  }
);
Toggle.displayName = "Toggle";
