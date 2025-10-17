"use client";

import { useInView } from "motion/react";
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

type LazyImageProps = {
  alt: string;
  src: string;
  className?: string;
  AspectRatioClassName?: string;
  /** URL of the fallback image. default: undefined */
  fallback?: string;
  /** The ratio of the image. */
  ratio: number;
  /** Whether the image should only load when it is in view. default: false */
  inView?: boolean;
};

export function LazyImage({
  alt,
  src,
  ratio,
  fallback,
  inView = false,
  className,
  AspectRatioClassName,
}: LazyImageProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const imgRef = React.useRef<HTMLImageElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const [imgSrc, setImgSrc] = React.useState<string | undefined>(
    inView ? undefined : src
  );
  const [isLoading, setIsLoading] = React.useState(true);

  const handleError = () => {
    if (fallback) {
      setImgSrc(fallback);
    }
    setIsLoading(false);
  };

  const handleLoad = React.useCallback(() => {
    setIsLoading(false);
  }, []);

  // Load image only when inView
  React.useEffect(() => {
    if (inView && isInView && !imgSrc) {
      setImgSrc(src);
    }
  }, [inView, isInView, src, imgSrc]);

  // Handle cached images instantly
  React.useEffect(() => {
    if (imgRef.current?.complete) {
      handleLoad();
    }
  }, [handleLoad]);

  return (
    <AspectRatio
      className={cn(
        "relative size-full overflow-hidden rounded-lg border",
        AspectRatioClassName
      )}
      ratio={ratio}
      ref={ref}
    >
      {/* Skeleton / fallback */}
      <div
        className={cn(
          "absolute inset-0 animate-pulse rounded-md bg-accent/30 transition-opacity",
          isLoading ? "opacity-100" : "opacity-0"
        )}
        style={{
          willChange: "opacity",
          transitionTimingFunction: "ease-out",
        }}
      />

      {imgSrc && (
        // biome-ignore lint/nursery/useImageSize: dynamic image size
        <img
          alt={alt}
          className={cn(
            "size-full rounded-md object-cover transition-opacity",
            isLoading ? "opacity-0" : "opacity-100",
            className
          )}
          decoding="async"
          fetchPriority={inView ? "high" : "low"}
          loading="lazy"
          onError={handleError}
          onLoad={handleLoad}
          ref={imgRef}
          role="presentation" // Changed from "img" to "presentation" since it's decorative
          src={imgSrc}
          style={{
            transitionDuration: "1s ",
            willChange: "opacity",
            transitionTimingFunction: "ease-in-out",
          }}
        />
      )}
    </AspectRatio>
  );
}
