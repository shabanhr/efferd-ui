'use client';
import React from 'react';
import { cn } from '@/lib/utils';

interface IframeRendererProps {
	name: string;
	src: string;
	ariaLabel?: string;
	iframeRef: React.RefObject<HTMLIFrameElement | null>;
	className?: string;
}

export function IframeRenderer({
	name,
	src,
	ariaLabel,
	iframeRef,
	className,
}: IframeRendererProps) {
	return (
		<iframe
			id={name}
			key={`${name}-iframe`}
			loading={'lazy'}
			allowFullScreen={true}
			ref={iframeRef}
			title={name}
			aria-label={ariaLabel || `${name}-preview`}
			className={cn('absolute inset-0 size-full', className)}
			src={src}
			sandbox="allow-scripts allow-same-origin"
		/>
	);
}
