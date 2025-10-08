import React from 'react';
import Link from 'next/link';
import { SITE_NAME, SITE_X_HANDLE } from '@/config/site';

export function SiteFooter() {
	return (
		<footer className="border-t border-dashed">
			<div className="cpx container flex items-center justify-between py-5 text-xs md:text-sm">
				<p className="text-muted-foreground flex items-center gap-1">
					<span>Built by</span>
					<Link
						aria-label="x/twitter"
						rel="noreferrer"
						href={`https://x.com/${SITE_X_HANDLE}`}
						target="_blank"
						className="text-foreground/90 hover:text-foreground font-medium hover:underline"
					>
						Shaban
					</Link>
					<span>—</span>
					<Link
						rel="noreferrer"
						href={`https://cal.com/sshahaider/10min`}
						target="_blank"
						className="text-muted-foreground hover:text-foreground font-medium hover:underline"
					>
						Hire Me
					</Link>
				</p>
				<p className="text-muted-foreground">
					&copy; {new Date().getFullYear()} {SITE_NAME}
				</p>
			</div>
		</footer>
	);
}
