import { cache } from "react";
import { blocks } from "@/config/blocks";
import { capitalize, unslugify } from "@/lib/utils";
import type { Block, Category } from "@/types";

export const BLOCKS_DIR = "registry/blocks";
const newCategories = ["logo-cloud", "faqs"];

export function getAllCategories(): Category[] {
  const categoryMap = new Map<string, number>();

  for (const block of blocks) {
    const cat = block.category;

    categoryMap.set(cat, (categoryMap.get(cat) ?? 0) + 1);
  }

  const sortedEntries = Array.from(categoryMap.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .sort(
      (a, b) =>
        Number(newCategories.includes(b[0])) -
        Number(newCategories.includes(a[0]))
    );

  return sortedEntries.map(([id, count]) => ({
    id,
    name: capitalize(unslugify(id)) as string,
    isNew: newCategories.includes(id),
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
