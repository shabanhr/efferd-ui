'use client';

import { cn } from '@/lib/utils';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { JSX, useEffect, useState } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import type { BundledLanguage, BundledTheme } from 'shiki/bundle/web';
import { codeToHast } from 'shiki/bundle/web';
import { BlockLoader } from './block-loader';
import { useTheme } from 'next-themes';
import React from 'react';

async function highlight(code: string, lang: BundledLanguage, theme: BundledTheme) {
	const hast = await codeToHast(code, {
		lang,
		theme,
	});

	return toJsxRuntime(hast, {
		Fragment,
		jsx,
		jsxs,
	}) as JSX.Element;
}

interface CodeBlockProps {
	code: string;
	className?: string;
}

const LANG = 'tsx';

export default function CodeBlock({ code, className }: CodeBlockProps) {
	const [content, setContent] = useState<JSX.Element | null>(null);
	const [loading, setLoading] = useState(true);
	const { theme } = useTheme();

	useEffect(() => {

		async function loadAndHighlight() {
			setLoading(true);
			try {
				if (code) {
					const highlighted = await highlight(
						code,
						LANG,
						theme === 'dark' ? 'github-dark' : 'github-light',
					);
					setContent(highlighted);
				} else {
					setContent(<pre>No code available</pre>);
				}
			} catch (err) {
				console.error('Error loading code:', err);
				setContent(<pre>Error loading code</pre>);
			} finally {
				setLoading(false);
			}
		}

		loadAndHighlight();
	}, [code, theme]);

	return (
		<div
			className={cn(
				'[&_pre]:!bg-muted/50 dark:[&_pre]:!bg-muted/20 [&_code]:font-mono [&_code]:text-[13px]/2 [&_pre]:h-full [&_pre]:max-h-(--pre-max-height) [&_pre]:min-h-12 [&_pre]:overflow-auto [&_pre]:p-4 [&_pre]:leading-snug',
				className,
			)}
		>
			{loading ? <BlockLoader /> : content}
		</div>
	);
}
