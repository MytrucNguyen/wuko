# Building with Wuko

Wuko is an accessible React component library themed entirely through CSS variables. Build real UIs by composing the exported components (`Button`, `Card`, `Alert`, `Input`, `Select`, `DataTable`, `Tabs`, `Modal`, `DropdownMenu`, `Tooltip`, `Avatar`, `Badge`, `Checkbox`, `Toggle`, `Table`, `Pagination`, `Skeleton`) and styling your own layout with Tailwind utilities on the `--wuko-*` palette.

## Setup — no provider, just a theme attribute

Wuko needs **no theme provider, no context, no wrapper**. Components read their colors from CSS variables, so the only setup is:

1. **Load the stylesheet** (`styles.css`) once at the app root — it carries the tokens, fonts, and component styles.
2. **Pick the theme with a `data-theme` attribute** on a root element (usually `<html>`):
   - no attribute / unset → **dark** (the default; dark tokens live on `:root`)
   - `data-theme="light"` → light
   Set it on any ancestor to theme a subtree.

Fonts are **Inter** (`font-sans`) and **JetBrains Mono** (`font-mono`), loaded by the stylesheet. Page background and base text come from the stylesheet's `html, body` rule — build on `bg-wuko-bg`.

## Styling idiom — Tailwind v4 + the `wuko-*` palette

Components style themselves; you pass **props** for their variants (e.g. `<Button variant="primary" size="md">`, `<Alert variant="warning">`, `<Badge variant="success">`). For your **own** layout and surfaces, write Tailwind v4 utility classes using Wuko's role-token colors — never hardcode hex. The palette (each is a real `--wuko-*` token; see THEMING.md for the full table):

| Utility family | Names | Use for |
|---|---|---|
| Surface bg | `bg-wuko-bg`, `bg-wuko-card` | page background, card/panel surfaces |
| Accent / danger bg | `bg-wuko-accent`, `bg-wuko-danger` | primary CTA, destructive surfaces |
| Text | `text-wuko-heading`, `text-wuko-text`, `text-wuko-text-muted`, `text-wuko-accent` | titles, body, secondary, links/emphasis |
| Status text | `text-wuko-success-fg`, `text-wuko-warning-fg`, `text-wuko-danger-fg` | inline status / validation messages |
| Borders | `border-wuko-border`, `border-wuko-accent`, `border-wuko-danger-fg` | dividers, focus, error outlines |
| Type | `font-sans`, `font-mono` | Inter body, JetBrains Mono code |

Standard Tailwind utilities (`flex`, `grid`, `gap-*`, `rounded-*`, `p-*`, `text-sm` …) work as usual; only the **colors** come from the `wuko-*` tokens so light/dark theming stays automatic.

## Where the truth lives

- `styles.css` and its imports — the compiled tokens + utilities (the source of which class names and `--wuko-*` values exist).
- `guidelines/THEMING.md` — the canonical `--wuko-*` role-token table (dark/light values and intended use).
- Each component's `<Name>.d.ts` (its `<Name>Props` API) and `<Name>.prompt.md` (usage) — read these before composing a component.

## Idiomatic example

A status card — library components for the controls, Wuko utilities for your own layout glue:

```tsx
<Card className="max-w-sm">
  <div className="flex items-center justify-between">
    <h3 className="text-sm font-semibold text-wuko-heading">Production</h3>
    <Badge variant="success">Healthy</Badge>
  </div>
  <p className="mt-1 text-[13px] text-wuko-text-muted">
    Last deploy 4m ago · 142 tests passed
  </p>
  <div className="mt-4 flex gap-2">
    <Button variant="primary" size="sm">Deploy</Button>
    <Button variant="ghost" size="sm">View logs</Button>
  </div>
</Card>
```
