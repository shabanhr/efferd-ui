import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/header";
import { cn } from "@/lib/utils";

export default function AppLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-secondary/40 supports-[overflow:clip]:overflow-clip dark:bg-background">
      <SiteHeader />
      <main
        className={cn(
          "container relative grow",
          "before:-inset-y-20 before:-left-px before:absolute before:z-1 before:border-border before:border-dashed xl:before:border-l",
          "after:-inset-y-20 after:-right-px after:absolute after:z-1 after:border-border after:border-dashed xl:after:border-r"
        )}
      >
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
