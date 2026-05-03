import { CodeBlock } from "@/components/docs/code-block";
import { H2 } from "@/components/docs/h2";
import { InfoCallout } from "@/components/docs/info-callout";
import { Pager } from "@/components/docs/pager";

export const metadata = {
  title: "Quick Start | VexKit",
};

const PROFILE_CARD_SAMPLE = `import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function ProfileCard() {
  return (
    <Card className="max-w-sm">
      <div className="flex items-center gap-3">
        <Avatar fallback="V" status="online" />
        <div>
          <div className="font-semibold">Vex Kitsune</div>
          <div className="text-sm opacity-60">vex@vexkit.dev</div>
        </div>
      </div>
      <Input
        label="Display name"
        defaultValue="Vex Kitsune"
        className="mt-4"
      />
      <Button variant="primary" className="mt-4">
        Save changes
      </Button>
    </Card>
  );
}`;

export default function QuickStartPage() {
  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-vex-text-muted">
          Getting Started
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-vex-heading">
          Quick Start
        </h1>
        <p className="text-[15px] leading-relaxed text-vex-text">
          Build a sign-in card in two minutes, composing VexKit&apos;s
          primitives the way they&apos;re meant to be composed.
        </p>
      </header>

      <H2 id="example">A signed-in card, end to end</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-vex-text">
        Once you&apos;ve installed each primitive via{" "}
        <code>shadcn add</code> (see Installation), this is the shape of the
        composition: a <code>Card</code> wrapping an <code>Avatar</code> with
        identity, an <code>Input</code> for the editable field, and a primary{" "}
        <code>Button</code> to commit the change.
      </p>
      <CodeBlock
        filename="components/profile-card.tsx"
        lang="tsx"
        code={PROFILE_CARD_SAMPLE}
      />

      <InfoCallout title="Illustrative for now">
        This sample previews the composition pattern. <code>Card</code>,{" "}
        <code>Input</code>, <code>Button</code>, and <code>Avatar</code> ship
        from Phase 5 onward. Install them via{" "}
        <code>shadcn add</code> as they land, and this exact code will run.
      </InfoCallout>

      <Pager
        prev={{ title: "Installation", path: "/docs/installation" }}
        next={{ title: "Button", path: "/docs/components/button" }}
      />
    </>
  );
}
