import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-6">
      <Image
        src="/images/vex.png"
        alt="Vex the kitsune mascot"
        width={144}
        height={144}
        priority
      />
      <h1 className="text-7xl font-bold text-vex-text">
        Vex<span className="text-vex-accent">Kit</span>
      </h1>
      <p className="text-xl text-vex-text-muted">
        A themeable React component library. Built for production.
      </p>

      <p className="text-sm text-vex-text-muted">
        Accessible. Composable. Tree-shakeable. Zero runtime CSS-in-JS.
      </p>

      <pre className="font-mono text-sm bg-vex-card border border-vex-border rounded-md px-4 py-2">
        <code>
          <span className="text-vex-text-muted">$</span>{" "}
          <span className="text-vex-accent">npm install vexkit</span>
        </code>
      </pre>
    </main>
  );
}
