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
          "-z-10 absolute inset-0 size-full bg-muted dark:bg-muted/20",
          "bg-[radial-gradient(color-mix(in_oklab,--theme(--color-muted-foreground/.80)30%,transparent)_1px,transparent_1px)]",
          "bg-[size:20px_20px]"
        )}
      />
      <PanelGroup direction="horizontal">
        <Panel
          className="min-h-svh bg-background lg:border-r lg:border-dashed"
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
