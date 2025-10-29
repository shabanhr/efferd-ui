import Link from "next/link";
import { BorderSeparator } from "@/components/sheard";
import { Tweets } from "@/components/tweets";
import { getAllCategories } from "@/lib/utils/blocks-data";
import type { Category } from "@/types";

export default function Page() {
  const categories = getAllCategories();

  return (
    <div className="min-h-screen">
      <div className="cpx space-y-2 py-5">
        <h1 className="font-bold font-heading text-4xl">
          Beautiful Shadcn Blocks
        </h1>
        <p className="text-muted-foreground text-sm">
          Beautiful Shadcn UI blocks and components for modern web apps.
        </p>
      </div>
      <BorderSeparator />
      <div className="cpx grid grid-cols-2 gap-4 py-5 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
        <div className="flex aspect-video flex-col items-center justify-center rounded-md border p-2">
          <p className="font-heading font-semibold text-muted-foreground text-sm md:text-lg">
            Coming Soon
          </p>
        </div>
      </div>
      <BorderSeparator />
      <Tweets />
    </div>
  );
}

function CategoryCard({ id, name, blocksCount, isNew }: Category) {
  return (
    <Link
      className="relative flex aspect-video flex-col items-center justify-center rounded-md border bg-card p-2 shadow hover:bg-accent dark:bg-card/50 dark:hover:bg-accent/50"
      href={`/${id}`}
    >
      {isNew && (
        <span className="absolute top-1 left-1 rounded-tl-md border bg-card px-1 py-0.5 font-mono font-semibold text-muted-foreground text-xs tracking-wider">
          NEW
        </span>
      )}

      <p className="font-heading font-semibold text-sm md:text-lg">{name}</p>
      <p className="text-muted-foreground text-xs">
        {blocksCount} block{blocksCount === 1 ? "" : "s"}
      </p>
    </Link>
  );
}
