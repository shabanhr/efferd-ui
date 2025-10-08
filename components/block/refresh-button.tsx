import React from 'react';
import { Button } from '@/components/ui/button';
import { RotateCwIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RefreshButtonProps {
	handleRefresh: () => void;
	isRefreshing: boolean;
}

export function RefreshButton({
	handleRefresh,
	isRefreshing,
}: RefreshButtonProps) {
	return (
		<Button
			size="icon-sm"
			variant="dashed"
			onClick={handleRefresh}
		>
			<RotateCwIcon
				className={cn(
					'size-3.5 transition-transform duration-300 ease-[cubic-bezier(0.12,0,0.39,0)] will-change-transform',
					isRefreshing ? 'rotate-90' : 'rotate-0',
				)}
			/>
		</Button>
	);
}
