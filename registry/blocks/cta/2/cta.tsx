import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between border-x">
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />
      <div className="border-b px-2 py-8">
        <h2 className="text-center font-semibold text-lg md:text-2xl">
          Plan the present. Build the future.
        </h2>
        <p className="text-balance text-center text-muted-foreground text-sm md:text-base">
          Start your journey today by clicking the button below.
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 bg-secondary/80 p-4 dark:bg-secondary/40">
        <Button variant="outline">Contact Sales</Button>
        <Button>
          Get Started <ArrowRightIcon />
        </Button>
      </div>
      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
    </div>
  );
}
