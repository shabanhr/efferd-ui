'use client';

import { cn } from '@/lib/utils';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { JSX, useLayoutEffect, useState } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import type { BundledLanguage, BundledTheme } from 'shiki/bundle/web';
import { codeToHast } from 'shiki/bundle/web';
import { BlockLoader } from './block-loader';
import { useTheme } from 'next-themes';

export async function highlight(
	code: string,
	lang: BundledLanguage,
	theme: BundledTheme,
) {
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
	code: string | null;
	lang: BundledLanguage;
	initial?: JSX.Element;
	preHighlighted?: JSX.Element | null;
	className?: string;
}

export default function CodeBlock({
	code,
	lang,
	initial,
	preHighlighted,
	className,
}: CodeBlockProps) {
	const [content, setContent] = useState<JSX.Element | null>(
		preHighlighted || initial || null,
	);
	const { theme } = useTheme();

	useLayoutEffect(() => {
		if (preHighlighted) {
			setContent(preHighlighted);
			return;
		}

		let isMounted = true;

		if (code) {
			highlight(
				code,
				lang,
				theme === 'dark' ? 'github-dark' : 'github-light',
			).then((result) => {
				if (isMounted) setContent(result);
			});
		} else {
			setContent(<pre>No code available</pre>);
		}

		return () => {
			isMounted = false;
		};
	}, [code, lang, preHighlighted, theme]);

	return (
		<div
			className={cn(
				'[&_pre]:!bg-muted/50 dark:[&_pre]:!bg-muted/20 [&_code]:font-mono [&_code]:text-[13px]/2 [&_pre]:h-full [&_pre]:max-h-(--pre-max-height) [&_pre]:min-h-12 [&_pre]:overflow-auto [&_pre]:p-4 [&_pre]:leading-snug',
				className,
			)}
		>
			{content ? content : <BlockLoader />}
		</div>
	);
}
