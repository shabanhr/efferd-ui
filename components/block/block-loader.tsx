import React from "react";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

export function BlockLoader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center justify-center min-h-full", className)}
      {...props}
    >
      <Spinner className="size-4 text-muted-foreground" />
    </div>
  );
}
