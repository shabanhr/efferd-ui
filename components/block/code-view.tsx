import React, { useState, useMemo, useCallback } from 'react';
import CodeBlock from './code-block';
import { CodeFile } from '@/types';
import {
	TreeExpander,
	TreeIcon,
	TreeLabel,
	TreeNode,
	TreeNodeContent,
	TreeNodeTrigger,
	TreeProvider,
	TreeView,
} from '@/components/kibo-ui/tree';
import { BundledLanguage } from 'shiki/bundle/web';
import { ReactIcon } from '@/components/icons';
import { CopyButton } from '../copy-button';
import { sendGAEvent } from '@next/third-parties/google';

interface CodeViewProps {
	name: string;
	files?: CodeFile[];
}

const DEFAULT_FILE = 'page.tsx';

export function CodeView({ files, name }: CodeViewProps) {
	const initialFile = useMemo(() => files?.find((file) => file.name === DEFAULT_FILE), [files]);

	const [selectedIds, setSelectedIds] = useState<string[]>([DEFAULT_FILE]);
	const [currentCode, setCurrentCode] = useState<string>(initialFile?.code || '');
	const [currentLang, setCurrentLang] = useState<BundledLanguage>(initialFile?.lang || 'tsx');

	// Memoize filtered files
	const filteredFiles = useMemo(
		() => files?.filter((file) => file.name !== DEFAULT_FILE) || [],
		[files],
	);

	// Memoize current file info
	const currentFile = useMemo(
		() =>
			files?.find((file) => file.code === currentCode) || {
				name: DEFAULT_FILE,
			},
		[files, currentCode],
	);

	const onSelectionChange = useCallback(
		(ids: string[]) => {
			if (!files || ids.length === 0) return;

			const firstId = ids[0];

			// Only process file selections (contains dot)
			if (!firstId?.includes('.')) return;

			setSelectedIds(ids);

			const file = files.find((file) => file.name === firstId);
			if (file) {
				setCurrentCode(file.code);
				setCurrentLang(file.lang);
			}
		},
		[files],
	);

	return (
		<div className="flex h-svh">
			{/* File Tree Sidebar */}
			<div className="bg-card hidden w-64 sm:block">
				<div className="flex h-10 items-center border-b border-dashed px-4">
					<h3 className="text-muted-foreground font-mono text-sm">Files</h3>
				</div>
				<TreeProvider
					defaultExpandedIds={['app', 'components']}
					selectedIds={selectedIds}
					onSelectionChange={onSelectionChange}
				>
					<TreeView>
						<TreeNode nodeId="app">
							<TreeNodeTrigger>
								<TreeExpander hasChildren />
								<TreeIcon hasChildren />
								<TreeLabel>app</TreeLabel>
							</TreeNodeTrigger>
							<TreeNodeContent hasChildren>
								<TreeNode level={1} nodeId={DEFAULT_FILE}>
									<TreeNodeTrigger>
										<TreeExpander />
										<TreeIcon icon={<ReactIcon />} />
										<TreeLabel>page.tsx</TreeLabel>
									</TreeNodeTrigger>
								</TreeNode>
							</TreeNodeContent>
						</TreeNode>
						{filteredFiles.length > 0 && (
							<TreeNode nodeId="components">
								<TreeNodeTrigger>
									<TreeExpander hasChildren />
									<TreeIcon hasChildren />
									<TreeLabel>components</TreeLabel>
								</TreeNodeTrigger>
								<TreeNodeContent hasChildren>
									{filteredFiles.map((file) => (
										<TreeNode level={1} nodeId={file.name} key={file.name}>
											<TreeNodeTrigger>
												<TreeExpander />
												<TreeIcon icon={<ReactIcon />} />
												<TreeLabel>{file.name}</TreeLabel>
											</TreeNodeTrigger>
										</TreeNode>
									))}
								</TreeNodeContent>
							</TreeNode>
						)}
					</TreeView>
				</TreeProvider>
			</div>

			{/* Code Display Area */}
			<div className="relative w-full sm:w-[calc(100%-16rem)] sm:border-l sm:border-dashed">
				<div className="bg-card flex h-10 items-center justify-between border-b border-dashed px-4">
					<h3 className="text-muted-foreground font-mono text-sm">{currentFile.name}</h3>
					<CopyButton
						text={currentCode}
						onClick={() =>
							sendGAEvent('event', 'copy_code', {
								block_name: name,
								file_name: currentFile.name,
							})
						}
					/>
				</div>

				<CodeBlock
					code={currentCode}
					lang={currentLang}
					className="h-[calc(100%-2.5rem)] max-w-full overflow-auto"
				/>
			</div>
		</div>
	);
}
