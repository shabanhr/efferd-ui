import { LogoCloud } from "./logo-cloud";

export default function Page() {
  return (
    <div className="min-h-screen w-full place-content-center px-4">
      <section className="relative mx-auto grid max-w-3xl">
        <h2 className="mb-6 text-center font-medium text-lg text-muted-foreground tracking-tight md:text-2xl">
          Companies we{" "}
          <span className="font-semibold text-primary">collaborate</span> with.
        </h2>

        <LogoCloud />
      </section>
    </div>
  );
}
