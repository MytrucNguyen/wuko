import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { useState } from "react";

import { Button } from "@/registry/default/ui/button";
import { Modal } from "@/registry/default/ui/modal";

const meta = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: {
    open: false,
    onClose: () => {},
    title: "Delete project?",
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks -- Storybook render-fn idiom; arrow IS a function component
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
  },
};

export const WithoutDescription: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks -- Storybook render-fn idiom; arrow IS a function component
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Show announcement</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Deployment complete"
          footer={<Button onClick={() => setOpen(false)}>Got it</Button>}
        >
          Your changes are live at vex-app.example.com.
        </Modal>
      </>
    );
  },
};

export const WithoutFooter: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks -- Storybook render-fn idiom; arrow IS a function component
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)}>
          View details
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Build details"
          description="Build #4218 finished in 1m 47s."
        >
          <ul className="ml-4 list-disc space-y-1">
            <li>Lint: passed</li>
            <li>Tests: 142 passed, 0 failed</li>
            <li>Bundle size: 184 kB (+2 kB vs main)</li>
          </ul>
        </Modal>
      </>
    );
  },
};

export const LongContent: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks -- Storybook render-fn idiom; arrow IS a function component
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open terms
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Terms of service"
          description="Please review the following before continuing."
          footer={
            <>
              <Button variant="danger" onClick={() => setOpen(false)}>
                Decline
              </Button>
              <Button onClick={() => setOpen(false)}>Accept</Button>
            </>
          }
        >
          <div className="space-y-3">
            <p>
              By using this service you agree to abide by the rules of the
              kitsune. The kitsune are wise and ancient; their rules are
              not to be questioned.
            </p>
            <p>
              You may not feed the kitsune after midnight. You may not
              expose the kitsune to bright sunlight. You may not get the
              kitsune wet.
            </p>
            <p>
              Violation of any of these rules may result in unexpected
              transformations, including but not limited to becoming a
              fox yourself.
            </p>
          </div>
        </Modal>
      </>
    );
  },
};
