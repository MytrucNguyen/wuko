"use client";

import { useState } from "react";

import { Button } from "@/registry/default/ui/button";
import { Alert } from "@/registry/default/ui/alert";

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
        <p className="text-[13px] text-wuko-text-muted">
          Alert dismissed.{" "}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-wuko-accent underline-offset-2 hover:underline"
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
