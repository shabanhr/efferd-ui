import React from 'react';
import { BlockBox } from '@/components/block';
import { capitalize, unslugify } from '@/lib/utils';
import { DashedLines } from '@/components/sheard';
import { getBlocksWithCodeFiles } from '@/lib/data';
import { constructMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function generateMetadata({ params }: PageProps<'/[cat]'>) {
	const { cat } = await params;

	if (!cat) {
		return null;
	}

	const catagoryName = capitalize(unslugify(cat)) as string;

	return constructMetadata({
		title: `${catagoryName} Blocks`,
		description: `Discover ${catagoryName} blocks — ready to copy, customize, and drop into your next Shadcn UI project.`,
		canonicalUrl: `/${cat}`,
		keywords: [catagoryName],
	});
}

export default async function CategoryPage({ params }: PageProps<'/[cat]'>) {
	const { cat } = await params;

	const categoryBlocks = getBlocksWithCodeFiles(cat);

	const catagoryName = capitalize(unslugify(cat)) as string;

	return (
		<>
			<div className="cpx max-w-xl space-y-2 pt-6">
				<Link
					href="/"
					className="text-muted-foreground hover:text-foreground flex w-max items-center gap-1 text-sm"
				>
					<ArrowLeft className="inline-block size-3" /> Back to Home
				</Link>
				<h1 className="font-heading text-3xl font-bold sm:text-4xl md:text-nowrap">
					Explore {catagoryName} Blocks
				</h1>
				<p className="text-muted-foreground text-sm">
					Discover {categoryBlocks.length} beautifully crafted {catagoryName}{' '}
					blocks — ready to copy, customize, and drop into your next Shadcn UI
					project.
				</p>
			</div>

			<DashedLines className="h-6 [mask-image:linear-gradient(to_bottom,transparent_2px,var(--background))]" />

			{categoryBlocks.map((block, index) => (
				<React.Fragment key={index}>
					<BlockBox block={block} key={index} />
					<DashedLines className="h-12" />
				</React.Fragment>
			))}
		</>
	);
}
