"use client";

import Image from "next/image";

import InstallCommand from "@/components/InstallCommand";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-6">
      <Image
        src="/images/vex.png"
        alt="Vex the kitsune mascot"
        width={144}
        height={144}
        priority
      />
      <h1 className="text-7xl font-bold text-vex-text">
        Vex<span className="text-vex-accent">Kit</span>
      </h1>
      <p className="text-xl text-vex-text-muted">
        A themeable React component library. Built for production.
      </p>

      <p className="text-sm text-vex-text-muted">
        Accessible. Composable. Tree-shakeable. Zero runtime CSS-in-JS.
      </p>

      <InstallCommand />
    </main>
  );
}
