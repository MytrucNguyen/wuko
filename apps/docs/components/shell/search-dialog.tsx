"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import * as React from "react";

import { useSearch } from "@/components/shell/search-provider";

type PagefindResultData = {
  url: string;
  excerpt: string;
  meta: { title: string };
};

type PagefindResult = {
  id: string;
  data: () => Promise<PagefindResultData>;
};

type PagefindModule = {
  search: (query: string) => Promise<{ results: PagefindResult[] }>;
};

let pagefindPromise: Promise<PagefindModule | null> | null = null;

async function loadPagefind(): Promise<PagefindModule | null> {
  if (pagefindPromise) return pagefindPromise;
  pagefindPromise = (async () => {
    try {
      const url = "/_pagefind/pagefind.js";
      const mod = (await import(
        /* webpackIgnore: true */ /* @vite-ignore */ url
      )) as PagefindModule;
      return mod;
    } catch {
      return null;
    }
  })();
  return pagefindPromise;
}

const RESULT_CAP = 10;
const DEBOUNCE_MS = 150;

type Category = "Components" | "Pages";

function categorize(url: string): Category {
  if (/^\/docs\/components\/[^/]+/.test(url)) return "Components";
  return "Pages";
}

type Row = {
  key: string;
  url: string;
  title: string;
  excerpt: string;
  category: Category;
};

type Status = "idle" | "loading" | "ready" | "no-results" | "unavailable";

function toPlainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
}

const DEFAULTS: Row[] = [
  { key: "d:alert", url: "/docs/components/alert", title: "Alert", excerpt: "Inline status messaging", category: "Components" },
  { key: "d:avatar", url: "/docs/components/avatar", title: "Avatar", excerpt: "User profile image with fallback", category: "Components" },
  { key: "d:badge", url: "/docs/components/badge", title: "Badge", excerpt: "Compact status label", category: "Components" },
  { key: "d:button", url: "/docs/components/button", title: "Button", excerpt: "Primary interactive control", category: "Components" },
  { key: "d:card", url: "/docs/components/card", title: "Card", excerpt: "Container for related content", category: "Components" },
  { key: "d:input", url: "/docs/components/input", title: "Input", excerpt: "Text input with label and hint", category: "Components" },
  { key: "d:modal", url: "/docs/components/modal", title: "Modal", excerpt: "Centered dialog overlay", category: "Components" },
  { key: "d:tabs", url: "/docs/components/tabs", title: "Tabs", excerpt: "Switch between content panels", category: "Components" },
  { key: "d:toggle", url: "/docs/components/toggle", title: "Toggle", excerpt: "Binary on/off control", category: "Components" },
  { key: "d:tooltip", url: "/docs/components/tooltip", title: "Tooltip", excerpt: "Contextual hover hint", category: "Components" },
  { key: "d:home", url: "/", title: "Home", excerpt: "VexKit landing page", category: "Pages" },
  { key: "d:components", url: "/docs/components", title: "Components", excerpt: "Browse all components", category: "Pages" },
  { key: "d:installation", url: "/docs/installation", title: "Installation", excerpt: "Set up VexKit in your app", category: "Pages" },
  { key: "d:quick-start", url: "/docs/quick-start", title: "Quick Start", excerpt: "Build your first page", category: "Pages" },
];

