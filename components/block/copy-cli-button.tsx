import React from 'react';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { ShadcnIcon } from '../icons';
import { sendGAEvent } from '@next/third-parties/google';

interface CopyCliButtonProps {
	registryUrl: string;
	name: string;
}

export function CopyCliButton({ registryUrl, name }: CopyCliButtonProps) {
	const { copied, copy } = useCopyToClipboard();

	const handleCopy = () => {
		copy(`pnpm dlx shadcn@latest add ${registryUrl}`);
		sendGAEvent('event', 'copy_cli', {
			block_name: name,
		});
	};

	return (
		<button
			onClick={handleCopy}
			className="hover:bg-accent/80 flex h-8 items-center gap-2 rounded-sm border border-dashed px-2 transition-colors"
		>
			<div
				className={cn(
					'transition-all',
					copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
				)}
			>
				<Check className="size-3.5 stroke-emerald-500" aria-hidden="true" />
			</div>
			<div
				className={cn(
					'absolute transition-all',
					copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
				)}
			>
				<ShadcnIcon className="size-3.5" aria-hidden="true" />
			</div>
			<span className="text-muted-foreground hidden font-mono text-sm md:block">
				@efferd/{name}
			</span>
		</button>
	);
}
