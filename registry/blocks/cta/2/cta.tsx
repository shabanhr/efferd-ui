import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between border-x">
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />
      <div className="border-b px-2 py-8">
        <h2 className="text-center font-bold text-2xl">
          Let your plans shape the future.
        </h2>
        <p className="text-center text-muted-foreground">
          Start your free trial today. No credit card required.
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
