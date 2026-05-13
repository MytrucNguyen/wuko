"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  title: string;
  description?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

// React.FC, not forwardRef. Modal is controlled via open/onClose;
// no imperative focus/scroll API exposed at v0.1.0. If consumers need
// to focus a specific element inside, they put ref on their own children.
export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  description,
  footer,
  children,
  className,
}) => {
  return (
    <DialogPrimitive.Root
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) onClose?.();
      }}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn(
            "fixed inset-0 z-50",
            "bg-[rgba(15,23,42,0.6)] light:bg-[rgba(15,23,42,0.4)]",
            "backdrop-blur-sm"
          )}
        />
        <DialogPrimitive.Content
          {...(description ? {} : { "aria-describedby": undefined })}
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2",
            "rounded-xl border border-wuko-border bg-wuko-card shadow-2xl",
            "focus:outline-none",
            className
          )}
        >
          <div className="flex items-center justify-between border-b border-wuko-border px-5 py-4">
            <DialogPrimitive.Title className="text-base font-semibold text-wuko-heading">
              {title}
            </DialogPrimitive.Title>
            <DialogPrimitive.Close
              aria-label="Close"
              className={cn(
                "rounded text-wuko-text-muted transition-colors hover:text-wuko-heading",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuko-accent"
              )}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </DialogPrimitive.Close>
          </div>
          <div className="px-5 py-4">
            {description && (
              <DialogPrimitive.Description className="mb-3 text-sm text-wuko-text">
                {description}
              </DialogPrimitive.Description>
            )}
            {children && (
              <div className="text-sm text-wuko-text">{children}</div>
            )}
          </div>
          {footer && (
            <div className="flex justify-end gap-2 border-t border-wuko-border px-5 py-3">
              {footer}
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
Modal.displayName = "Modal";
