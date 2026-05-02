import { CodeBlock } from "@/components/docs/code-block";
import { H2 } from "@/components/docs/h2";
import { InstallationTabs } from "@/components/docs/installation-tabs";
import { Pager } from "@/components/docs/pager";
import { PropsTable } from "@/components/docs/props-table";

import { AvatarSizesExample, AvatarStatusExample } from "./avatar-example";

export const metadata = {
  title: "Avatar — VexKit",
};

const SIZES_SAMPLE = `import { Avatar } from "@/components/ui/vex-avatar";

export function ProfileRow() {
  return (
    <div className="flex items-center gap-4">
      <Avatar fallback="VK" size="sm" />
      <Avatar fallback="VK" size="md" />
      <Avatar
        src="/vex.png"
        alt="Vex, the VexKit mascot"
        fallback="VK"
        size="lg"
      />
    </div>
  );
}`;

const STATUS_SAMPLE = `import { Avatar } from "@/components/ui/vex-avatar";

export function PresenceList() {
  return (
    <div className="flex items-center gap-4">
      <Avatar fallback="V" status="online" />
      <Avatar fallback="A" status="away" />
      <Avatar fallback="O" status="offline" />
    </div>
  );
}`;

const PROPS_ROWS = [
  {
    name: "src",
    type: "string",
    default: "—",
    description:
      "Image URL. When the image successfully loads, it's shown; until then (or on load error), the fallback renders.",
  },
  {
    name: "alt",
    type: "string",
    default: "—",
    description:
      "Image alt text. Required for accessibility when src is provided.",
  },
  {
    name: "fallback",
    type: "string",
    default: '"?"',
    description:
      "Initials or short text shown when no src is provided, while the image loads, or after a load error. Defaults to \"?\" when omitted.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description:
      "Avatar diameter. Three sizes: sm (28px), md (40px), lg (56px). Status dot scales proportionally.",
  },
  {
    name: "status",
    type: '"online" | "away" | "offline"',
    default: "—",
    description:
      "Optional presence indicator rendered as a colored dot at the bottom-right corner. Includes aria-label so screen readers announce the status.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description:
      "Tailwind classes merged onto the Avatar.Root span (the outermost element).",
  },
  {
    name: "...rest",
    type: "ComponentPropsWithoutRef<typeof Avatar.Root>",
    default: "—",
    description:
      "Forwarded to the underlying Radix Avatar.Root — id, aria-*, data-*, onClick, etc. Excludes children (constructed internally) and size (redefined as a string union).",
  },
];

function ExampleSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 rounded-lg border border-vex-border bg-vex-card/40 p-6">
      {children}
    </div>
  );
}

export default function AvatarPage() {
  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-vex-text-muted">
          Components
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-vex-heading">
          Avatar
        </h1>
        <p className="text-[15px] leading-relaxed text-vex-text">
          A user&apos;s photo, initials, or fallback character built on Radix
          Avatar — automatic image loading state with fallback during load
          and on error. Supports sm/md/lg sizes plus an optional status dot
          for online/away/offline presence.
        </p>
      </header>

      <H2 id="installation">Installation</H2>
      <InstallationTabs name="vex-avatar" />

      <H2 id="sizes">Sizes</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-vex-text">
        Three sizes — sm (28px), md (40px), lg (56px). Pick by container
        density: sm for table rows, md for inline mentions, lg for profile
        headers.
      </p>
      <ExampleSurface>
        <AvatarSizesExample />
      </ExampleSurface>
      <CodeBlock
        filename="components/profile-row.tsx"
        lang="tsx"
        code={SIZES_SAMPLE}
      />

      <H2 id="status">With status</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-vex-text">
        Pass <code>status</code> to render a presence dot at the bottom-right
        corner. Three states: online (green), away (amber), offline (muted).
        The dot includes an <code>aria-label</code> so screen readers announce
        the status alongside the avatar.
      </p>
      <ExampleSurface>
        <AvatarStatusExample />
      </ExampleSurface>
      <CodeBlock
        filename="components/presence-list.tsx"
        lang="tsx"
        code={STATUS_SAMPLE}
      />

      <H2 id="props">Props</H2>
      <PropsTable rows={PROPS_ROWS} />

      <Pager
        prev={{ title: "Alert", path: "/docs/components/alert" }}
        next={{ title: "Badge", path: "/docs/components/badge" }}
      />
    </>
  );
}
