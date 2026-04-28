export const metadata = {
  title: "Tooltip — VexKit",
};

export default function TooltipPage() {
  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-vex-text-muted">
          Components
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-vex-heading">
          Tooltip
        </h1>
        <p className="text-[15px] leading-relaxed text-vex-text">
          A small hover and focus popover with collision-aware positioning and
          configurable open/close delays.
        </p>
      </header>

      <p className="rounded-lg border border-dashed border-vex-border bg-vex-card/40 px-4 py-3 text-[13.5px] text-vex-text-muted">
        Coming soon — full content lands in Phase 10.
      </p>
    </>
  );
}
