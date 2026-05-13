"use client";

import { useState } from "react";

import { Toggle } from "@/registry/default/ui/toggle";

export function ToggleExample() {
  const [notifications, setNotifications] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [smallEnabled, setSmallEnabled] = useState(false);
  return (
    <div className="space-y-3">
      <Toggle
        checked={notifications}
        onChange={setNotifications}
        label="Enable notifications"
      />
      <Toggle
        checked={marketing}
        onChange={setMarketing}
        label="Marketing emails"
      />
      <Toggle
        checked={true}
        onChange={() => {}}
        disabled
        label="Disabled (on)"
      />
      <Toggle
        checked={smallEnabled}
        onChange={setSmallEnabled}
        size="sm"
        label="Small"
      />
    </div>
  );
}
