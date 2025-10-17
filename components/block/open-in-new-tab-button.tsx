import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function OpenInNewTabButton({ previewLink }: { previewLink: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            aria-label="Open in new tab"
            asChild
            size="icon-sm"
            variant="dashed"
          >
            <Link href={previewLink} target="_blank">
              <ExternalLinkIcon className="size-3.5" />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Open In New Tab</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
