import { CodeBlock } from "@/components/docs/code-block";
import { H2 } from "@/components/docs/h2";
import { InstallationTabs } from "@/components/docs/installation-tabs";
import { Pager } from "@/components/docs/pager";
import { PropsTable } from "@/components/docs/props-table";
import { Badge } from "@/registry/default/ui/vex-badge";

export const metadata = {
  title: "Badge — VexKit",
};

const VARIANTS_SAMPLE = `<Badge>Default</Badge>
<Badge variant="teal">New</Badge>
<Badge variant="success">Live</Badge>
<Badge variant="warning">Beta</Badge>
<Badge variant="danger">Down</Badge>
<Badge variant="outline">Outline</Badge>`;

const PROPS_ROWS = [
  {
    name: "variant",
    type: '"default" | "teal" | "success" | "warning" | "danger" | "outline"',
    default: '"default"',
    description:
      "Color treatment. Tinted variants (teal, success, warning, danger) render the foreground role token at 15% background opacity and 30% border opacity. Default and outline use neutral surface tokens.",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description:
      "Badge content. Typically a short uppercase label; supports inline icons via the gap-1 flex layout.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Tailwind classes merged onto the root span.",
  },
  {
    name: "...rest",
    type: "HTMLAttributes<HTMLSpanElement>",
    default: "—",
    description:
      "All native span attributes are forwarded — id, aria-*, data-*, onClick, etc.",
  },
];

function ExampleSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 rounded-lg border border-vex-border bg-vex-card/40 p-6">
      {children}
    </div>
  );
}

export default function BadgePage() {
  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-vex-text-muted">
          Components
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-vex-heading">
          Badge
        </h1>
        <p className="text-[15px] leading-relaxed text-vex-text">
          Compact status indicator. Six variants — default, teal, success,
          warning, danger, outline — using the role-token color set with
          tinted backgrounds and matching foreground text.
        </p>
      </header>

      <H2 id="installation">Installation</H2>
      <InstallationTabs name="vex-badge" />

      <H2 id="variants">Variants</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-vex-text">
        Each tinted variant maps to a single role token: <code>teal</code> →{" "}
        <code>--vex-accent</code>, <code>success</code> →{" "}
        <code>--vex-success-fg</code>, <code>warning</code> →{" "}
        <code>--vex-warning-fg</code>, <code>danger</code> →{" "}
        <code>--vex-danger-fg</code>. Override the token to retheme the
        variant. Default and outline use neutral surface tokens (
        <code>--vex-card</code>, <code>--vex-text</code>,{" "}
        <code>--vex-border</code>), so they remain visually stable when
        consumers customize accent palettes.
      </p>
      <ExampleSurface>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Default</Badge>
          <Badge variant="teal">New</Badge>
          <Badge variant="success">Live</Badge>
          <Badge variant="warning">Beta</Badge>
          <Badge variant="danger">Down</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={VARIANTS_SAMPLE} />

      <H2 id="props">Props</H2>
      <PropsTable rows={PROPS_ROWS} />

      <Pager
        prev={{ title: "Avatar", path: "/docs/components/avatar" }}
        next={{ title: "Button", path: "/docs/components/button" }}
      />
    </>
  );
}
