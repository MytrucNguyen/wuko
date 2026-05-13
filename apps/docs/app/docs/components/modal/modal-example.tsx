"use client";

import { useState } from "react";

import { Button } from "@/registry/default/ui/button";
import { Modal } from "@/registry/default/ui/modal";

export function ModalExample() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Delete project?"
        description="This will permanently delete vex-app and all of its data. This action cannot be undone."
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </>
        }
      />
    </>
  );
}
