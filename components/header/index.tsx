import Link from "next/link";
import { GithubIcon, XIcon } from "@/components/icons";
import { WordmarkIcon } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { MY_HANDLE, SITE_NAME } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="border-b border-dashed">
      <div className="cpx container flex h-14 items-center justify-between py-2">
        <div className="flex items-center">
          <Link
            className="cursor-pointer rounded-md p-2 hover:bg-accent"
            href="/"
          >
            <WordmarkIcon className="h-4" />
            <span className="sr-only">{SITE_NAME}</span>
          </Link>
        </div>

        <div className="-mr-2 flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Button asChild size="icon-sm" variant="dashed">
              <Link
                aria-label="x/twitter"
                href={`https://x.com/${MY_HANDLE}`}
                target="_blank"
              >
                <XIcon />
              </Link>
            </Button>
            <Button asChild size="icon-sm" variant="dashed">
              <Link
                aria-label="github"
                href={`https://github.com/${MY_HANDLE}/efferd`}
                target="_blank"
              >
                <GithubIcon />
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
