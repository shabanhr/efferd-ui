import Link from "next/link";
import { GithubIcon, XIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { MY_HANDLE, SITE_NAME } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="border-b border-dashed bg-card dark:bg-card/50">
      <div className="cpx container flex h-14 items-center justify-between py-2">
        <Link
          className="h-8 cursor-pointer place-content-center rounded-md border border-dashed px-2 hover:bg-accent"
          href="/"
        >
          <Logo className="h-4.5" />
          <span className="sr-only">{SITE_NAME}</span>
        </Link>
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
              href={`https://github.com/${MY_HANDLE}/efferd-ui`}
              target="_blank"
            >
              <GithubIcon />
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
