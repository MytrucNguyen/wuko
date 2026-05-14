# Wuko

Accessible React components, themed with one CSS file.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61dafb)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8)](https://tailwindcss.com)

Wuko is a small library of accessible React components distributed via the [shadcn registry](https://ui.shadcn.com/docs/registry) model. Components install as source code into your project, themed by a shared CSS variable layer.

## Install

```bash
npx shadcn@latest add https://wuko.dev/r/button.json
```

> The hosted registry is pending deployment. While that ships, you can run the docs app locally and install from `http://localhost:3000/r/button.json` instead.

## Quick start

```tsx
import { Button } from "@/components/ui/button";

export default function App() {
  return <Button>Click me</Button>;
}
```

## Local development

```bash
pnpm install
pnpm -F docs dev
```

Docs site at `http://localhost:3000`. For component sandbox stories, `pnpm -F docs storybook` runs on `http://localhost:6006`.

## Docs

Full component reference and theming guide will live at [wuko.dev](https://wuko.dev) once the deploy lands. Until then, `apps/docs/` is the canonical source.

## License

MIT © Mytruc Nguyen