export function SearchDialog() {
  const { open, setOpen } = useSearch();
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [rows, setRows] = React.useState<Row[]>([]);
  const [status, setStatus] = React.useState<Status>("idle");
  const debounceRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    if (!open) {
      setQuery("");
      setRows([]);
      setStatus("idle");
    }
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    if (!query.trim()) {
      setRows([]);
      setStatus("idle");
      return;
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);
    setStatus("loading");
    setRows([]);

    debounceRef.current = setTimeout(async () => {
      const pagefind = await loadPagefind();
      if (!pagefind) {
        setStatus("unavailable");
        return;
      }
      const search = await pagefind.search(query);
      const top = search.results.slice(0, RESULT_CAP);
      const resolved = await Promise.all(top.map((r) => r.data()));

      const flat: Row[] = resolved.map((data) => {
        const cleanUrl = data.url.replace(/\.html$/, "");
        return {
          key: cleanUrl,
          url: cleanUrl,
          title: data.meta.title,
          excerpt: toPlainText(data.excerpt),
          category: categorize(cleanUrl),
        };
      });

      setRows(flat);
      setStatus(flat.length === 0 ? "no-results" : "ready");
    }, DEBOUNCE_MS);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, open]);

  function handleSelect(url: string) {
    setOpen(false);
    router.push(url);
  }

  const showDefaults = !query.trim();
  const displayRows = showDefaults
    ? DEFAULTS
    : rows.filter((r) => r.category === "Components");
  const componentsRows = displayRows.filter((r) => r.category === "Components");
  const pagesRows = displayRows.filter((r) => r.category === "Pages");

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm" />
        <DialogPrimitive.Content
          aria-label="Search documentation"
          className="fixed left-1/2 top-[20%] z-[101] w-[92vw] max-w-xl -translate-x-1/2 overflow-hidden rounded-xl border border-vex-border bg-vex-card shadow-xl outline-none"
        >
          <DialogPrimitive.Title className="sr-only">
            Search documentation
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            Type a query to search VexKit documentation.
          </DialogPrimitive.Description>

          <Command
            shouldFilter={false}
            className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-vex-text-muted"
          >
            <div className="border-b border-vex-border px-4">
              <Command.Input
                value={query}
                onValueChange={setQuery}
                autoFocus
                placeholder="Search documentation…"
                className="h-12 w-full bg-transparent text-sm text-vex-heading placeholder:text-vex-text-muted outline-none"
              />
            </div>

            <Command.List className="max-h-[60vh] min-h-[200px] overflow-y-auto p-2">
              <Command.Empty className="px-6 py-12 text-center text-sm text-vex-text-muted">
                {status === "loading"
                  ? "Searching…"
                  : status === "unavailable"
                  ? "Search index not available."
                  : `No results found for "${query}".`}
              </Command.Empty>

              {componentsRows.length > 0 && (
                <Command.Group heading="Components">
                  {componentsRows.map((row) => (
                    <Command.Item
                      key={row.key}
                      value={row.key}
                      onSelect={() => handleSelect(row.url)}
                      className="cursor-pointer rounded-md px-3 py-2 data-[selected=true]:bg-vex-accent/10"
                    >
                      <div className="text-sm font-medium text-vex-heading">
                        {row.title}
                      </div>
                      {showDefaults && (
                        <div className="mt-0.5 truncate text-[12px] text-vex-text-muted">
                          {row.excerpt}
                        </div>
                      )}
                    </Command.Item>
                  ))}
                </Command.Group>
              )}

              {pagesRows.length > 0 && (
                <Command.Group heading="Pages">
                  {pagesRows.map((row) => (
                    <Command.Item
                      key={row.key}
                      value={row.key}
                      onSelect={() => handleSelect(row.url)}
                      className="cursor-pointer rounded-md px-3 py-2 data-[selected=true]:bg-vex-accent/10"
                    >
                      <div className="text-sm font-medium text-vex-heading">
                        {row.title}
                      </div>
                      <div className="mt-0.5 truncate text-[12px] text-vex-text-muted">
                        {row.excerpt}
                      </div>
                    </Command.Item>
                  ))}
                </Command.Group>
              )}
            </Command.List>

            <div className="flex items-center justify-end gap-2 border-t border-vex-border px-4 py-2.5 text-[11px] text-vex-text-muted">
              <kbd className="inline-flex h-5 min-w-5 items-center justify-center rounded border border-vex-border bg-vex-bg px-1 font-mono text-[10px]">
                ↵
              </kbd>
              <span>Go to Page</span>
            </div>
          </Command>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
