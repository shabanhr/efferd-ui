import { SiteHeader } from "@/components/header";
import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/footer";

export default function AppLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
      <SiteHeader />
      <main
        className={cn(
          "container relative grow",
          "before:absolute before:z-1 before:-inset-y-20 before:left-0 before:border-border xl:before:border-l before:border-dashed",
          "after:absolute after:z-1 after:-inset-y-20 after:right-0 after:border-border xl:after:border-r after:border-dashed"
        )}
      >
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
