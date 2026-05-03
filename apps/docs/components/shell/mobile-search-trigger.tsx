"use client";

import { Search } from "lucide-react";

import { useSearch } from "@/components/shell/search-provider";

export function MobileSearchTrigger() {
  const { setOpen } = useSearch();

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label="Search documentation"
      className="vk-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-vex-border bg-vex-card/60 text-vex-text transition-colors hover:text-vex-heading md:hidden"
    >
      <Search size={16} aria-hidden />
    </button>
  );
}
