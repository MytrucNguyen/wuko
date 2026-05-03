import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { buildRegistryItem } from "@/lib/registry/build-item";
import { buildRegistryManifest } from "@/lib/registry/build-manifest";
import { REGISTRY_ITEMS } from "@/lib/registry/items";

const DOCS_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  ".."
);
const OUTPUT_DIR = path.join(DOCS_ROOT, "public", "r");

function fail(message: string): never {
  console.error(`Registry static generation failed: ${message}`);
  process.exit(1);
}

async function writeJson(filename: string, payload: unknown): Promise<void> {
  const absolute = path.join(OUTPUT_DIR, filename);
  await fs.writeFile(absolute, JSON.stringify(payload), "utf8");
}

async function main(): Promise<void> {
  // Wipe and recreate the output dir so removed items don't linger.
  await fs.rm(OUTPUT_DIR, { recursive: true, force: true });
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  for (const source of REGISTRY_ITEMS) {
    const result = await buildRegistryItem(source.name);
    if (!result.ok) {
      fail(
        `buildRegistryItem("${source.name}") returned status ${result.status}: ${result.message}`
      );
    }
    await writeJson(`${source.name}.json`, result.item);
  }

  const manifest = buildRegistryManifest();
  await writeJson("registry.json", manifest);

  console.log(
    `Registry static generation: wrote ${REGISTRY_ITEMS.length + 1} file(s) to public/r/.`
  );
}

main().catch((err: unknown) => {
  const message = err instanceof Error ? err.message : String(err);
  console.error(`Registry static generation crashed: ${message}`);
  process.exit(1);
});
