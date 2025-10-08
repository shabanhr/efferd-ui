'use server';
import React from 'react';
import { constructMetadata } from '@/lib/metadata';
import { BlockLoader } from '@/components/block/block-loader';
import { capitalize, unslugify } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { findBlockByName, importBlockIndex } from '@/lib/data';

export async function generateMetadata({ params }: PageProps<'/view/[block_name]'>) {
	const { block_name } = await params;

	const block = findBlockByName(block_name);
	if (!block) return null;

	const blockName = capitalize(unslugify(block_name));

	return constructMetadata({
		title: `${blockName}`,
		description: block.description,
		canonicalUrl: `/view/${block_name}`,
	});
}

export default async function PreviewPage({ params }: PageProps<'/view/[block_name]'>) {
	const { block_name } = await params;

	const block = findBlockByName(block_name);
	if (!block) return notFound();

	const Block = importBlockIndex(block.category, block.block_number);

	const LazyBlock = React.lazy(Block);

	return (
		<React.Suspense fallback={<BlockLoader />}>
			<LazyBlock />
		</React.Suspense>
	);
}
