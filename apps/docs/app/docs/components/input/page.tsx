export const metadata = {
  title: "Input — VexKit",
};

export default function InputPage() {
  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-vex-text-muted">
          Components
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-vex-heading">
          Input
        </h1>
        <p className="text-[15px] leading-relaxed text-vex-text">
          Text input with size variants, icon slots, hint and error states, and
          a built-in password reveal toggle.
        </p>
      </header>

      <p className="rounded-lg border border-dashed border-vex-border bg-vex-card/40 px-4 py-3 text-[13.5px] text-vex-text-muted">
        Coming soon — full content lands in Phase 6.
      </p>
    </>
  );
}
