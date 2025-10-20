import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between border-x md:flex-row">
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />
      <div className="border-b p-4 md:border-b-0">
        <h2 className="text-center font-bold text-2xl md:text-left">
          Let your plans shape the future.
        </h2>
      </div>
      <div className="flex items-center justify-center gap-2 p-4 md:border-l">
        <Button variant="secondary">Contact Sales</Button>
        <Button>Get Started</Button>
      </div>
      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
    </div>
  );
}
