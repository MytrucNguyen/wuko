import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-wuko-border bg-wuko-bg py-8 text-wuko-text-muted">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 lg:px-6">
        <div className="flex items-center gap-2.5">
          <Image
            src="/brand/wuko.png"
            alt=""
            width={36}
            height={36}
            className="rounded-md object-contain -translate-y-1"
            aria-hidden
          />
          <span className="text-[15px] font-extrabold tracking-tight text-wuko-heading">
            Wuko
          </span>
        </div>
        <span className="text-xs text-wuko-text-muted">
          MIT License · v0.1.0
        </span>
      </div>
    </footer>
  );
}
