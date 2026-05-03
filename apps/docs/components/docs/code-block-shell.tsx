"use client";

import {
  Check,
  ChevronDown,
  ChevronUp,
  Code2,
  Copy,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CodeBlockShellProps {
  code: string;
  html: string;
  label: string;
  collapsible: boolean;
  initialExpanded: boolean;
}

const COPY_RESET_MS = 1500;
const COLLAPSED_MAX_HEIGHT = "13rem";

export function CodeBlockShell({
  code,
  html,
  label,
  collapsible,
  initialExpanded,
}: CodeBlockShellProps) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(initialExpanded);
  const copyTimeout = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimeout.current !== null) {
        window.clearTimeout(copyTimeout.current);
      }
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      if (copyTimeout.current !== null) {
        window.clearTimeout(copyTimeout.current);
      }
      copyTimeout.current = window.setTimeout(() => {
        setCopied(false);
      }, COPY_RESET_MS);
    } catch {
      // Clipboard unavailable — silently no-op; consumers can hand-select.
    }
  }

  return (
    <div data-pagefind-ignore className="overflow-hidden rounded-lg border border-vex-border bg-vex-card/40">
      <div className="flex min-h-9 items-center justify-between gap-3 border-b border-vex-border/70 bg-vex-card/60 px-3.5 py-2">
        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-vex-text-muted">
          <Code2 aria-hidden="true" className="h-3.5 w-3.5" />
          <span>{label}</span>
        </div>
        <div className="flex items-center gap-1">
          {collapsible && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              aria-label={expanded ? "Collapse code" : "Expand code"}
              className="inline-flex h-6 w-6 items-center justify-center rounded text-vex-text-muted transition-colors hover:bg-vex-border/40 hover:text-vex-heading focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vex-accent"
            >
              {expanded ? (
                <ChevronUp aria-hidden="true" className="h-3.5 w-3.5" />
              ) : (
                <ChevronDown aria-hidden="true" className="h-3.5 w-3.5" />
              )}
            </button>
          )}
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? "Copied" : "Copy code"}
            className="inline-flex h-6 w-6 items-center justify-center rounded text-vex-text-muted transition-colors hover:bg-vex-border/40 hover:text-vex-heading focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vex-accent"
          >
            {copied ? (
              <Check aria-hidden="true" className="h-3.5 w-3.5 text-vex-accent" />
            ) : (
              <Copy aria-hidden="true" className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      </div>
      <div
        className="relative"
        style={
          expanded
            ? undefined
            : { maxHeight: COLLAPSED_MAX_HEIGHT, overflow: "hidden" }
        }
      >
        <div
          className="vex-shiki overflow-x-auto p-4 text-[12.5px] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {!expanded && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-vex-card/60 to-transparent"
          />
        )}
      </div>
    </div>
  );
}
