'use client';
import React, { JSX, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import type { BundledLanguage, BundledTheme } from 'shiki/bundle/web';
import { codeToHast } from 'shiki/bundle/web';
import { BlockLoader } from './block-loader';
import { useTheme } from 'next-themes';

async function highlight(code: string, lang: BundledLanguage, theme: BundledTheme) {
	const hast = await codeToHast(code, { lang, theme });
	return toJsxRuntime(hast, { Fragment, jsx, jsxs }) as JSX.Element;
}

interface CodeBlockProps {
	code: string;
	className?: string;
	isFetching?: boolean;
}

const LANG = 'tsx';

export default function CodeBlock({ code, className, isFetching }: CodeBlockProps) {
	const [content, setContent] = useState<JSX.Element | null>(null);
	const { theme } = useTheme();

	useEffect(() => {
		let active = true;

		async function loadAndHighlight() {
			if (!code) {
				setContent(null); // ✅ Don't render "No code available" right away
				return;
			}

			try {
				const highlighted = await highlight(
					code,
					LANG,
					theme === 'dark' ? 'github-dark' : 'github-light',
				);
				if (active) setContent(highlighted);
			} catch (err) {
				console.error('Error loading code:', err);
				if (active) setContent(<pre>Error loading code</pre>);
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
				'[&_pre]:!bg-muted/50 dark:[&_pre]:!bg-muted/20 [&_code]:font-mono [&_code]:text-[13px]/2 [&_pre]:h-full [&_pre]:max-h-(--pre-max-height) [&_pre]:min-h-12 [&_pre]:overflow-auto [&_pre]:p-4 [&_pre]:leading-snug',
				className,
			)}
		>
			{isFetching ? <BlockLoader /> : content}
		</div>
	);
}
