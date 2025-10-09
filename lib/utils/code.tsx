'use server';
import fs from 'fs';
import path from 'path';
import { cache } from 'react';

async function readFileContent(filePath: string): Promise<string | null> {
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

export const loadCode = async (filePath: string): Promise<string> => {
	const fullPath = path.join(process.cwd(), filePath);
	const content = await readFileContent(fullPath);
	return content ? normalizeImports(content.trim()) : '// Code not found';
};

export const loadCachedCodeFile = cache(loadCode);
	
