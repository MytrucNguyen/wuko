import { getRegistryBaseUrl } from "./base-url";
import { REGISTRY_ITEMS, REGISTRY_NAME } from "./items";
import type { RegistryManifest } from "./types";

export const REGISTRY_MANIFEST_SCHEMA_URL =
  "https://ui.shadcn.com/schema/registry.json";

export function buildRegistryManifest(): RegistryManifest {
  return {
    $schema: REGISTRY_MANIFEST_SCHEMA_URL,
    name: REGISTRY_NAME,
    homepage: getRegistryBaseUrl(),
    items: REGISTRY_ITEMS.map((source) => ({
      name: source.name,
      type: source.type,
      title: source.title,
      description: source.description,
      ...(source.dependencies?.length
        ? { dependencies: source.dependencies }
        : {}),
      ...(source.registryDependencies?.length
        ? { registryDependencies: source.registryDependencies }
        : {}),
      files: (source.files ?? []).map((file) => ({
        path: file.registryPath,
        type: file.type,
      })),
    })),
  };
}