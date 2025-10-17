import {
  type RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type UseOptimizedIframeProps = {
  previewUrl: string;
  containerRef: RefObject<HTMLElement | null>;
};

export const useOptimizedIframe = ({
  previewUrl,
  containerRef,
}: UseOptimizedIframeProps) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [shouldLoadIframe, setShouldLoadIframe] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Lazy load when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoadIframe(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [containerRef]);

  // Refresh iframe
  const onRefreshIframe = useCallback(() => {
    if (!iframeRef.current || isRefreshing) {
      return;
    }

    setIsRefreshing(true);

    try {
      const url = new URL(previewUrl, window.location.origin);
      url.searchParams.set("_refresh", Date.now().toString());
      iframeRef.current.src = url.toString();
      setTimeout(() => setIsRefreshing(false), 300);
    } catch (_error) {
      setTimeout(() => setIsRefreshing(false), 300);
    }
  }, [previewUrl, isRefreshing]);

  return {
    iframeRef,
    shouldLoadIframe,
    onRefreshIframe,
    isRefreshing,
  };
};
