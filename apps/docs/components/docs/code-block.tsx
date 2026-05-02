import { highlight } from "@/lib/shiki";

import { CodeBlockShell } from "./code-block-shell";

const COLLAPSE_THRESHOLD_LINES = 12;

export interface CodeBlockProps {
  code: string;
  lang?: string;
  filename?: string;
  defaultExpanded?: boolean;
}

export async function CodeBlock({
  code,
  lang = "tsx",
  filename,
  defaultExpanded,
}: CodeBlockProps) {
  const html = await highlight(code, lang);
  const lineCount = code.split("\n").length;
  const collapsible = lineCount > COLLAPSE_THRESHOLD_LINES;

  return (
    <CodeBlockShell
      code={code}
      html={html}
      label={filename ?? lang}
      collapsible={collapsible}
      initialExpanded={defaultExpanded ?? !collapsible}
    />
  );
}
