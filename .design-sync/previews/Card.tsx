// Owned preview for Card. The generated wrapper imports card.stories, whose
// top-level `import Image from "next/image"` throws `process is not defined`
// in the standalone preview (next/image reads process.env at module scope),
// blanking the whole card. This re-implements the three statically-renderable
// stories (Default, Stat, WithAction) with the same JSX, importing Card from
// the shipped bundle (the @/registry alias is shimmed to window.Wuko). The
// WithImage story is a next/image demo (1.5MB asset, not a Card feature) and
// is intentionally omitted — see cfg.overrides.Card.skip and NOTES.md.
import * as React from "react";
// Relative import (not the @/ alias): esbuild's tsconfig auto-discovery doesn't
// reach .design-sync/previews/, so @/ won't resolve here. The resolved path
// contains /registry/default/ui/, so cfg.storyImports.shim redirects it to
// window.Wuko.Card (the shipped bundle) — same as the stories.
import { Card } from "../../apps/docs/registry/default/ui/card";

export const Default = () => (
  <Card className="max-w-sm">
    <div className="mb-1 text-sm font-semibold text-wuko-heading">
      Project usage
    </div>
    <p className="text-[13px] text-wuko-text-muted">
      8.2k of 10k tokens used this week.
    </p>
  </Card>
);

export const Stat = () => (
  <Card className="max-w-xs">
    <div className="text-[11px] font-semibold uppercase tracking-wider text-wuko-text-muted">
      Monthly active users
    </div>
    <div className="mt-1 text-3xl font-extrabold text-wuko-heading">12,847</div>
    <div className="mt-1 text-[12px] text-wuko-text-muted">
      +4.2% from last month
    </div>
  </Card>
);

export const WithAction = () => (
  <Card className="max-w-sm">
    <div className="mb-1 text-sm font-semibold text-wuko-heading">
      Storage almost full
    </div>
    <p className="mb-3 text-[13px] text-wuko-text-muted">
      You have used 92% of available storage.
    </p>
    <button
      type="button"
      className="text-[13px] font-medium text-wuko-heading hover:underline"
    >
      Upgrade plan
    </button>
  </Card>
);
