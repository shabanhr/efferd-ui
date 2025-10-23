import { sendGAEvent } from "@next/third-parties/google";
import { Check } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";
import { ShadcnIcon } from "../icons";

type CopyCliButtonProps = {
  name: string;
  registryUrl: string;
};

export function CopyCliButton({ name, registryUrl }: CopyCliButtonProps) {
  const { copied, copy } = useCopyToClipboard();

  const handleCopy = () => {
    // copy(`pnpm dlx shadcn@latest add @efferd/${name}`);
    copy(`pnpm dlx shadcn@latest add ${registryUrl}`);
    sendGAEvent("event", "copy_cli", {
      block_name: name,
    });
  };

  return (
    <button
      className="flex h-8 items-center gap-2 rounded-sm border border-dashed px-2 transition-colors hover:bg-accent/80"
      onClick={handleCopy}
      type="button"
    >
      <div
        className={cn(
          "transition-all",
          copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}
      >
        <Check aria-hidden="true" className="size-3.5 stroke-emerald-500" />
      </div>
      <div
        className={cn(
          "absolute transition-all",
          copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
        )}
      >
        <ShadcnIcon aria-hidden="true" className="size-3.5" />
      </div>
      <span className="hidden font-mono text-muted-foreground text-sm md:block">
        @efferd/{name}
      </span>
    </button>
  );
}
