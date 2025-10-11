import React from 'react';
import { cn } from '@/lib/utils';

function Card({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			className={cn(
				'bg-card relative w-full max-w-xs rounded-xl border dark:bg-transparent',
				'p-1.5 shadow-sm backdrop-blur-xl',
				className,
			)}
			{...props}
		/>
	);
}

function Header({
	className,
	children,
	glassEffect = true,
	...props
}: React.ComponentProps<'div'> & {
	glassEffect?: boolean;
}) {
	return (
		<div
			className={cn(
				'bg-muted/50 relative mb-4 rounded-xl border p-4 shadow',
				className,
			)}
			{...props}
		>
			{/* Top glass gradient */}
			{glassEffect && (
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-0 -z-10 h-48 rounded-[inherit]"
					style={{
						background:
							'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 40%, rgba(0,0,0,0) 100%)',
					}}
				/>
			)}
			{children}
		</div>
	);
}

function Plan({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			className={cn('mb-8 flex items-center justify-between', className)}
			{...props}
		/>
	);
}

function Description({ className, ...props }: React.ComponentProps<'p'>) {
	return (
		<p className={cn('text-muted-foreground text-xs', className)} {...props} />
	);
}

function PlanName({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			className={cn(
				"text-muted-foreground flex items-center gap-2 text-sm font-medium [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	);
}

function Badge({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span
			className={cn(
				'border-foreground/20 text-foreground/80 rounded-full border px-2 py-0.5 text-xs',
				className,
			)}
			{...props}
		/>
	);
}

function Price({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div className={cn('mb-3 flex items-end gap-1', className)} {...props} />
	);
}

function MainPrice({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span
			className={cn('text-3xl font-extrabold tracking-tight', className)}
			{...props}
		/>
	);
}

function Period({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span
			className={cn('text-foreground/80 pb-1 text-sm', className)}
			{...props}
		/>
	);
}

function OriginalPrice({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span
			className={cn(
				'text-muted-foreground mr-1 ml-auto text-lg line-through',
				className,
			)}
			{...props}
		/>
	);
}

function Body({ className, ...props }: React.ComponentProps<'div'>) {
	return <div className={cn('space-y-6 p-3', className)} {...props} />;
}

function List({ className, ...props }: React.ComponentProps<'ul'>) {
	return <ul className={cn('space-y-3', className)} {...props} />;
}

function ListItem({ className, ...props }: React.ComponentProps<'li'>) {
	return (
		<li
			className={cn(
				'text-muted-foreground flex items-start gap-3 text-sm',
				className,
			)}
			{...props}
		/>
	);
}

function Separator({
	children = 'Upgrade to access',
	className,
	...props
}: React.ComponentProps<'div'> & {
	children?: string;
	className?: string;
}) {
	return (
		<div
			className={cn(
				'text-muted-foreground flex items-center gap-3 text-sm',
				className,
			)}
			{...props}
		>
			<span className="bg-muted-foreground/40 h-[1px] flex-1" />
			<span className="text-muted-foreground shrink-0">{children}</span>
			<span className="bg-muted-foreground/40 h-[1px] flex-1" />
		</div>
	);
}

export {
	Card,
	Header,
	Description,
	Plan,
	PlanName,
	Badge,
	Price,
	MainPrice,
	Period,
	OriginalPrice,
	Body,
	List,
	ListItem,
	Separator,
};
