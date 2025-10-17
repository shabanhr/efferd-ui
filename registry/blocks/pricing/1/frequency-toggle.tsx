"use client";
import { motion } from "motion/react";
import type React from "react";
import { cn } from "@/lib/utils";

export type FREQUENCY = "monthly" | "yearly";

type FrequencyToggleProps = React.ComponentProps<"div"> & {
  frequency: FREQUENCY;
  setFrequency: React.Dispatch<React.SetStateAction<FREQUENCY>>;
  frequencies?: FREQUENCY[];
};

export function FrequencyToggle({
  frequency,
  setFrequency,
  frequencies = ["monthly", "yearly"],
  ...props
}: FrequencyToggleProps) {
  return (
    <div
      className={cn(
        "mx-auto flex w-fit rounded-full border bg-card p-1 shadow",
        props.className
      )}
      {...props}
    >
      {frequencies.map((freq) => (
        <button
          className="relative px-4 py-1 text-sm capitalize"
          key={freq}
          onClick={() => setFrequency(freq)}
        >
          <span className="relative z-10">{freq}</span>
          {frequency === freq && (
            <motion.span
              className="absolute inset-0 z-10 rounded-full bg-background mix-blend-difference dark:bg-foreground"
              layoutId="frequency"
              transition={{ type: "spring", duration: 0.4 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
