"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useMobileNav } from "@/components/shell/mobile-nav-provider";

const NAV = [
  {
    title: "Getting Started",
    items: [
      { label: "Installation", path: "/docs/installation" },
      { label: "Quick Start", path: "/docs/quick-start" },
    ],
  },
  {
    title: "Components",
    path: "/docs/components",
    items: [
      { label: "Alert", path: "/docs/components/alert" },
      { label: "Avatar", path: "/docs/components/avatar" },
      { label: "Badge", path: "/docs/components/badge" },
      { label: "Button", path: "/docs/components/button" },
      { label: "Card", path: "/docs/components/card" },
      { label: "Input", path: "/docs/components/input" },
      { label: "Modal", path: "/docs/components/modal" },
      { label: "Tabs", path: "/docs/components/tabs" },
      { label: "Toggle", path: "/docs/components/toggle" },
      { label: "Tooltip", path: "/docs/components/tooltip" },
    ],
  },
];

const COMING_SOON = ["Theming", "Form", "DataTable"];

export function Sidebar() {
  const pathname = usePathname();
  const { open, closeDrawer } = useMobileNav();

  return (
    <>
      {open && (
        <div
          onClick={closeDrawer}
          aria-hidden
          className="vk-backdrop fixed inset-0 z-40 lg:hidden"
        />
      )}
      <aside
        className={[
          "fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto",
          "border-r border-vex-border bg-vex-bg",
          "transition-transform duration-200 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
          "lg:sticky lg:top-14 lg:z-0 lg:translate-x-0",
        ].join(" ")}
      >
        <nav className="space-y-7 px-4 py-6">
          {NAV.map((section) => (
            <div key={section.title}>
              {section.path ? (
                <Link
                  href={section.path}
                  data-active={pathname === section.path}
                  onClick={closeDrawer}
                  className="nav-link mb-2 block rounded-md px-3 text-[11px] font-semibold uppercase tracking-wider text-vex-text-muted transition-colors hover:text-vex-heading"
                >
                  {section.title}
                </Link>
              ) : (
                <div className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-vex-text-muted">
                  {section.title}
                </div>
              )}
              <ul>
                {section.items.map((it) => (
                  <li key={it.path}>
                    <Link
                      href={it.path}
                      data-active={pathname === it.path}
                      onClick={closeDrawer}
                      className="nav-link block rounded-md px-3 py-1.5 text-[13.5px] text-vex-text transition-colors hover:text-vex-heading"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-8 border-t border-vex-border px-3 pt-6">
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-vex-text-muted">
              More
            </div>
            <ul className="space-y-1.5 text-[13.5px] text-vex-text-muted">
              {COMING_SOON.map((label) => (
                <li
                  key={label}
                  className="inline-flex w-full items-center gap-1.5"
                >
                  <span>{label}</span>
                  <span className="rounded border border-vex-border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-vex-text-muted">
                    soon
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}
