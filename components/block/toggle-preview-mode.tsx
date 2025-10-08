import React from 'react';
import { motion } from 'motion/react';
import { Code2, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PreviewMode } from '@/types';

const MODE_OPTIONS = [
	{ value: 'preview', icon: Eye },
	{ value: 'code', icon: Code2 },
] as const;

interface TogglePreviewModeProps {
	name: string;
	previewMode: PreviewMode;
	setPreviewMode: (mode: PreviewMode) => void;
}

export function TogglePreviewMode({ name, previewMode, setPreviewMode }: TogglePreviewModeProps) {
	return (
		<motion.div role="radiogroup" className="flex items-center">
			{MODE_OPTIONS.map((option) => (
				<button
					key={option.value}
					className={cn(
						'relative flex h-8 cursor-pointer items-center gap-1.5 rounded-sm px-2 text-sm transition-colors',
						previewMode === option.value ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
					)}
					role="radio"
					aria-checked={previewMode === option.value}
					aria-label={`Switch to ${option.value} mode`}
					onClick={() => setPreviewMode(option.value)}
				>
					<option.icon className="size-3.5" />
					<span className="hidden capitalize lg:block">{option.value}</span>
					{previewMode === option.value && (
						<motion.div
							layoutId={`${name}-current-preview-mode`}
							transition={{
								type: 'spring',
								bounce: 0.2,
								duration: 0.6,
							}}
							className="border-muted-foreground/40 absolute inset-0 rounded-sm border border-dashed"
						/>
					)}
				</button>
			))}
		</motion.div>
	);
}
