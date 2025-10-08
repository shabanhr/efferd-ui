import React from 'react';
import { cn } from '@/lib/utils';

export function BorderSeparator({
	children,
	className,
	...props
}: React.ComponentProps<'div'>) {
	return (
		<div className={cn('relative', className)} {...props}>
			<div
				className={cn(
					'pointer-events-none absolute top-0 left-1/2 w-screen -translate-x-1/2 border-t border-dashed',
					className,
				)}
				aria-hidden="true"
			/>
			{children}
		</div>
	);
}

export function DashedLines({
	width = 20,
	height = 50,
	x = 10,
	className,
	...props
}: React.ComponentProps<'svg'>) {
	const id = React.useId();

	return (
		<svg
			aria-hidden="true"
			className={cn('stroke-border pointer-events-none size-full', className)}
			{...props}
		>
			<pattern
				id={id}
				width={width}
				height={height}
				patternUnits="userSpaceOnUse"
				x={x}
			>
				<path d={`M.5 0 V${height}`} fill="none" strokeDasharray={2.5} />
			</pattern>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
		</svg>
	);
}
