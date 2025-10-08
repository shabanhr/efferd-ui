import React from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { PreviewMode } from '@/types';

const DEFAULTSIZE = 100;

interface BlockPreviewProps {
	previewMode: PreviewMode;
	children: React.ReactNode;
}

export function BlockPreview({ previewMode, children }: BlockPreviewProps) {
	const { isDesktop } = useMediaQuery();

	return (
		<div className={cn('relative', previewMode === 'code' && 'hidden')}>
			<div
				aria-hidden="true"
				className={cn(
					'bg-muted dark:bg-muted/20 absolute inset-0 -z-10 size-full',
					'bg-[radial-gradient(color-mix(in_oklab,--theme(--color-muted-foreground/.80)30%,transparent)_1px,transparent_1px)]',
					'bg-[size:20px_20px]',
				)}
			/>
			<PanelGroup direction="horizontal">
				<Panel
					order={1}
					defaultSize={DEFAULTSIZE}
					minSize={30}
					className="bg-background min-h-svh lg:border-r lg:border-dashed"
				>
					{children}
				</Panel>

				{isDesktop && (
					<>
						<PanelResizeHandle className="relative w-2">
							<div className="bg-foreground/20 hover:bg-foreground/30 absolute inset-0 m-auto h-20 w-1 rounded-full transition-[height,background] hover:h-24" />
						</PanelResizeHandle>
						<Panel
							order={2}
							defaultSize={100 - DEFAULTSIZE}
							className="-mr-[0.5px] ml-px"
						/>
					</>
				)}
			</PanelGroup>
		</div>
	);
}
