import type { RegistrySource } from "./types";

export const REGISTRY_AUTHOR =
  "Wuko (https://github.com/MytrucNguyen/wuko)";

export const REGISTRY_NAME = "wuko";

export const REGISTRY_ITEMS: RegistrySource[] = [
  {
    name: "theme",
    type: "registry:theme",
    title: "Theme",
    description:
      "Wuko design tokens. Installs the --wuko-* CSS variables for dark and light mode. Consumers add the @theme inline bridge in their own globals.css to expose Tailwind utilities.",
    author: REGISTRY_AUTHOR,
    cssVars: {
      dark: {
        "wuko-bg": "#0f172a",
        "wuko-card": "#1e293b",
        "wuko-border": "#334155",
        "wuko-heading": "#e2e8f0",
        "wuko-text": "#cbd5e1",
        "wuko-text-muted": "#94a3b8",
        "wuko-accent": "#5eead4",
        "wuko-accent-hover": "#2dd4bf",
        "wuko-accent-active": "#14b8a6",
        "wuko-danger": "#e11d48",
        "wuko-danger-hover": "#be123c",
        "wuko-danger-fg": "#fb7185",
        "wuko-success-fg": "#10b981",
        "wuko-warning-fg": "#f59e0b",
        "wuko-gold": "#d4a017",
      },
      light: {
        "wuko-bg": "#f8fafc",
        "wuko-card": "#ffffff",
        "wuko-border": "#e2e8f0",
        "wuko-heading": "#0f172a",
        "wuko-text": "#475569",
        "wuko-text-muted": "#64748b",
        "wuko-accent": "#0f766e",
        "wuko-accent-hover": "#0d9488",
        "wuko-accent-active": "#134e4a",
        "wuko-danger": "#dc2626",
        "wuko-danger-hover": "#b91c1c",
        "wuko-danger-fg": "#b91c1c",
        "wuko-success-fg": "#047857",
        "wuko-warning-fg": "#92400e",
        "wuko-gold": "#d4a017",
      },
    },
  },
  {
    name: "base",
    type: "registry:base",
    title: "Base",
    description:
      "Wuko base styles. Applies --wuko-bg and --wuko-heading to the body so consumer apps inherit Wuko's foundation at first paint. Install after the theme item.",
    author: REGISTRY_AUTHOR,
    css: {
      body: {
        "background-color": "var(--wuko-bg)",
        "color": "var(--wuko-heading)",
      },
    },
  },
  {
    name: "placeholder",
    type: "registry:ui",
    title: "Placeholder",
    description:
      "Phase 3 plumbing test for the Wuko registry. Real primitives ship from Phase 5 onward.",
    author: REGISTRY_AUTHOR,
    files: [
      {
        diskPath: "registry/default/ui/placeholder.tsx",
        registryPath: "ui/placeholder.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
  {
    name: "button",
    type: "registry:ui",
    title: "Button",
    description:
      "Triggers an action. Five style variants and three sizes, with loading and disabled states plus leading/trailing icon slots.",
    author: REGISTRY_AUTHOR,
    dependencies: ["class-variance-authority"],
    files: [
      {
        diskPath: "registry/default/ui/button.tsx",
        registryPath: "ui/button.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
  {
    name: "input",
    type: "registry:ui",
    title: "Input",
    description:
      "Single-line text field. Supports labels, hints, error states, leading/trailing icons, and any native input type. Three sizes, with disabled state and accessible label/error wiring.",
    author: REGISTRY_AUTHOR,
    dependencies: ["class-variance-authority"],
    files: [
      {
        diskPath: "registry/default/ui/input.tsx",
        registryPath: "ui/input.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
  {
    name: "card",
    type: "registry:ui",
    title: "Card",
    description:
      "A surface container with padding, a border, and a subtle background. The base for most layout compositions. Forwards className and all native div attributes.",
    author: REGISTRY_AUTHOR,
    files: [
      {
        diskPath: "registry/default/ui/card.tsx",
        registryPath: "ui/card.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
  {
    name: "modal",
    type: "registry:ui",
    title: "Modal",
    description:
      "An accessible dialog with focus trap, ESC-to-close, and overlay click handling. Built on Radix Dialog primitives. Controlled via open/onClose; supports title, optional description, footer slot, and children body.",
    author: REGISTRY_AUTHOR,
    dependencies: ["@radix-ui/react-dialog"],
    files: [
      {
        diskPath: "registry/default/ui/modal.tsx",
        registryPath: "ui/modal.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
  {
    name: "badge",
    type: "registry:ui",
    title: "Badge",
    description:
      "Compact status indicator. Six variants (default, teal, success, warning, danger, outline) using the role-token color set with tinted backgrounds and matching foreground text.",
    author: REGISTRY_AUTHOR,
    files: [
      {
        diskPath: "registry/default/ui/badge.tsx",
        registryPath: "ui/badge.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
  {
    name: "toggle",
    type: "registry:ui",
    title: "Toggle",
    description:
      "A two-state switch built on Radix Switch. Controlled via checked/onChange; supports sm and md sizes, optional inline label, and disabled state. For form-submitted boolean inputs, prefer Checkbox.",
    author: REGISTRY_AUTHOR,
    dependencies: ["@radix-ui/react-switch"],
    files: [
      {
        diskPath: "registry/default/ui/toggle.tsx",
        registryPath: "ui/toggle.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
  {
    name: "tooltip",
    type: "registry:ui",
    title: "Tooltip",
    description:
      "A short, hover- or focus-revealed label built on Radix Tooltip. Uncontrolled: Radix manages open/close internally; consumers pass content (the body) and children (the trigger). Each Tooltip is self-contained with its own Provider, so no app-root wrap is needed.",
    author: REGISTRY_AUTHOR,
    dependencies: ["@radix-ui/react-tooltip"],
    files: [
      {
        diskPath: "registry/default/ui/tooltip.tsx",
        registryPath: "ui/tooltip.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
  {
    name: "avatar",
    type: "registry:ui",
    title: "Avatar",
    description:
      "A user's photo, initials, or fallback character built on Radix Avatar: automatic image loading state with fallback during load and on error. Supports sm/md/lg sizes plus an optional status dot for online/away/offline presence.",
    author: REGISTRY_AUTHOR,
    dependencies: ["@radix-ui/react-avatar"],
    files: [
      {
        diskPath: "registry/default/ui/avatar.tsx",
        registryPath: "ui/avatar.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
  {
    name: "alert",
    type: "registry:ui",
    title: "Alert",
    description:
      "An inline message block with info, success, warning, and danger variants. Each variant ships an icon, role-token color, and an ARIA role appropriate to the urgency (status for info/success, alert for warning/danger). Optional title and close button.",
    author: REGISTRY_AUTHOR,
    dependencies: ["lucide-react"],
    files: [
      {
        diskPath: "registry/default/ui/alert.tsx",
        registryPath: "ui/alert.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
  {
    name: "tabs",
    type: "registry:ui",
    title: "Tabs",
    description:
      "A roving-focus tab list with full keyboard navigation (arrow keys, Home, End) and an animated active indicator. Built on Radix Tabs. Compound API: Tabs (Root), TabsList, TabsTrigger, TabsContent. Triggers support asChild for URL-driven tabs.",
    author: REGISTRY_AUTHOR,
    dependencies: ["@radix-ui/react-tabs"],
    files: [
      {
        diskPath: "registry/default/ui/tabs.tsx",
        registryPath: "ui/tabs.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
];

export function getRegistryItem(name: string): RegistrySource | undefined {
  return REGISTRY_ITEMS.find((item) => item.name === name);
}