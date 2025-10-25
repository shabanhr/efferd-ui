"use client";
import {
  Cpu,
  Fingerprint,
  Pencil,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";
import { FeatureCard } from "./feature-card";

export default function Page() {
  return (
    <section className="min-h-screen place-content-center">
      <div className="mx-auto w-full max-w-5xl space-y-8 p-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-medium text-2xl md:text-4xl lg:text-5xl">
            Power. Speed. Control.
          </h2>
          <p className="mt-4 text-balance text-muted-foreground text-sm md:text-base">
            Everything you need to build fast, secure, scalable apps.
          </p>
        </div>

        <div className="grid grid-cols-1 divide-x divide-y border-t border-l sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              className="last:border-r last:border-b"
              feature={feature}
              key={feature.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Faaast",
    icon: Zap,
    description: "It supports an entire helping developers and innovate.",
  },
  {
    title: "Powerful",
    icon: Cpu,
    description: "It supports an entire helping developers and businesses.",
  },
  {
    title: "Security",
    icon: Fingerprint,
    description: "It supports an helping developers businesses.",
  },
  {
    title: "Customization",
    icon: Pencil,
    description: "It supports helping developers and businesses innovate.",
  },
  {
    title: "Control",
    icon: Settings2,
    description: "It supports helping developers and businesses innovate.",
  },
  {
    title: "Built for AI",
    icon: Sparkles,
    description: "It supports helping developers and businesses innovate.",
  },
];
