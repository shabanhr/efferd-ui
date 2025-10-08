'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export type FREQUENCY = 'monthly' | 'yearly';

type FrequencyToggleProps = React.ComponentProps<'div'> & {
	frequency: FREQUENCY;
	setFrequency: React.Dispatch<React.SetStateAction<FREQUENCY>>;
	frequencies?: FREQUENCY[];
};

export function FrequencyToggle({
	frequency,
	setFrequency,
	frequencies = ['monthly', 'yearly'],
	...props
}: FrequencyToggleProps) {
	return (
		<div
			className={cn(
				'bg-card mx-auto flex w-fit rounded-full border p-1 shadow',
				props.className,
			)}
			{...props}
		>
			{frequencies.map((freq) => (
				<button
					key={freq}
					onClick={() => setFrequency(freq)}
					className="relative px-4 py-1 text-sm capitalize"
				>
					<span className="relative z-10">{freq}</span>
					{frequency === freq && (
						<motion.span
							layoutId="frequency"
							transition={{ type: 'spring', duration: 0.4 }}
							className="bg-background dark:bg-foreground absolute inset-0 z-10 rounded-full mix-blend-difference"
						/>
					)}
				</button>
			))}
		</div>
	);
}
