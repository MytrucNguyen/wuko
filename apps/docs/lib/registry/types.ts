export type RegistryItemType =
  | "registry:ui"
  | "registry:component"
  | "registry:block"
  | "registry:hook"
  | "registry:lib"
  | "registry:page"
  | "registry:file"
  | "registry:style"
  | "registry:theme"
  | "registry:base"
  | "registry:font"
  | "registry:item";

export interface RegistryItemFile {
  path: string;
  type: RegistryItemType;
  target: string;
  content?: string;
}

export interface RegistryItem {
  $schema?: string;
  name: string;
  type: RegistryItemType;
  title: string;
  description: string;
  author?: string;
  dependencies?: string[];
  devDependencies?: string[];
  registryDependencies?: string[];
  files: RegistryItemFile[];
  cssVars?: {
    theme?: Record<string, string>;
    light?: Record<string, string>;
    dark?: Record<string, string>;
  };
  css?: Record<string, unknown>;
  docs?: string;
  categories?: string[];
  meta?: Record<string, unknown>;
}

export interface RegistryManifestItem {
  name: string;
  type: RegistryItemType;
  title: string;
  description: string;
  registryDependencies?: string[];
  dependencies?: string[];
  files: Pick<RegistryItemFile, "path" | "type">[];
}

export interface RegistryManifest {
  $schema: string;
  name: string;
  homepage: string;
  items: RegistryManifestItem[];
}

export interface RegistrySource {
  name: string;
  type: RegistryItemType;
  title: string;
  description: string;
  author?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files?: {
    diskPath: string;
    registryPath: string;
    type: RegistryItemType;
    target: string;
  }[];
  cssVars?: {
    theme?: Record<string, string>;
    light?: Record<string, string>;
    dark?: Record<string, string>;
  };
  css?: Record<string, unknown>;
}