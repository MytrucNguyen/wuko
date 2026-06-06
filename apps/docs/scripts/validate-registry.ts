import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { buildRegistryItem } from "@/lib/registry/build-item";
import { buildRegistryManifest } from "@/lib/registry/build-manifest";
import { REGISTRY_ITEMS } from "@/lib/registry/items";

const DOCS_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);

function fail(message: string): never {
  console.error(`Registry validation failed: ${message}`);
  process.exit(1);
}

async function fileExists(absolutePath: string): Promise<boolean> {
  try {
    const stat = await fs.stat(absolutePath);
    return stat.isFile();
  } catch {
    return false;
  }
}

async function main(): Promise<void> {
  if (REGISTRY_ITEMS.length === 0) {
    fail("REGISTRY_ITEMS is empty.");
  }

  const itemNames = new Set(REGISTRY_ITEMS.map((item) => item.name));
  let totalFiles = 0;

  for (const source of REGISTRY_ITEMS) {
    const result = await buildRegistryItem(source.name);
    if (!result.ok) {
      fail(
        `buildRegistryItem("${source.name}") returned status ${result.status}: ${result.message}`,
      );
    }

    for (const file of source.files ?? []) {
      const absolute = path.join(DOCS_ROOT, file.diskPath);
      if (!(await fileExists(absolute))) {
        fail(
          `Item "${source.name}" file "${file.diskPath}" does not resolve to a file on disk (${absolute}).`,
        );
      }
      totalFiles++;
    }

    if (source.registryDependencies) {
      for (const dep of source.registryDependencies) {
        const isUrl = dep.startsWith("http://") || dep.startsWith("https://");
        const isScoped = dep.startsWith("@");
        if (!isUrl && !isScoped && !itemNames.has(dep)) {
          fail(
            `Item "${source.name}" registryDependency "${dep}" does not match any local item name.`,
          );
        }
      }
    }
  }

  const manifest = buildRegistryManifest();
  if (manifest.items.length !== REGISTRY_ITEMS.length) {
    fail(
      `Manifest item count (${manifest.items.length}) does not match REGISTRY_ITEMS count (${REGISTRY_ITEMS.length}).`,
    );
  }
  for (const source of REGISTRY_ITEMS) {
    const found = manifest.items.find((m) => m.name === source.name);
    if (!found) {
      fail(`Manifest is missing item "${source.name}".`);
    }
  }

  console.log(
    `Registry validation passed: validated ${REGISTRY_ITEMS.length} item(s), ${totalFiles} file(s).`,
  );
}

main().catch((err: unknown) => {
  const message = err instanceof Error ? err.message : String(err);
  console.error(`Registry validation crashed: ${message}`);
  process.exit(1);
});
