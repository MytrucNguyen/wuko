"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type TocItem = { id: string; label: string; level: 2 | 3 };

export function OnThisPage({
  containerSelector = "main article",
}: {
  containerSelector?: string;
}) {
  const pathname = usePathname();
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const root = document.querySelector(containerSelector);
    if (!root) return;
    const headings = Array.from(
      root.querySelectorAll<HTMLHeadingElement>("h2[id], h3[id]"),
    );
    const list: TocItem[] = headings.map((h) => ({
      id: h.id,
      label: h.textContent ?? "",
      level: h.tagName === "H3" ? 3 : 2,
    }));
    // OnThisPage reads heading IDs from the rendered DOM after mount. The DOM
    // is the external system the rule asks about; this is the correct place
    // to populate state from it. The IntersectionObserver below subscribes
    // properly. This setState is legitimate per the rule's own reasoning.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(list);
    setActiveId(null);
    if (!headings.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop,
          );
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px" },
    );
    headings.forEach((h) => obs.observe(h));
    return () => obs.disconnect();
  }, [pathname, containerSelector]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="On this page" className="text-[13px]">
      <div className="mb-3 text-[11px] font-medium uppercase tracking-wider text-vex-text-muted">
        On this page
      </div>
      <ul className="space-y-1.5 border-l border-vex-border">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              data-active={activeId === it.id}
              className={`toc-link block -ml-px border-l border-transparent text-vex-text-muted transition-colors hover:text-vex-heading ${
                it.level === 3 ? "pl-6" : "pl-3"
              }`}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
