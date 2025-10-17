"use client";
import type React from "react";
import { cn } from "@/lib/utils";

type IframeRendererProps = {
  name: string;
  src: string;
  ariaLabel?: string;
  iframeRef: React.RefObject<HTMLIFrameElement | null>;
  className?: string;
};

export function IframeRenderer({
  name,
  src,
  ariaLabel,
  iframeRef,
  className,
}: IframeRendererProps) {
  return (
    <iframe
      allowFullScreen={true}
      aria-label={ariaLabel || `${name}-preview`}
      className={cn("absolute inset-0 size-full", className)}
      id={name}
      key={`${name}-iframe`}
      loading={"lazy"}
      ref={iframeRef}
      sandbox="allow-scripts allow-same-origin"
      src={src}
      title={name}
    />
  );
}
