import { promises as fs } from "node:fs";
import path from "node:path";

import { getRegistryItem } from "./items";
import type { RegistryItem, RegistryItemFile, RegistrySource } from "./types";

export const REGISTRY_ITEM_SCHEMA_URL =
  "https://ui.shadcn.com/schema/registry-item.json";

export type BuildItemResult =
  | { ok: true; item: RegistryItem }
  | { ok: false; status: number; message: string };

async function readFiles(
  source: RegistrySource
): Promise<RegistryItemFile[] | { error: string }> {
  const files: RegistryItemFile[] = [];
  for (const file of source.files) {
    const absolutePath = path.join(process.cwd(), file.diskPath);
    try {
      const content = await fs.readFile(absolutePath, "utf8");
      files.push({
        path: file.registryPath,
        type: file.type,
        target: file.target,
        content,
      });
    } catch {
      return {
        error: `Source file missing on disk for "${source.name}": ${file.diskPath}`,
      };
    }
  }
  return files;
}

export async function buildRegistryItem(
  name: string
): Promise<BuildItemResult> {
  const source = getRegistryItem(name);
  if (!source) {
    return {
      ok: false,
      status: 404,
      message: `Registry item "${name}" not found.`,
    };
  }

  const filesResult = await readFiles(source);
  if ("error" in filesResult) {
    return { ok: false, status: 500, message: filesResult.error };
  }

  const item: RegistryItem = {
    $schema: REGISTRY_ITEM_SCHEMA_URL,
    name: source.name,
    type: source.type,
    title: source.title,
    description: source.description,
    ...(source.author ? { author: source.author } : {}),
    ...(source.dependencies?.length
      ? { dependencies: source.dependencies }
      : {}),
    ...(source.registryDependencies?.length
      ? { registryDependencies: source.registryDependencies }
      : {}),
    files: filesResult,
  };

  return { ok: true, item };
}

export async function getRegistrySource(name: string): Promise<string> {
  const source = getRegistryItem(name);
  if (!source) {
    throw new Error(`Registry item "${name}" not found.`);
  }
  if (source.files.length !== 1) {
    throw new Error(
      `Expected exactly 1 source file for "${name}", got ${source.files.length}.`,
    );
  }
  const absolutePath = path.join(process.cwd(), source.files[0].diskPath);
  return fs.readFile(absolutePath, "utf8");
}
