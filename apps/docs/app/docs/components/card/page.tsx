import { CodeBlock } from "@/components/docs/code-block";
import { H2 } from "@/components/docs/h2";
import { InstallationTabs } from "@/components/docs/installation-tabs";
import { Pager } from "@/components/docs/pager";
import { PropsTable } from "@/components/docs/props-table";
import { Card } from "@/registry/default/ui/card";

export const metadata = {
  title: "Card | Wuko",
};

const USAGE_SAMPLE = `import { Card } from "@/components/ui/card";

export function Example() {
  return (
    <Card className="max-w-sm">
      <div className="text-sm font-semibold text-wuko-heading mb-1">
        Project usage
      </div>
      <p className="text-[13px] text-wuko-text-muted">
        8.2k of 10k tokens used this week.
      </p>
    </Card>
  );
}`;

const PROPS_ROWS = [
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Tailwind classes merged onto the root div.",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "Card contents.",
  },
  {
    name: "...rest",
    type: "HTMLAttributes<HTMLDivElement>",
    default: "—",
    description: "All native div attributes are forwarded to the element.",
  },
];

function ExampleSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 rounded-lg border border-wuko-border bg-wuko-card/40 p-6">
      {children}
    </div>
  );
}

export default function CardPage() {
  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-wuko-text-muted">
          Components
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-wuko-heading">
          Card
        </h1>
        <p className="text-[15px] leading-relaxed text-wuko-text">
          A surface container with padding, a border, and a subtle background.
          The base for most layout compositions.
        </p>
      </header>

      <H2 id="installation">Installation</H2>
      <InstallationTabs name="card" />

      <H2 id="usage">Usage</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Card is a plain styled <code>&lt;div&gt;</code>: no variants, no
        compound subcomponents. Wrap your content and customize via{" "}
        <code>className</code> when needed.
      </p>
      <ExampleSurface>
        <Card className="max-w-sm">
          <div className="text-sm font-semibold text-wuko-heading mb-1">
            Project usage
          </div>
          <p className="text-[13px] text-wuko-text-muted">
            8.2k of 10k tokens used this week.
          </p>
        </Card>
      </ExampleSurface>
      <CodeBlock
        filename="components/example.tsx"
        lang="tsx"
        code={USAGE_SAMPLE}
      />

      <H2 id="props">Props</H2>
      <PropsTable rows={PROPS_ROWS} />

      <Pager
        prev={{ title: "Button", path: "/docs/components/button" }}
        next={{ title: "Checkbox", path: "/docs/components/checkbox" }}
      />
    </>
  );
}
