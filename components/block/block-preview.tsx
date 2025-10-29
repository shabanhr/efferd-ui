import type React from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import type { PreviewMode } from "@/types";

const DEFAULTSIZE = 100;

type BlockPreviewProps = {
  previewMode: PreviewMode;
  children: React.ReactNode;
};

export function BlockPreview({ previewMode, children }: BlockPreviewProps) {
  const { isDesktop } = useMediaQuery();

  return (
    <div className={cn("relative", previewMode === "code" && "hidden")}>
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 size-full bg-muted/50 dark:bg-muted/20",
          "bg-[radial-gradient(color-mix(in_oklab,--theme(--color-foreground/.4)30%,transparent)_1px,transparent_1px)]",
          "bg-[size:24px_24px]"
        )}
      />
      <PanelGroup direction="horizontal">
        <Panel
          className="h-[var(--block-height)] bg-background lg:border-r lg:border-dashed"
          defaultSize={DEFAULTSIZE}
          minSize={30}
          order={1}
        >
          {children}
        </Panel>

        {isDesktop && (
          <>
            <PanelResizeHandle className="relative w-2">
              <div className="absolute inset-0 m-auto h-20 w-1 rounded-full bg-foreground/20 transition-[height,background] hover:h-24 hover:bg-foreground/30" />
            </PanelResizeHandle>
            <Panel
              className="-mr-[0.5px] ml-px"
              defaultSize={100 - DEFAULTSIZE}
              order={2}
            />
          </>
        )}
      </PanelGroup>
    </div>
  );
}
