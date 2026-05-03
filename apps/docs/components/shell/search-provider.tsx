"use client";

import * as React from "react";

type SearchContextValue = {
  open: boolean;
  setOpen: (next: boolean) => void;
};

const SearchContext = React.createContext<SearchContextValue | null>(null);

export function useSearch(): SearchContextValue {
  const ctx = React.useContext(SearchContext);
  if (!ctx) {
    throw new Error("useSearch must be used within <SearchProvider>");
  }
  return ctx;
}

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const isModK =
        (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
      if (!isModK) return;
      e.preventDefault();
      setOpen((prev) => !prev);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const value = React.useMemo(() => ({ open, setOpen }), [open]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
