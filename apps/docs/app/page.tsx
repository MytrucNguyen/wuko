import { Layers, Palette, Zap } from "lucide-react";

import { FeatureCard } from "@/components/marketing/feature-card";
import { Hero } from "@/components/marketing/hero";
import { PeekInsideKit } from "@/components/marketing/peek-inside-kit";

const FEATURES = [
  {
    icon: Palette,
    title: "Themeable",
    description:
      "Token-based design system. Override any color, radius, or spacing with CSS variables. No rebuild required.",
  },
  {
    icon: Layers,
    title: "Composable",
    description:
      "Headless primitives meet styled defaults. Use the parts you want, override the parts you don't.",
  },
  {
    icon: Zap,
    title: "Production-ready",
    description:
      "Tree-shakeable, typed, ARIA-correct. Ships with SSR support out of the box.",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="mx-auto -mt-8 max-w-6xl px-8 pb-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>
      <PeekInsideKit />
    </div>
  );
}
