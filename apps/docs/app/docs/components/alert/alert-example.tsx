"use client";

import { useState } from "react";

import { Button } from "@/registry/default/ui/vex-button";
import { Alert } from "@/registry/default/ui/vex-alert";

export function AlertCloseExample() {
  const [open, setOpen] = useState(true);
  return (
    <div className="space-y-3">
      {open ? (
        <Alert
          variant="warning"
          title="Unsaved changes"
          onClose={() => setOpen(false)}
        >
          You have edits that haven&apos;t been saved. Save before navigating
          away.
        </Alert>
      ) : (
        <p className="text-[13px] text-vex-text-muted">
          Alert dismissed.{" "}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-vex-accent underline-offset-2 hover:underline"
          >
            Restore
          </button>
          .
        </p>
      )}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setOpen((o) => !o)}
        disabled={open}
      >
        {open ? "Visible" : "Hidden"}
      </Button>
    </div>
  );
}
