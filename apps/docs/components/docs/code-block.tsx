import { Code2 } from "lucide-react";

import { highlight } from "@/lib/shiki";

export interface CodeBlockProps {
  code: string;
  lang?: string;
  filename?: string;
}

export async function CodeBlock({ code, lang = "tsx", filename }: CodeBlockProps) {
  const label = filename ?? lang;
  const html = await highlight(code, lang);

  return (
    <div className="overflow-hidden rounded-lg border border-vex-border bg-vex-card/40">
      <div className="flex min-h-9 items-center justify-between gap-3 border-b border-vex-border/70 bg-vex-card/60 px-3.5 py-2">
        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-vex-text-muted">
          <Code2 aria-hidden="true" className="h-3.5 w-3.5" />
          <span>{label}</span>
        </div>
        <div aria-hidden="true" className="h-5 w-5" />
      </div>
      <div
        className="vex-shiki overflow-x-auto p-4 text-[12.5px] leading-relaxed"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
