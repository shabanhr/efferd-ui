import Link from 'next/link';
import React from 'react';
import { WordmarkIcon } from '@/components/logo';
import { GithubIcon, XIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { SITE_NAME } from '@/config/site';
import { ThemeToggle } from '@/components/theme-toggle';

export function SiteHeader() {
	return (
		<header className="border-b border-dashed">
			<div className="cpx container flex h-14 items-center justify-between py-2">
				<div className="flex items-center">
					<Link
						href="/"
						className="hover:bg-accent cursor-pointer rounded-md p-2"
					>
						<WordmarkIcon className="h-4" />
						<span className="sr-only">{SITE_NAME}</span>
					</Link>
				</div>

				<div className="-mr-2 flex items-center gap-2">
					<div className="flex items-center gap-2">
						<Button variant="dashed" size="icon-sm" asChild>
							<Link
								href="https://x.com/sshahaider"
								target="_blank"
								aria-label="x/twitter"
							>
								<XIcon />
							</Link>
						</Button>
						<Button variant="dashed" size="icon-sm" asChild>
							<Link
								href="https://github.com/sshahaider/efferd-ui"
								target="_blank"
								aria-label="github"
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
};
