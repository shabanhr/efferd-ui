import { RotateCwIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type RefreshButtonProps = {
  handleRefresh: () => void;
  isRefreshing: boolean;
};

export function RefreshButton({
  handleRefresh,
  isRefreshing,
}: RefreshButtonProps) {
  return (
    <Button onClick={handleRefresh} size="icon-sm" variant="dashed">
      <RotateCwIcon
        className={cn(
          "size-3.5 transition-transform duration-300 ease-[cubic-bezier(0.12,0,0.39,0)] will-change-transform",
          isRefreshing ? "rotate-90" : "rotate-0"
        )}
      />
    </Button>
  );
}
