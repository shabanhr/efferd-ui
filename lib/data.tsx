import fs from 'fs';
import path from 'path';
import { cache } from 'react';
import { Block, BlockWithCodeFiles, CodeFile } from '@/types';
import { capitalize, unslugify } from '@/lib/utils';
import { blocks } from '@/config/blocks';

function readFileContent(filePath: string): string | null {
	try {
		if (!fs.existsSync(filePath)) return null;
		return fs.readFileSync(filePath, 'utf-8');
	} catch {
		return null;
	}
}

function normalizeImports(content: string): string {
	return content.replace(
		/from\s+['"]\.\.\/([^'"]+)['"]|from\s+['"]\.\/?([^'"]+)['"]/g,
		(_, p1, p2) => {
			const importPath = p1 || p2;
			return `from "@/components/${importPath}"`;
		},
	);
}

function loadCode(filePath: string): string {
	const fullPath = path.join(process.cwd(), filePath);
	const content = readFileContent(fullPath);
	return content ? normalizeImports(content.trim()) : '// Code not found';
}

function loadAllComponentsFromFolder(folderPath: string): CodeFile[] {
	const fullPath = path.join(process.cwd(), folderPath);
	if (!fs.existsSync(fullPath)) return [];

	const files = fs.readdirSync(fullPath).filter((f) => f.endsWith('.tsx'));
	return files.map((file) => ({
		name: file,
		lang: 'tsx' as const,
		code: loadCode(path.join(folderPath, file)),
	}));
}

const BLOCKS_DIR = 'registry/blocks';

export function getAllCategories() {
	const categoryMap = new Map<string, number>();

	for (const block of blocks) {
		const cat = block.category;

		categoryMap.set(cat, (categoryMap.get(cat) ?? 0) + 1);
	}

	return Array.from(categoryMap.entries()).map(([id, count]) => ({
		id,
		name: capitalize(unslugify(id)) as string,
		blocksCount: count,
	}));
}

export function getBlocksByCategory(category: string): Block[] {
	return blocks.filter((block) => block.category === category);
}

export function findBlockByName(name: string) {
	return blocks.find((item) => item.name === name) ?? null;
}

export const getBlocksWithCodeFiles = cache((category: string): BlockWithCodeFiles[] => {
	const blocks = getBlocksByCategory(category);

	return blocks.map((block) => {
		const blockFolderPath = path.join(BLOCKS_DIR, category, block.block_number);

		return {
			...block,
			codes: loadAllComponentsFromFolder(blockFolderPath),
		} satisfies BlockWithCodeFiles;
	});
});

export function importBlockIndex(category: string, blockNumber: string) {
	return () => import(`@/${BLOCKS_DIR}/${category}/${blockNumber}/page`);
}
