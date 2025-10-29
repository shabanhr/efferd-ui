import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { BlockBox } from "@/components/block";
import { DashedLines } from "@/components/sheard";
import { constructMetadata } from "@/lib/metadata";
import { capitalize, unslugify } from "@/lib/utils";
import { getBlocksByCategory } from "@/lib/utils/blocks-data";

export const dynamic = "force-static";

export async function generateMetadata({ params }: PageProps<"/[cat]">) {
  const { cat } = await params;

  if (!cat) {
    return null;
  }

  const catagoryName = capitalize(unslugify(cat)) as string;

  return constructMetadata({
    title: `Free Shadcn/UI ${catagoryName} Blocks`,
    description: `Discover ${catagoryName} blocks — ready to copy, customize, and drop into your Shadcn/UI project.`,
    canonicalUrl: `/${cat}`,
    keywords: [catagoryName],
  });
}

export default async function CategoryPage({ params }: PageProps<"/[cat]">) {
  const { cat } = await params;

  const categoryBlocks = getBlocksByCategory(cat);

  if (categoryBlocks?.length === 0) {
    return notFound();
  }

  const catagoryName = capitalize(unslugify(cat)) as string;

  return (
    <>
      <div className="cpx max-w-xl space-y-2 pt-6">
        <Link
          className="flex w-max items-center gap-1 text-muted-foreground text-sm hover:text-foreground"
          href="/"
        >
          <ArrowLeft className="inline-block size-3" /> Back to Home
        </Link>
        <h1 className="font-bold font-heading text-3xl sm:text-4xl md:text-nowrap">
          Explore {catagoryName} Blocks
        </h1>
        <p className="text-muted-foreground text-sm">
          Discover {categoryBlocks.length} beautifully crafted {catagoryName}{" "}
          blocks — ready to copy, customize, and drop into your next Shadcn UI
          project.
        </p>
      </div>

      <DashedLines className="h-8 [mask-image:linear-gradient(to_bottom,transparent,var(--background),var(--background))]" />

      {categoryBlocks.map((block) => (
        <React.Fragment key={block.name}>
          <BlockBox block={block} />
          <DashedLines className="h-16" />
        </React.Fragment>
      ))}
    </>
  );
}
