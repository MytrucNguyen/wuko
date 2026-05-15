"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

interface NavListProps {
  onNavigate?: () => void;
}

export function NavList({ onNavigate }: NavListProps) {
  const pathname = usePathname();

  return (
    <nav className="space-y-7 px-4 py-6">
      {NAV.map((section) => (
        <div key={section.title}>
          {section.path ? (
            <Link
              href={section.path}
              data-active={pathname === section.path}
              onClick={onNavigate}
              className="nav-link mb-2 block rounded-md px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-wuko-text-muted transition-colors hover:text-wuko-heading"            >
              {section.title}
            </Link>
          ) : (
            <div className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-wuko-text-muted">
              {section.title}
            </div>
          )}
          <ul>
            {section.items.map((it) => (
              <li key={it.path}>
                <Link
                  href={it.path}
                  data-active={pathname === it.path}
                  onClick={onNavigate}
                  className="nav-link block rounded-md px-3 py-1.5 text-[13.5px] text-wuko-text transition-colors hover:text-wuko-heading"
                >
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="mt-8 border-t border-wuko-border px-3 pt-6">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-wuko-text-muted">
          More
        </div>
        <ul className="space-y-1.5 text-[13.5px] text-wuko-text-muted">
          {COMING_SOON.map((label) => (
            <li
              key={label}
              className="inline-flex w-full items-center gap-1.5"
            >
              <span>{label}</span>
              <span className="rounded border border-wuko-border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-wuko-text-muted">
                soon
              </span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
