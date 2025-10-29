"use client";

import React from "react";
import { CodeView } from "@/components/block/code-view";
import { BorderSeparator } from "@/components/sheard";
import { useOptimizedIframe } from "@/hooks/use-optimized-iframe";
import type { Block, PreviewMode } from "@/types";
import { BlockLoader } from "./block-loader";
import { BlockPreview } from "./block-preview";
import { CopyCliButton } from "./copy-cli-button";
import { IframeRenderer } from "./iframe-renderer";
import { OpenInNewTabButton } from "./open-in-new-tab-button";
import { OpenInV0Button } from "./open-in-v0";
import { RefreshButton } from "./refresh-button";
import { TogglePreviewMode } from "./toggle-preview-mode";

type BlockPreviewProps = {
  block: Block;
};

export function BlockBox({ block }: BlockPreviewProps) {
  const [previewMode, setPreviewMode] = React.useState<PreviewMode>("preview");
  const iframeContainerRef = React.useRef<HTMLDivElement>(null);
  const [registryUrl, setRegistryUrl] = React.useState<string>("");

  const { name, files, height } = block;
  const previewLink = `/view/${name}`;

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(`/r/${name}.json`, window.location.href).toString();
      setRegistryUrl(url);
    }
  }, [name]);

  const { iframeRef, shouldLoadIframe, onRefreshIframe, isRefreshing } =
    useOptimizedIframe({
      previewUrl: previewLink,
      containerRef: iframeContainerRef,
    });

  return (
    <div
      className="border-b border-dashed"
      id={name}
      style={{ "--block-height": height } as React.CSSProperties}
    >
      {/* Toolbar */}
      <div className="relative flex items-center justify-between bg-card px-4 py-1.5">
        <BorderSeparator className="-top-px z-1" />

        <div className="flex items-center gap-3">
          <TogglePreviewMode
            name={name}
            previewMode={previewMode}
            setPreviewMode={setPreviewMode}
          />
          <div className="h-5 border-r border-dashed" />
          <RefreshButton
            handleRefresh={onRefreshIframe}
            isRefreshing={isRefreshing}
          />
        </div>

        <div className="flex items-center gap-3">
          <CopyCliButton name={name} />
          <div className="h-5 border-r border-dashed" />
          <OpenInV0Button name={name} registryUrl={registryUrl} />
          <OpenInNewTabButton previewLink={previewLink} />
        </div>

        <BorderSeparator className="-bottom-px z-1" />
      </div>

      {/* Preview */}
      <BlockPreview previewMode={previewMode}>
        <div className="relative h-full" ref={iframeContainerRef}>
          {shouldLoadIframe ? (
            <IframeRenderer
              ariaLabel={`${name}-block-preview`}
              iframeRef={iframeRef}
              name={name}
              src={previewLink}
            />
          ) : (
            <BlockLoader />
          )}
        </div>
      </BlockPreview>

      {/* Code View */}
      {previewMode === "code" && <CodeView files={files} name={name} />}
    </div>
  );
}
