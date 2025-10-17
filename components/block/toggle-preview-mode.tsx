import { Code2, Eye } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { PreviewMode } from "@/types";

const MODE_OPTIONS = [
  { value: "preview", icon: Eye },
  { value: "code", icon: Code2 },
] as const;

type TogglePreviewModeProps = {
  name: string;
  previewMode: PreviewMode;
  setPreviewMode: (mode: PreviewMode) => void;
};

export function TogglePreviewMode({
  name,
  previewMode,
  setPreviewMode,
}: TogglePreviewModeProps) {
  return (
    <motion.div className="flex items-center" role="radiogroup">
      {MODE_OPTIONS.map((option) => (
        <button
          aria-label={`Switch to ${option.value} mode`}
          className={cn(
            "relative flex h-8 cursor-pointer items-center gap-1.5 rounded-sm px-2 text-sm transition-colors",
            previewMode === option.value
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
          key={option.value}
          onClick={() => setPreviewMode(option.value)}
          type="button"
        >
          <option.icon className="size-3.5" />
          <span className="hidden capitalize lg:block">{option.value}</span>
          {previewMode === option.value && (
            <motion.div
              className="absolute inset-0 rounded-sm border border-muted-foreground/40 border-dashed"
              layoutId={`${name}-current-preview-mode`}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.6,
              }}
            />
          )}
        </button>
      ))}
    </motion.div>
  );
}
