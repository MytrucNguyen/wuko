"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { GithubMark } from "@/components/icons/github";
import { useMobileNav } from "@/components/shell/mobile-nav-provider";
import { MobileSearchTrigger } from "@/components/shell/mobile-search-trigger";
import { SearchTrigger } from "@/components/shell/search-trigger";
import { ThemeToggle } from "@/components/shell/theme-toggle";
import { usePathname } from "next/navigation"; 

export function Header() {
  const { open, openDrawer, closeDrawer } = useMobileNav();
  const pathname = usePathname();
  const hasSidebar = pathname.startsWith("/docs");

  return (
    <header className="sticky top-0 z-50 h-14 border-b border-wuko-border bg-wuko-bg/85 backdrop-blur">
      <div className="flex h-full items-center gap-4 px-4 lg:px-6">
        <button
          type="button"
          onClick={() => (open ? closeDrawer() : openDrawer())}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className={`wk-ring text-wuko-text transition-colors hover:text-wuko-heading ${
            hasSidebar ? "lg:hidden" : ""
          }`}
        >
          {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
        </button>

        <Link
          href="/"
          aria-label="Wuko home"
          className="wk-ring inline-flex select-none items-center gap-2.5 rounded"
        >
          <Image
            src="/brand/wuko.png"
            alt=""
            width={32}
            height={32}
            className="rounded-lg object-contain"
            aria-hidden
          />
          <span className="text-[18px] font-extrabold tracking-tight text-wuko-heading">
            Wuko
          </span>
        </Link>

        <span className="hidden items-center gap-1.5 rounded border border-wuko-border px-2 py-0.5 font-mono text-[11px] text-wuko-text-muted md:inline-flex">
          v0.1.0
        </span>

        <div className="flex-1" />

        <SearchTrigger />

        <MobileSearchTrigger />

        <a
          href="https://github.com/MytrucNguyen/wuko"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
          className="wk-ring hidden h-9 w-9 items-center justify-center rounded-md border border-wuko-border bg-wuko-card/60 text-wuko-text transition-colors hover:text-wuko-heading sm:inline-flex"
        >
          <GithubMark size={16} />
        </a>

        <ThemeToggle />
      </div>
    </header>
  );
}
