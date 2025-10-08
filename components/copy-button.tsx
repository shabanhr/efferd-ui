'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { Check, Copy } from 'lucide-react';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';

type CopyButtonProps = React.ComponentProps<typeof Button> & {
	text: string;
};

export function CopyButton({
	variant = 'ghost',
	size = 'icon-sm',
	text,
	onClick,
	...props
}: CopyButtonProps) {
	const { copied, copy } = useCopyToClipboard();

	const handleCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
		copy(text);
		onClick?.(event); // ✅ pass event to onClick
	};

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						variant={variant}
						size={size}
						onClick={handleCopy}
						aria-label={copied ? 'Copied' : 'Copy to clipboard'}
						disabled={copied || props.disabled}
						{...props}
					>
						<div
							className={cn(
								'transition-all',
								copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
							)}
						>
							<Check
								className="size-3.5 stroke-emerald-500"
								aria-hidden="true"
							/>
						</div>
						<div
							className={cn(
								'absolute transition-all',
								copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
							)}
						>
							<Copy className="size-3.5" aria-hidden="true" />
						</div>
					</Button>
				</TooltipTrigger>
				<TooltipContent className="px-2 py-1 text-xs">
					Click to copy
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
