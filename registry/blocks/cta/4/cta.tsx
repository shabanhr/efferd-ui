import { ArrowRightIcon, CreditCardIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 rounded-4xl border bg-card px-4 py-8 shadow-sm md:py-10 dark:bg-card/50">
      <div className="space-y-2">
        <h2 className="text-center font-bold text-2xl tracking-tight md:text-3xl">
          Let your plans shape the future.
        </h2>
        <p className="text-center text-muted-foreground">
          Start your free trial today. No credit card{" "}
          <CreditCardIcon className="inline-block size-4" /> required.
        </p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button className="shadow" variant="outline">
          Contact Sales
        </Button>
        <Button className="shadow">
          Get Started <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
}
