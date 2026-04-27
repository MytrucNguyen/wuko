"use client";

import { Copy, Check } from "lucide-react";

import { useState } from "react";

export default function InstallCommand() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("npm install vexkit");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-4 bg-vex-card border border-vex-border rounded-md px-4 py-2">
      <pre className="font-mono text-sm">
        <code>
          <span className="text-vex-accent">$</span>{" "}
          <span className="text-vex-text-muted">npm install vexkit</span>
        </code>
      </pre>
      <button
        onClick={handleCopy}
        className={`flex items-center gap-1 transition-colors ${
          copied
            ? "px-2 py-1 rounded-md border border-vex-accent text-vex-accent"
            : "text-vex-text-muted hover:text-vex-accent"
        }`}
        aria-label="Copy install command"
      >
        {copied ? (
          <>
            <Check className="size-4 text-vex-accent" />
            <span className="text-xs font-semibold text-vex-accent">
              COPIED
            </span>
          </>
        ) : (
          <Copy className="size-4" />
        )}
      </button>
    </div>
  );
}
