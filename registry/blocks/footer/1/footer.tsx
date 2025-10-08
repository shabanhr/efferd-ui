import React from 'react';

import {
	FacebookIcon,
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
	TwitterIcon,
	YoutubeIcon,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { WordmarkIcon } from '@/components/logo';
import { cn } from '@/lib/utils';

export function Footer() {
	const company = [
		{
			title: 'About Us',
			href: '#',
		},
		{
			title: 'Careers',
			href: '#',
		},
		{
			title: 'Brand assets',
			href: '#',
		},
		{
			title: 'Privacy Policy',
			href: '#',
		},
		{
			title: 'Terms of Service',
			href: '#',
		},
	];

	const resources = [
		{
			title: 'Blog',
			href: '#',
		},
		{
			title: 'Help Center',
			href: '#',
		},
		{
			title: 'Contact Support',
			href: '#',
		},
		{
			title: 'Community',
			href: '#',
		},
		{
			title: 'Security',
			href: '#',
		},
	];

	const socialLinks = [
		{
			icon: FacebookIcon,
			link: '#',
		},
		{
			icon: GithubIcon,
			link: '#',
		},
		{
			icon: InstagramIcon,
			link: '#',
		},
		{
			icon: LinkedinIcon,
			link: '#',
		},
		{
			icon: TwitterIcon,
			link: '#',
		},
		{
			icon: YoutubeIcon,
			link: '#',
		},
	];
	return (
		<footer className="relative">
			<div
				className={cn(
					'mx-auto max-w-5xl lg:border-x',
					'dark:bg-[radial-gradient(35%_80%_at_30%_0%,--theme(--color-foreground/.1),transparent)]',
				)}
			>
				<div className="bg-border absolute inset-x-0 h-px w-full" />
				<div className="grid max-w-5xl grid-cols-6 gap-6 p-4">
					<div className="col-span-6 flex flex-col gap-4 pt-5 md:col-span-4">
						<a href="#" className="w-max">
							<WordmarkIcon className="h-5" />
						</a>
						<p className="text-muted-foreground max-w-sm font-mono text-sm text-balance">
							A comprehensive financial technology platform.
						</p>
						<div className="flex gap-2">
							{socialLinks.map((item, i) => (
								<Button key={i} variant="outline" size="icon-sm">
									<a target="_blank" href={item.link}>
										<item.icon className="size-3.5" />
									</a>
								</Button>
							))}
						</div>
					</div>
					<div className="col-span-3 w-full md:col-span-1">
						<span className="text-muted-foreground text-xs">Resources</span>
						<div className="mt-2 flex flex-col gap-2">
							{resources.map(({ href, title }, i) => (
								<a
									key={i}
									className="w-max text-sm hover:underline"
									href={href}
								>
									{title}
								</a>
							))}
						</div>
					</div>
					<div className="col-span-3 w-full md:col-span-1">
						<span className="text-muted-foreground text-xs">Company</span>
						<div className="mt-2 flex flex-col gap-2">
							{company.map(({ href, title }, i) => (
								<a
									key={i}
									className="w-max text-sm hover:underline"
									href={href}
								>
									{title}
								</a>
							))}
						</div>
					</div>
				</div>
				<div className="bg-border absolute inset-x-0 h-px w-full" />
				<div className="flex max-w-4xl flex-col justify-between gap-2 py-4">
					<p className="text-muted-foreground text-center text-sm font-light">
						&copy; {new Date().getFullYear()} efferd, All rights reserved
					</p>
				</div>
			</div>
		</footer>
	);
}
