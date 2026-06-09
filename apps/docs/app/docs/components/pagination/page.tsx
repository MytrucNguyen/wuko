import { CodeBlock } from "@/components/docs/code-block";
import { H2 } from "@/components/docs/h2";
import { InstallationTabs } from "@/components/docs/installation-tabs";
import { Pager } from "@/components/docs/pager";
import { PropsTable } from "@/components/docs/props-table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/default/ui/pagination";

export const metadata = {
  title: "Pagination | Wuko",
};

const USAGE_SAMPLE = `import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function Example() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`;

const STRUCTURE_SAMPLE = `Pagination
└── PaginationContent
    ├── PaginationItem
    │   └── PaginationPrevious
    ├── PaginationItem
    │   └── PaginationLink
    ├── PaginationItem
    │   └── PaginationEllipsis
    └── PaginationItem
        └── PaginationNext`;

const SIMPLE_SAMPLE = `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        1
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">4</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">5</PaginationLink>
    </PaginationItem>
  </PaginationContent>
</Pagination>`;

const ICONS_ONLY_SAMPLE = `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`;

const NEXTJS_SAMPLE = `import Link from "next/link";

// Update PaginationLink in pagination.tsx
type PaginationLinkProps = {
  isActive?: boolean;
  size?: "default" | "sm" | "icon";
} & React.ComponentProps<typeof Link>;

const PaginationLink = ({ className, isActive, size, ...props }: PaginationLinkProps) => (
  <Link
    aria-current={isActive ? "page" : undefined}
    className={...}
    {...props}
  />
);`;

const SUB_COMPONENTS_ROWS = [
  {
    name: "Pagination",
    type: "ComponentProps<\"nav\">",
    default: "—",
    description:
      "The root <nav> element with role=\"navigation\" and aria-label=\"pagination\". Centers content horizontally.",
  },
  {
    name: "PaginationContent",
    type: "ComponentProps<\"ul\">",
    default: "—",
    description:
      "An unordered list that arranges items horizontally with a small gap. Renders as <ul>.",
  },
  {
    name: "PaginationItem",
    type: "ComponentProps<\"li\">",
    default: "—",
    description: "A single list item wrapping a Link, Previous, Next, or Ellipsis.",
  },
  {
    name: "PaginationLink",
    type: "{ isActive?: boolean; size?: \"default\" | \"sm\" | \"icon\" } & ComponentProps<\"a\">",
    default: "size=\"icon\"",
    description:
      "An anchor link representing one page. Pass isActive to mark the current page (adds aria-current=\"page\" and active styling).",
  },
  {
    name: "PaginationPrevious",
    type: "ComponentProps<typeof PaginationLink>",
    default: "—",
    description:
      "Previous-page link with chevron icon and \"Previous\" text. Accepts href and other anchor props.",
  },
  {
    name: "PaginationNext",
    type: "ComponentProps<typeof PaginationLink>",
    default: "—",
    description:
      "Next-page link with chevron icon and \"Next\" text. Accepts href and other anchor props.",
  },
  {
    name: "PaginationEllipsis",
    type: "ComponentProps<\"span\">",
    default: "—",
    description:
      "A non-interactive ellipsis indicating gaps in the page sequence. Includes screen-reader text \"More pages\".",
  },
];

function ExampleSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center justify-center rounded-lg border border-wuko-border bg-wuko-card/40 p-12">
      {children}
    </div>
  );
}

export default function PaginationPage() {
  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-wuko-text-muted">
          Components
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-wuko-heading">
          Pagination
        </h1>
        <p className="text-[15px] leading-relaxed text-wuko-text">
          Page navigation with previous, next, page-number, and ellipsis
          sub-components. A standalone primitive: pair with any list, grid, or
          data view that needs page-by-page browsing. Renders semantic{" "}
          <code>&lt;nav&gt;</code>, <code>&lt;ul&gt;</code>, and{" "}
          <code>&lt;a&gt;</code> elements for full keyboard and screen-reader
          support.
        </p>
      </header>

      <H2 id="installation">Installation</H2>
      <InstallationTabs name="pagination" />

      <H2 id="usage">Usage</H2>
      <ExampleSurface>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </ExampleSurface>
      <CodeBlock
        filename="components/example.tsx"
        lang="tsx"
        code={USAGE_SAMPLE}
      />

      <H2 id="composition">Composition</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Use the following composition to build a <code>Pagination</code>.
      </p>
      <CodeBlock lang="text" code={STRUCTURE_SAMPLE} />

      <H2 id="simple">Simple</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        A pagination with only page numbers — no previous/next buttons, no
        ellipsis. Useful when the total page count is small enough to show all
        of them.
      </p>
      <ExampleSurface>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={SIMPLE_SAMPLE} />

      <H2 id="icons-only">Icons only</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Use only the previous and next buttons without page numbers. Useful in
        data tables paired with a rows-per-page selector, or when the current
        page is communicated elsewhere.
      </p>
      <ExampleSurface>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={ICONS_ONLY_SAMPLE} />

      <H2 id="nextjs">Next.js</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        By default <code>PaginationLink</code> renders an <code>&lt;a&gt;</code>{" "}
        tag. To use the Next.js <code>Link</code> component for client-side
        navigation, update <code>pagination.tsx</code> to swap the underlying
        element.
      </p>
      <CodeBlock lang="tsx" code={NEXTJS_SAMPLE} />

      <H2 id="props">Sub-components</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Every sub-component forwards <code>className</code> and all native
        attributes for its underlying element.
      </p>
      <PropsTable rows={SUB_COMPONENTS_ROWS} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-wuko-text">
        <li>
          Renders a native <code>&lt;nav&gt;</code> with{" "}
          <code>role=&quot;navigation&quot;</code> and{" "}
          <code>aria-label=&quot;pagination&quot;</code> so screen readers
          announce it as a navigation landmark.
        </li>
        <li>
          The current page link uses <code>aria-current=&quot;page&quot;</code>,
          which screen readers announce when the user reaches it. Visually it
          gets a bordered, filled style to match.
        </li>
        <li>
          <code>PaginationPrevious</code> and <code>PaginationNext</code> have
          descriptive <code>aria-label</code>s (&quot;Go to previous
          page&quot;, &quot;Go to next page&quot;) for screen-reader-only
          users.
        </li>
        <li>
          <code>PaginationEllipsis</code> renders <code>aria-hidden</code> for
          its icon and includes screen-reader-only text &quot;More
          pages&quot; to convey the gap without visual noise.
        </li>
        <li>
          All links are real <code>&lt;a&gt;</code> tags. Keyboard navigation
          (Tab, Shift+Tab, Enter) works without extra wiring.
        </li>
      </ul>

      <Pager
        prev={{ title: "Modal", path: "/docs/components/modal" }}
        next={{ title: "Table", path: "/docs/components/table" }}
      />
    </>
  );
}