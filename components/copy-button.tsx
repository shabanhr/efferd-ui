"use client";
import { Check, Copy } from "lucide-react";
import type React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";

type CopyButtonProps = React.ComponentProps<typeof Button> & {
  text: string;
};

export function CopyButton({
  variant = "ghost",
  size = "icon-sm",
  text,
  onClick,
  ...props
}: CopyButtonProps) {
  const { copied, copy } = useCopyToClipboard();

  const handleCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
    copy(text);
    onClick?.(event); // ✅ pass event to onClick
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            aria-label={copied ? "Copied" : "Copy to clipboard"}
            disabled={copied || props.disabled}
            onClick={handleCopy}
            size={size}
            variant={variant}
            {...props}
          >
            <div
              className={cn(
                "transition-all",
                copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
              )}
            >
              <Check
                aria-hidden="true"
                className="size-3.5 stroke-emerald-500"
              />
            </div>
            <div
              className={cn(
                "absolute transition-all",
                copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
              )}
            >
              <Copy aria-hidden="true" className="size-3.5" />
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-xs">
          Click to copy
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
