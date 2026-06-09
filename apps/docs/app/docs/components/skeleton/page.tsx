import { CodeBlock } from "@/components/docs/code-block";
import { H2 } from "@/components/docs/h2";
import { InstallationTabs } from "@/components/docs/installation-tabs";
import { Pager } from "@/components/docs/pager";
import { PropsTable } from "@/components/docs/props-table";
import { Skeleton } from "@/registry/default/ui/skeleton";

export const metadata = {
  title: "Skeleton | Wuko",
};

const USAGE_SAMPLE = `import { Skeleton } from "@/components/ui/skeleton";

export function Example() {
  return <Skeleton className="h-5 w-32" />;
}`;

const AVATAR_SAMPLE = `<div className="flex items-center gap-4">
  <Skeleton className="size-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-48" />
    <Skeleton className="h-4 w-32" />
  </div>
</div>`;

const CARD_SAMPLE = `<div className="flex flex-col gap-3 rounded-lg border border-wuko-border p-4">
  <Skeleton className="h-48 w-72 rounded-md" />
  <div className="space-y-2">
    <Skeleton className="h-5 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
  </div>
</div>`;

const TEXT_SAMPLE = `<div className="w-80 space-y-2">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-3/4" />
</div>`;

const FORM_SAMPLE = `<div className="w-80 space-y-4">
  <div className="space-y-2">
    <Skeleton className="h-3.5 w-16" />
    <Skeleton className="h-9 w-full rounded-md" />
  </div>
  <div className="space-y-2">
    <Skeleton className="h-3.5 w-20" />
    <Skeleton className="h-9 w-full rounded-md" />
  </div>
  <Skeleton className="h-9 w-24 rounded-md" />
</div>`;

const PROPS_ROWS = [
  {
    name: "className",
    type: "string",
    default: "—",
    description:
      "Tailwind classes for width, height, shape, and any overrides. Required to give the skeleton a visible size.",
  },
];

function ExampleSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center justify-center rounded-lg border border-wuko-border bg-wuko-card/40 p-12">
      {children}
    </div>
  );
}

export default function SkeletonPage() {
  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-wuko-text-muted">
          Components
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-wuko-heading">
          Skeleton
        </h1>
        <p className="text-[15px] leading-relaxed text-wuko-text">
          A placeholder block with a subtle pulse animation. Use to indicate
          loading state for content of any shape. Pass <code>className</code>{" "}
          with width, height, and rounded utilities to match the final content's
          silhouette.
        </p>
      </header>

      <H2 id="installation">Installation</H2>
      <InstallationTabs name="skeleton" />

      <H2 id="usage">Usage</H2>
      <ExampleSurface>
        <Skeleton className="h-5 w-32" />
      </ExampleSurface>
      <CodeBlock
        filename="components/example.tsx"
        lang="tsx"
        code={USAGE_SAMPLE}
      />

      <H2 id="avatar">Avatar with text</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        A circular avatar skeleton next to two text lines — a common pattern for
        user-list loading states.
      </p>
      <ExampleSurface>
        <div className="flex items-center gap-4">
          <Skeleton className="size-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={AVATAR_SAMPLE} />

      <H2 id="card">Card</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        An image placeholder with title and description lines. Matches the shape
        of a typical media card.
      </p>
      <ExampleSurface>
        <div className="flex flex-col gap-3 rounded-lg border border-wuko-border p-4">
          <Skeleton className="h-48 w-72 rounded-md" />
          <div className="space-y-2">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={CARD_SAMPLE} />

      <H2 id="text">Text</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Vary widths slightly between lines (e.g., last line at{" "}
        <code>w-3/4</code>) for a more natural paragraph silhouette.
      </p>
      <ExampleSurface>
        <div className="w-80 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={TEXT_SAMPLE} />

      <H2 id="form">Form</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Pair label-sized skeletons with input-sized blocks to preview a form
        layout before its data resolves.
      </p>
      <ExampleSurface>
        <div className="w-80 space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-3.5 w-16" />
            <Skeleton className="h-9 w-full rounded-md" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-3.5 w-20" />
            <Skeleton className="h-9 w-full rounded-md" />
          </div>
          <Skeleton className="h-9 w-24 rounded-md" />
        </div>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={FORM_SAMPLE} />

      <H2 id="props">Props</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Skeleton forwards all native <code>&lt;div&gt;</code> attributes.
      </p>
      <PropsTable rows={PROPS_ROWS} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-wuko-text">
        <li>
          Skeleton is a decorative placeholder. Screen readers should not
          announce it as content. Wrap the loading region with{" "}
          <code>aria-busy=&quot;true&quot;</code> and an <code>aria-label</code>{" "}
          describing what is loading.
        </li>
        <li>
          For long-running operations, consider adding visually-hidden{" "}
          <code>&quot;Loading...&quot;</code> text next to the skeletons so
          screen-reader users get an audible cue.
        </li>
        <li>
          The pulse animation respects <code>prefers-reduced-motion</code>{" "}
          automatically via Tailwind's <code>animate-pulse</code> utility.
        </li>
      </ul>

      <Pager
        prev={{ title: "Pagination", path: "/docs/components/pagination" }}
        next={{ title: "Table", path: "/docs/components/table" }}
      />
    </>
  );
}
