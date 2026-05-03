"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { GithubMark } from "@/components/icons/github";
import { useMobileNav } from "@/components/shell/mobile-nav-provider";
import { MobileSearchTrigger } from "@/components/shell/mobile-search-trigger";
import { SearchTrigger } from "@/components/shell/search-trigger";
import { ThemeToggle } from "@/components/shell/theme-toggle";

export function Header() {
  const { open, openDrawer, closeDrawer } = useMobileNav();

  return (
    <header className="sticky top-0 z-50 h-14 border-b border-vex-border bg-vex-bg/85 backdrop-blur">
      <div className="flex h-full items-center gap-4 px-4 lg:px-6">
        <button
          type="button"
          onClick={() => (open ? closeDrawer() : openDrawer())}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="vk-ring text-vex-text transition-colors hover:text-vex-heading"
        >
          {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
        </button>

        <Link
          href="/"
          aria-label="VexKit home"
          className="vk-ring inline-flex select-none items-center gap-2.5 rounded"
        >
          <Image
            src="/vex.png"
            alt=""
            width={26}
            height={26}
            className="rounded-lg object-contain -translate-y-0.5"
            aria-hidden
          />
          <span className="text-[18px] font-extrabold tracking-tight text-vex-heading">
            Vex<span className="text-vex-accent">Kit</span>
          </span>
        </Link>

        <span className="hidden items-center gap-1.5 rounded border border-vex-border px-2 py-0.5 font-mono text-[11px] text-vex-text-muted md:inline-flex">
          v0.1.0
        </span>

        <div className="flex-1" />

        <SearchTrigger />

        <MobileSearchTrigger />

        <a
          href="https://github.com/MytrucNguyen/vexkit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
          className="vk-ring hidden h-9 w-9 items-center justify-center rounded-md border border-vex-border bg-vex-card/60 text-vex-text transition-colors hover:text-vex-heading sm:inline-flex"
        >
          <GithubMark size={16} />
        </a>

        <ThemeToggle />
      </div>
    </header>
  );
}
