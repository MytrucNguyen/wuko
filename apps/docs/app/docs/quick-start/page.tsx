export const metadata = {
  title: "Quick Start — VexKit",
};

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
          Build a sign-in card in two minutes — composing VexKit&apos;s
          primitives the way they&apos;re meant to be composed.
        </p>
      </header>

      <p className="rounded-lg border border-dashed border-vex-border bg-vex-card/40 px-4 py-3 text-[13.5px] text-vex-text-muted">
        Coming soon — full content lands in Phase 3.
      </p>
    </>
  );
}
