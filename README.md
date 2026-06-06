# Wuko

A small library of accessible React components, themed with one CSS file.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61dafb)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8)](https://tailwindcss.com)

Wuko is distributed via the [shadcn registry](https://ui.shadcn.com/docs/registry) model. Components install as source code into your project. A shared CSS variable layer themes everything.

## Install

Add Wuko as a namespaced registry in your `components.json`:

```json
{
  "registries": {
    "@wuko": "https://www.wuko.dev/r/{name}.json"
  }
}
```

Install the theme tokens, then the base styles, then any components you need:

```bash
npx shadcn@latest add @wuko/theme
npx shadcn@latest add @wuko/base
npx shadcn@latest add @wuko/button
```

Order matters. `@wuko/theme` ships the design tokens. `@wuko/base` ships the body-level rules that consume them. Components depend on both.

> Prefer not to configure a namespace? Install directly from URLs: `npx shadcn@latest add https://www.wuko.dev/r/button.json`

## Quick start

```tsx
import { Button } from "@/components/ui/button";

export default function App() {
  return <Button variant="primary">Click me</Button>;
}
```

## What's included

- `@wuko/theme` — light and dark design tokens (`--wuko-bg`, `--wuko-accent`, etc.)
- `@wuko/base` — body-level styling that applies the tokens
- 11 components: alert, avatar, badge, button, card, input, modal, tabs, toggle, tooltip, placeholder

See [wuko.dev](https://wuko.dev) for the full component reference.

## Local development

```bash
pnpm install
pnpm -F docs dev
```

Docs site at `http://localhost:3000`. For component sandbox stories, `pnpm -F docs storybook` runs on `http://localhost:6006`.

## License

MIT © Mytruc Nguyen