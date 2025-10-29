"use client";

import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { useTheme } from "next-themes";
import { type JSX, useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import type { BundledLanguage, BundledTheme } from "shiki/bundle/web";
import { codeToHast } from "shiki/bundle/web";
import { cn } from "@/lib/utils";

const LANG: BundledLanguage = "tsx";

async function highlight(
  code: string,
  lang: BundledLanguage,
  theme: BundledTheme
) {
  const hast = await codeToHast(code, { lang, theme });
  return toJsxRuntime(hast, { Fragment, jsx, jsxs }) as JSX.Element;
}

async function getHighlightedCode(code: string, theme: string) {
  if (!code?.trim()) {
    return <pre>{"// No code"}</pre>;
  }
  try {
    return await highlight(
      code,
      LANG,
      theme === "dark" ? "github-dark" : "github-light"
    );
  } catch {
    return <pre>{"// Failed to highlight"}</pre>;
  }
}

type CodeBlockProps = {
  code: string;
  className?: string;
  isFetching?: boolean;
};

export default function CodeBlock({ code, className }: CodeBlockProps) {
  const { theme = "light" } = useTheme();
  const [content, setContent] = useState<JSX.Element | null>(null);

  // Load syntax highlighting asynchronously
  useEffect(() => {
    let cancelled = false;

    async function highlightCode() {
      const highlighted = await getHighlightedCode(code, theme);
      if (!cancelled) {
        setContent(highlighted);
      }
    }

    highlightCode();
    return () => {
      cancelled = true;
    };
  }, [code, theme]);

  // First render: show plain code instantly
  // Then replace with highlighted content once ready
  return (
    <div
      className={cn(
        "[&_pre]:!bg-muted/50 dark:[&_pre]:!bg-muted/20",
        "[&_code]:font-mono [&_code]:text-[13px]/2",
        "[&_pre]:h-full [&_pre]:max-h-(--pre-max-height) [&_pre]:min-h-12",
        "[&_pre]:overflow-auto [&_pre]:p-4 [&_pre]:leading-snug",
        className
      )}
    >
      {content ?? (
        <pre>
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}
