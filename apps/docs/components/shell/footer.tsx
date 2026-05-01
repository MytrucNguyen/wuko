import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-vex-border bg-vex-bg py-8 text-vex-text-muted">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 lg:px-6">
        <div className="flex items-center gap-2.5">
          <Image
            src="/vex.png"
            alt=""
            width={36}
            height={36}
            className="rounded-md object-contain -translate-y-1"
            aria-hidden
          />
          <span className="text-[15px] font-extrabold tracking-tight text-vex-heading">
            Vex<span className="text-vex-accent">Kit</span>
          </span>
        </div>
        <span className="text-xs text-vex-text-muted">
          MIT License · v0.1.0
        </span>
      </div>
    </footer>
  );
}
