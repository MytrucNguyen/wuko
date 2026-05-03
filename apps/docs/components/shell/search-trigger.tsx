"use client";

import { Search } from "lucide-react";

import { useSearch } from "@/components/shell/search-provider";

export function SearchTrigger() {
  const { setOpen } = useSearch();

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label="Search documentation"
      className="hidden h-9 w-72 items-center gap-2 rounded-md border border-vex-border bg-vex-card px-3 text-left text-sm text-vex-text-muted transition-colors hover:border-vex-text-muted focus-visible:border-vex-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vex-accent/30 md:inline-flex"
    >
      <Search size={14} aria-hidden className="text-vex-text-muted" />
      <span className="flex-1">Search docs…</span>
      <kbd className="pointer-events-none inline-flex items-center gap-0.5 rounded border border-vex-border bg-vex-bg px-1.5 py-0.5 font-mono text-[10px] text-vex-text-muted">
        <span className="text-[11px]">⌘</span>K
      </kbd>
    </button>
  );
}
