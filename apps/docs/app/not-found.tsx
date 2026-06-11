import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Page not found · Wuko",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 p-8 text-center">
      <Image
        src="/brand/error.png"
        alt=""
        width={500}
        height={500}
        priority
        className="opacity-90"
      />
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-wuko-heading">
          Page not found
        </h1>
        <p className="max-w-md text-sm text-wuko-text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <div className="flex gap-3">
        <Link
          href="/"
          className="inline-flex h-9 items-center justify-center rounded-md bg-wuko-accent px-4 text-sm font-semibold text-wuko-bg transition-colors hover:bg-wuko-accent-hover"
        >
          Go home
        </Link>
        <Link
          href="/docs/components"
          className="inline-flex h-9 items-center justify-center rounded-md border border-wuko-border px-4 text-sm font-semibold text-wuko-heading transition-colors hover:bg-wuko-card"
        >
          Browse components
        </Link>
      </div>
    </main>
  );
}