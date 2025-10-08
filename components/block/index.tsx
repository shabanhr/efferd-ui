'use client';

import React from 'react';
import { CodeView } from '@/components/block/code-view';
import { BlockWithCodeFiles } from '@/types';
import { TogglePreviewMode } from './toggle-preview-mode';
import { RefreshButton } from './refresh-button';
import { PreviewMode } from '@/types';
import { OpenInV0Button } from './open-in-v0';
import { OpenInNewTabButton } from './open-in-new-tab-button';
import { BlockPreview } from './block-preview';
import { CopyCliButton } from './copy-cli-button';
import { useOptimizedIframe } from '@/hooks/use-optimized-iframe';
import { IframeRenderer } from './iframe-renderer';
import { BlockLoader } from './block-loader';
import { BorderSeparator } from '@/components/sheard';

type BlockPreviewProps = {
	block: BlockWithCodeFiles;
};

export function BlockBox({ block }: BlockPreviewProps) {
	const [previewMode, setPreviewMode] = React.useState<PreviewMode>('preview');
	const iframeContainerRef = React.useRef<HTMLDivElement>(null);

	const { name, codes } = block;

	const previewLink = `/view/${name}`;

	const registryUrl = new URL(`/r/${name}.json`, window.location.href).toString();

	const { iframeRef, shouldLoadIframe, onRefreshIframe, isRefreshing } = useOptimizedIframe({
		previewUrl: previewLink,
		containerRef: iframeContainerRef,
	});

	return (
		<div id={name} className="border-b border-dashed">
			{/* Toolbar */}
			<BorderSeparator className="z-1" />

			<div className="bg-card relative flex items-center justify-between px-4 py-1.5">
				<div className="flex items-center gap-3">
					<TogglePreviewMode
						name={name}
						previewMode={previewMode}
						setPreviewMode={setPreviewMode}
					/>
					<div className="h-5 border-r border-dashed" />
					<RefreshButton handleRefresh={onRefreshIframe} isRefreshing={isRefreshing} />
				</div>
				<div className="flex items-center gap-3">
					<CopyCliButton name={name} registryUrl={registryUrl} />
					<div className="h-5 border-r border-dashed" />
					<OpenInV0Button name={name} registryUrl={registryUrl} />
					<OpenInNewTabButton previewLink={previewLink} />
				</div>
			</div>
			<BorderSeparator className="z-1" />

			{/* Preview */}
			<BlockPreview previewMode={previewMode}>
				<div ref={iframeContainerRef} className="relative h-full">
					{shouldLoadIframe ? (
						<IframeRenderer
							src={previewLink}
							name={name}
							ariaLabel={`${name}-block-preview`}
							iframeRef={iframeRef}
						/>
					) : (
						<BlockLoader />
					)}
				</div>
			</BlockPreview>

			{/* Code View */}
			{previewMode === 'code' && <CodeView name={name} files={codes} />}
		</div>
	);
}
