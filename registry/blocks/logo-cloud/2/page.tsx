import { LogoCloud } from "./logo-cloud";

export default function Page() {
  return (
    <div className="min-h-screen w-full place-content-center px-4">
      <section className="relative">
        <h2 className="mb-6 text-center font-medium text-lg text-muted-foreground tracking-tight md:text-2xl">
          Companies we{" "}
          <span className="font-semibold text-primary">collaborate</span> with.
        </h2>
        <div className="relative mx-auto max-w-3xl">
          <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />
          <LogoCloud className="border-y-0" />
          <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
        </div>
      </section>
    </div>
  );
}
