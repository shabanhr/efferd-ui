'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Footer() {
	return (
		<footer className="border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
			<div className="relative mx-auto max-w-5xl px-4">
				<div className="relative grid grid-cols-1 border-x md:grid-cols-4 md:divide-x">
					<div>
						<SocialCard title="Facebook" href="#" className="border-t-0" />
						<LinksGroup
							title="About Us"
							links={[
								{ title: 'Pricing', href: '#' },
								{ title: 'Testimonials', href: '#' },
								{ title: 'FAQs', href: '#' },
								{ title: 'Contact Us', href: '#' },
								{ title: 'Blog', href: '#' },
							]}
						/>
					</div>
					<div>
						<SocialCard title="Youtube" href="#" />
						<LinksGroup
							title="Support"
							links={[
								{ title: 'Help Center', href: '#' },
								{ title: 'Terms', href: '#' },
								{ title: 'Privacy', href: '#' },
								{ title: 'Security', href: '#' },
								{ title: 'Cookie Policy', href: '#' },
							]}
						/>
					</div>

					<div>
						<SocialCard title="Twitter" href="#" />
						<LinksGroup
							title="Community"
							links={[
								{ title: 'Forum', href: '#' },
								{ title: 'Events', href: '#' },
								{ title: 'Partners', href: '#' },
								{ title: 'Affiliates', href: '#' },
								{ title: 'Career', href: '#' },
							]}
						/>
					</div>
					<div>
						<SocialCard title="Instagram" href="#" />
						<LinksGroup
							title="Press"
							links={[
								{ title: 'Investors', href: '#' },
								{ title: 'Terms of Use', href: '#' },
								{ title: 'Privacy Policy', href: '#' },
								{ title: 'Cookie Policy', href: '#' },
								{ title: 'Legal', href: '#' },
							]}
						/>
					</div>
				</div>
			</div>
			<div className="flex justify-center border-t p-3">
				<p className="text-muted-foreground text-xs">
					&copy; {new Date().getFullYear()} efferd, All rights reserved
				</p>
			</div>
		</footer>
	);
}

interface LinksGroupProps {
	title: string;
	links: { title: string; href: string }[];
}
function LinksGroup({ title, links }: LinksGroupProps) {
	return (
		<div className="p-2">
			<h3 className="text-foreground/75 mt-2 mb-4 text-xs font-medium tracking-wider uppercase">
				{title}
			</h3>
			<ul>
				{links.map((link) => (
					<li key={link.title}>
						<a
							href={link.href}
							className="text-muted-foreground hover:text-foreground text-xs"
						>
							{link.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

function SocialCard({
	title,
	href,
	className,
}: {
	title: string;
	href: string;
	className?: string;
}) {
	return (
		<a
			href={href}
			className={cn(
				'hover:bg-accent hover:text-accent-foreground flex items-center justify-between border-y p-2 text-sm md:border-t-0',
				className,
			)}
		>
			<span className="font-medium">{title}</span>
			<ArrowRight className="h-4 w-4 transition-colors" />
		</a>
	);
}
