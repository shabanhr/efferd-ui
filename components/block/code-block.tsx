"use client";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { useTheme } from "next-themes";
import { type JSX, useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import type { BundledLanguage, BundledTheme } from "shiki/bundle/web";
import { codeToHast } from "shiki/bundle/web";
import { cn } from "@/lib/utils";
import { BlockLoader } from "./block-loader";

async function highlight(
  code: string,
  lang: BundledLanguage,
  theme: BundledTheme
) {
  const hast = await codeToHast(code, { lang, theme });
  return toJsxRuntime(hast, { Fragment, jsx, jsxs }) as JSX.Element;
}

type CodeBlockProps = {
  code: string;
  className?: string;
  isFetching?: boolean;
};

const LANG = "tsx";

async function getHighlightedCode(code: string, theme: string) {
  if (!code) {
    return null;
  }

  try {
    return await highlight(
      code,
      LANG,
      theme === "dark" ? "github-dark" : "github-light"
    );
  } catch (_err) {
    return <pre>Error loading code</pre>;
  }
}

export default function CodeBlock(props: CodeBlockProps) {
  const { code, className, isFetching } = props;
  const [content, setContent] = useState<JSX.Element | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    let active = true;

    async function loadAndHighlight() {
      const highlighted = await getHighlightedCode(code, theme || "light");
      if (active) {
        setContent(highlighted);
      }
    }

    loadAndHighlight();
    return () => {
      active = false;
    };
  }, [code, theme]);

  return (
    <div
      className={cn(
        "[&_pre]:!bg-muted/50 dark:[&_pre]:!bg-muted/20 [&_code]:font-mono [&_code]:text-[13px]/2 [&_pre]:h-full [&_pre]:max-h-(--pre-max-height) [&_pre]:min-h-12 [&_pre]:overflow-auto [&_pre]:p-4 [&_pre]:leading-snug",
        className
      )}
    >
      {isFetching ? <BlockLoader /> : content}
    </div>
  );
}
