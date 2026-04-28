import "server-only";
import { codeToHtml } from "shiki";

export type SupportedLang = "tsx" | "ts" | "css" | "bash";

export async function highlight(code: string, lang: SupportedLang | string = "tsx") {
  return codeToHtml(code, {
    lang,
    themes: { light: "github-light", dark: "github-dark" },
    defaultColor: false,
  });
}
