'use client';

import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import CodeBlock from './code-block';
import { BlockFile } from '@/types';
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
import { ReactIcon } from '@/components/icons';
import { CopyButton } from '../copy-button';
import { sendGAEvent } from '@next/third-parties/google';
import { loadCode } from '@/lib/utils/code';

const DEFAULT_FILE_NAME = 'page.tsx';

interface CodeViewProps {
	files: BlockFile[];
	name: string;
}

export function CodeView({ files, name }: CodeViewProps) {
	const defaultFile = useMemo(() => {
		if (!files?.length) return null;
		return files.find((file) => file.name === DEFAULT_FILE_NAME) ?? files[0];
	}, [files]);

	const [selectedIds, setSelectedIds] = useState<string[]>(() =>
		defaultFile ? [defaultFile.name] : [],
	);
	const [currentFile, setCurrentFile] = useState<BlockFile | null>(defaultFile);
	const [currentCode, setCurrentCode] = useState<string>('');
	const [isFetching, setIsFetching] = useState(false);
	const codeCache = useRef(new Map<string, string>());

	const componentFiles = useMemo<BlockFile[]>(
		() => files.filter((file) => file.type === 'component'),
		[files],
	);

	const hookFiles = useMemo<BlockFile[]>(
		() => files.filter((file) => file.type === 'hook'),
		[files],
	);

	const defaultExpandedIds = useMemo(() => {
		const ids: string[] = [];
		if (defaultFile) ids.push('app');
		if (componentFiles.length) ids.push('components');
		if (hookFiles.length) ids.push('hooks');
		return ids;
	}, [componentFiles.length, hookFiles.length, defaultFile]);

	const treeProviderKey = useMemo(
		() => files.map((file) => `${file.type}:${file.name}`).join('|'),
		[files],
	);

	useEffect(() => {
		codeCache.current.clear();
	}, [treeProviderKey]);

	useEffect(() => {
		if (!defaultFile) {
			setCurrentFile(null);
			setSelectedIds([]);
			setCurrentCode('');
			return;
		}

		setCurrentFile((prev) => (prev?.name === defaultFile.name ? prev : defaultFile));
		setSelectedIds((prev) =>
			prev.length === 1 && prev[0] === defaultFile.name ? prev : [defaultFile.name],
		);
	}, [defaultFile]);

	useEffect(() => {
		const filePath = currentFile?.path;
		if (!filePath) {
			setCurrentCode('');
			setIsFetching(false);
			return;
		}

		const resolvedPath = filePath;
		const cachedCode = codeCache.current.get(resolvedPath);
		if (cachedCode) {
			setCurrentCode(cachedCode);
			setIsFetching(false);
			return;
		}

		let active = true;
		setIsFetching(true);

		async function fetchCode() {
			try {
				const code = await loadCode(resolvedPath);
				if (!active) return;
				codeCache.current.set(resolvedPath, code);
				setCurrentCode(code);
			} catch (err) {
				if (!active) return;
				console.error('Error loading code for copy:', err);
				setCurrentCode('// Failed to load code');
			} finally {
				if (active) setIsFetching(false);
			}
		}

		fetchCode();

		return () => {
			active = false;
		};
	}, [currentFile?.path]);

	const onSelectionChange = useCallback(
		(ids: string[]) => {
			if (!files || ids.length === 0) return;
			const firstId = ids[0];
			if (!firstId?.includes('.')) return;
			const file = files.find((item) => item.name === firstId);
			if (!file) return;
			setSelectedIds(ids);
			setCurrentFile(file);
		},
		[files],
	);

	if (!files?.length) {
		return (
			<div className="flex h-svh items-center justify-center border border-dashed">
				<p className="text-muted-foreground text-sm">No code files available for this block.</p>
			</div>
		);
	}

	return (
		<div className="animate-in fade-in flex h-svh duration-500" aria-busy={isFetching}>
			<div className="bg-card hidden w-64 sm:block">
				<div className="flex h-10 items-center border-b border-dashed px-4">
					<h3 className="text-muted-foreground font-mono text-sm">Files</h3>
				</div>
				<TreeProvider
					key={treeProviderKey}
					defaultExpandedIds={defaultExpandedIds}
					selectedIds={selectedIds}
					onSelectionChange={onSelectionChange}
				>
					<TreeView>
						{defaultFile && (
							<TreeNode nodeId="app">
								<TreeNodeTrigger>
									<TreeExpander hasChildren /> <TreeIcon hasChildren />
									<TreeLabel>app</TreeLabel>
								</TreeNodeTrigger>
								<TreeNodeContent hasChildren>
									<TreeNode level={1} nodeId={defaultFile.name}>
										<TreeNodeTrigger>
											<TreeExpander /> <TreeIcon icon={<ReactIcon />} />
											<TreeLabel>{defaultFile.name}</TreeLabel>
										</TreeNodeTrigger>
									</TreeNode>
								</TreeNodeContent>
							</TreeNode>
						)}
						{componentFiles?.length > 0 && (
							<TreeNode nodeId="components">
								<TreeNodeTrigger>
									<TreeExpander hasChildren /> <TreeIcon hasChildren />
									<TreeLabel>components</TreeLabel>
								</TreeNodeTrigger>
								<TreeNodeContent hasChildren>
									{componentFiles.map((file) => (
										<TreeNode level={1} nodeId={file.name} key={file.name}>
											<TreeNodeTrigger>
												<TreeExpander /> <TreeIcon icon={<ReactIcon />} />
												<TreeLabel>{file.name}</TreeLabel>
											</TreeNodeTrigger>
										</TreeNode>
									))}
								</TreeNodeContent>
							</TreeNode>
						)}
						{hookFiles?.length > 0 && (
							<TreeNode nodeId="hooks">
								<TreeNodeTrigger>
									<TreeExpander hasChildren /> <TreeIcon hasChildren />
									<TreeLabel>hooks</TreeLabel>
								</TreeNodeTrigger>
								<TreeNodeContent hasChildren>
									{hookFiles.map((file) => (
										<TreeNode level={1} nodeId={file.name} key={file.name}>
											<TreeNodeTrigger>
												<TreeExpander /> <TreeIcon icon={<ReactIcon />} />
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

			<div className="relative w-full sm:w-[calc(100%-16rem)] sm:border-l sm:border-dashed">
				<div className="bg-card flex h-10 items-center justify-between border-b border-dashed px-4">
					<h3 className="text-muted-foreground font-mono text-sm">
						{currentFile?.name ?? 'Select a file'}
					</h3>
					<CopyButton
						disabled={!currentCode}
						text={currentCode}
						onClick={() =>
							sendGAEvent('event', 'copy_code', {
								block_name: name,
								file_name: currentFile?.name ?? 'unknown',
							})
						}
					/>
				</div>

				<CodeBlock
					key={currentFile?.path ?? 'empty'}
					code={currentCode}
					isFetching={isFetching}
					className="h-[calc(100%-2.5rem)] max-w-full overflow-auto"
				/>
			</div>
		</div>
	);
}
