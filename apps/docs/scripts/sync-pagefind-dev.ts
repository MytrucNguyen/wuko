import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DOCS_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  ".."
);
const SOURCE = path.join(DOCS_ROOT, "out", "_pagefind");
const TARGET = path.join(DOCS_ROOT, "public", "_pagefind");

async function exists(p: string): Promise<boolean> {
  try {
    await fs.stat(p);
    return true;
  } catch {
    return false;
  }
}

async function main(): Promise<void> {
  if (!(await exists(SOURCE))) {
    console.warn(
      `sync-pagefind-dev: ${SOURCE} not found; skipping (build did not produce a Pagefind index).`
    );
    return;
  }

  await fs.rm(TARGET, { recursive: true, force: true });
  await fs.cp(SOURCE, TARGET, { recursive: true });

  console.log(`sync-pagefind-dev: copied ${SOURCE} → ${TARGET}.`);
}

main().catch((err: unknown) => {
  const message = err instanceof Error ? err.message : String(err);
  console.error(`sync-pagefind-dev crashed: ${message}`);
  process.exit(1);
});
