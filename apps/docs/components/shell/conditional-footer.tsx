"use client";

import { usePathname } from "next/navigation";

import { Footer } from "@/components/shell/footer";

export function ConditionalFooter() {
  const pathname = usePathname();
  const isDocsPage = pathname?.startsWith("/docs");

  if (isDocsPage) return null;
  return <Footer />;
}