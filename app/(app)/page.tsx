import { BorderSeparator } from "@/components/sheard";
import { getCachedCategories } from "@/lib/utils/blocks-data";
import { Category } from "@/types";
import Link from "next/link";

export default function Page() {
  const categories = getCachedCategories();

  return (
    <div className="min-h-screen">
      <div className="cpx space-y-2 py-5">
        <h1 className="font-heading text-4xl font-bold">
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
        <div className="flex aspect-video flex-col items-center justify-center rounded-md border border-dashed p-2">
          <p className="font-heading text-muted-foreground text-sm font-semibold md:text-lg">
            Coming Soon
          </p>
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ id, name, blocksCount, isNew }: Category) {
  return (
    <Link
      href={`/${id}`}
      className="relative bg-card dark:bg-card/50 hover:bg-accent dark:hover:bg-accent/50 flex aspect-video flex-col items-center justify-center rounded-md border border-dashed p-2 shadow"
    >
      {isNew && <span className="absolute top-1 left-1 tracking-wider font-mono text-xs font-semibold px-1 py-0.5 border border-dashed rounded-tl-md bg-card">NEW</span>}

      <p className="font-heading text-sm font-semibold md:text-lg">{name}</p>
      <p className="text-muted-foreground text-xs">
        {blocksCount} block{blocksCount === 1 ? "" : "s"}
      </p>
    </Link>
  );
}
