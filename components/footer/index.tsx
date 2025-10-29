import Link from "next/link";
import { MY_HANDLE, SITE_NAME } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-dashed bg-card dark:bg-card/50">
      <div className="cpx container flex items-center justify-between py-6 text-xs md:text-sm">
        <p className="flex items-center gap-1 text-muted-foreground">
          <span>Built by</span>
          <Link
            aria-label="x/twitter"
            className="font-medium text-foreground/90 hover:text-foreground hover:underline"
            href={`https://x.com/${MY_HANDLE}`}
            rel="noreferrer"
            target="_blank"
          >
            Shaban
          </Link>
        </p>
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} {SITE_NAME}
        </p>
      </div>
    </footer>
  );
}
