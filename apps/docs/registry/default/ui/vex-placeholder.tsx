import * as React from "react";

// Phase 3 plumbing test, replaced by real primitives from Phase 5 onward.
export interface VexPlaceholderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export const VexPlaceholder = React.forwardRef<
  HTMLDivElement,
  VexPlaceholderProps
>(({ label = "VexKit placeholder", className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="status"
      className={
        "inline-flex items-center gap-2 rounded-md border border-dashed border-vex-border bg-vex-card/40 px-3 py-2 text-sm text-vex-text-muted" +
        (className ? ` ${className}` : "")
      }
      {...props}
    >
      <span aria-hidden="true">●</span>
      <span>{label}</span>
    </div>
  );
});
VexPlaceholder.displayName = "VexPlaceholder";
