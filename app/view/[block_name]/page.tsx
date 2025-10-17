import { notFound } from "next/navigation";
import React from "react";
import { BlockLoader } from "@/components/block/block-loader";
import { constructMetadata } from "@/lib/metadata";
import { capitalize, unslugify } from "@/lib/utils";
import {
  getCachedBlockByName,
  importBlockIndex,
} from "@/lib/utils/blocks-data";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: PageProps<"/view/[block_name]">) {
  const { block_name } = await params;

  const block = getCachedBlockByName(block_name);
  if (!block) {
    return null;
  }

  const blockName = capitalize(unslugify(block_name));

  return constructMetadata({
    title: `${blockName}`,
    description: block.description,
    canonicalUrl: `/view/${block_name}`,
  });
}

export default async function PreviewPage({
  params,
}: PageProps<"/view/[block_name]">) {
  const { block_name } = await params;

  const block = getCachedBlockByName(block_name);
  if (!block) {
    return notFound();
  }

  const Block = importBlockIndex(block.category, block.block_number);

  const LazyBlock = React.lazy(Block);

  return (
    <React.Suspense fallback={<BlockLoader className="h-svh" />}>
      <LazyBlock />
    </React.Suspense>
  );
}
