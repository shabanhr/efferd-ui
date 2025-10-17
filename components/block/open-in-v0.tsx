import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";
import { V0Icon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function OpenInV0Button({
  registryUrl,
  name,
}: {
  registryUrl: string;
  name: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            aria-label="Open in v0"
            asChild
            onClick={() =>
              sendGAEvent("event", "open_in_v0", {
                block_name: name,
              })
            }
            size="icon-sm"
            variant="dashed"
          >
            <Link
              href={`https://v0.dev/chat/api/open?url=${registryUrl}`}
              rel="noreferrer"
              target="_blank"
            >
              <V0Icon />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Open In v0</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
