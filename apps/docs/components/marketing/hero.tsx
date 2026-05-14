import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { GithubMark } from "@/components/icons/github";
import { InstallChip } from "@/components/marketing/install-chip";

export function Hero() {
  return (
    <section className="grid-bg relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-8 pb-24 pt-20 lg:pb-32 lg:pt-28">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/brand/wuko.png"
            alt="Vex"
            width={144}
            height={144}
            priority
            className="mb-6 h-28 w-28 drop-shadow-[0_8px_30px_rgba(94,234,212,0.25)] lg:h-36 lg:w-36"
          />

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-wuko-accent/30 bg-wuko-accent/10 px-3 py-1 text-[12px] font-medium text-wuko-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-wuko-accent" />
            v0.1.0
          </div>

          <h1 className="mb-5 text-5xl font-extrabold tracking-tight text-wuko-heading lg:text-7xl">
            Wuko
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-wuko-text lg:text-xl">
            A themeable React component library. Built for production.
          </p>
          <p className="mt-2 max-w-xl text-[14px] text-wuko-text-muted">
            Accessible. Composable. Tree-shakeable. Zero runtime CSS-in-JS.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/docs/installation"
              className="wk-ring inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-wuko-accent px-5 text-[15px] font-semibold text-wuko-bg shadow-[inset_0_-2px_0_rgba(15,23,42,0.12)] transition-colors hover:bg-wuko-accent-hover active:bg-wuko-accent-active"
            >
              Get Started
              <ArrowRight size={14} aria-hidden />
            </Link>
            <a
              href="https://github.com/MytrucNguyen/vexkit"
              target="_blank"
              rel="noopener noreferrer"
              className="wk-ring inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-wuko-border bg-transparent px-5 text-[15px] font-medium text-wuko-heading transition-colors hover:border-wuko-text-muted hover:bg-wuko-card"
            >
              <GithubMark />
              GitHub
            </a>
          </div>

          <InstallChip />
        </div>
      </div>
    </section>
  );
}
