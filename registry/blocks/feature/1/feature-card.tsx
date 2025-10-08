import React from 'react';

// https://magicui.design/docs/components/grid-pattern
import { GridPattern } from '@/components/ui/grid-pattern';

import { cn } from '@/lib/utils';

type FeatureType = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	description: string;
};

type FeatureCardPorps = React.ComponentProps<'div'> & {
	feature: FeatureType;
};

export function FeatureCard({
	feature,
	className,
	...props
}: FeatureCardPorps) {
	return (
		<div
			className={cn('relative overflow-hidden border p-6', className)}
			{...props}
		>
			<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 size-full [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
				<GridPattern
					width={20}
					height={20}
					x={-12}
					y={4}
					className="stroke-foreground/20 absolute inset-0 size-full"
				/>
			</div>
			<feature.icon
				className="text-foreground/75 size-6"
				strokeWidth={1}
				aria-hidden
			/>
			<h3 className="mt-10 text-sm md:text-base">{feature.title}</h3>
			<p className="text-muted-foreground relative z-20 mt-2 text-xs font-light">
				{feature.description}
			</p>
		</div>
	);
}
