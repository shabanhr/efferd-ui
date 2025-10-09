import { cache } from 'react';
import { Block } from '@/types';
import { capitalize, unslugify } from '@/lib/utils';
import { blocks } from '@/config/blocks';

export const BLOCKS_DIR = 'registry/blocks';

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
export const getCachedCategories = cache(getAllCategories);

export function getBlocksByCategory(category: string): Block[] {
	return blocks.filter((block) => block.category === category);
}
export const getCachedBlocksByCategory = cache(getBlocksByCategory);

export function findBlockByName(name: string) {
	return blocks.find((item) => item.name === name) ?? null;
}
export const getCachedBlockByName = cache(findBlockByName);

export function importBlockIndex(category: string, blockNumber: string) {
	return () => import(`@/${BLOCKS_DIR}/${category}/${blockNumber}/page`);
}
