"use client";

import { Bell, Trash2, Zap } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import { Tooltip } from "@/registry/default/ui/tooltip";

export function TooltipExample() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-4">
        <Tooltip content="Trigger a deploy">
          <Button>
            <Zap className="size-4" />
            Deploy
          </Button>
        </Tooltip>
        <Tooltip content="3 unread notifications">
          <Button variant="outline">
            <Bell className="size-4" />
            Inbox
          </Button>
        </Tooltip>
        <Tooltip content="Permanently delete">
          <Button variant="danger">
            <Trash2 className="size-4" />
            Delete
          </Button>
        </Tooltip>
      </div>
      <div className="flex flex-wrap items-center gap-6">
        <Tooltip content="Top side" side="top">
          <Button variant="outline" size="sm">
            Top
          </Button>
        </Tooltip>
        <Tooltip content="Right side" side="right">
          <Button variant="outline" size="sm">
            Right
          </Button>
        </Tooltip>
        <Tooltip content="Bottom side" side="bottom">
          <Button variant="outline" size="sm">
            Bottom
          </Button>
        </Tooltip>
        <Tooltip content="Left side" side="left">
          <Button variant="outline" size="sm">
            Left
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}
