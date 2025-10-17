import type React from "react";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

export function BlockLoader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex min-h-full items-center justify-center", className)}
      {...props}
    >
      <Spinner className="size-4 text-muted-foreground" />
    </div>
  );
}
