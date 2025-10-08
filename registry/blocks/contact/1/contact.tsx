'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import {
	LucideIcon,
	Mail,
	MapPin,
	Phone,
	GithubIcon,
	TwitterIcon,
	LinkedinIcon,
	InstagramIcon,
} from 'lucide-react';

const APP_EMAIL = 'mail@example.com';
const APP_PHONE = '+92 300 1234567';
const APP_PHONE_2 = '+92 321 9876543';

export function Contact() {
	const socialLinks = [
		{
			icon: GithubIcon,
			href: '#',
			label: 'GitHub',
		},
		{
			icon: TwitterIcon,
			href: '#',
			label: 'Twitter',
		},
		{
			icon: LinkedinIcon,
			href: '#',
			label: 'LinkedIn',
		},
		{
			icon: InstagramIcon,
			href: '#',
			label: 'Instagram',
		},
	];

	return (
		<div className="mx-auto h-full max-w-5xl lg:border-x">
			<div
				aria-hidden
				className="absolute inset-0 isolate -z-10 opacity-80 contain-strict"
			>
				<div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full" />
				<div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />
				<div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full" />
			</div>
			<div className="flex grow flex-col justify-center px-4 py-12">
				<h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>
				<p className="text-muted-foreground mb-5 text-base">
					Contact the support team at efferd.
				</p>
			</div>
			<BorderSeparator />
			<div className="grid md:grid-cols-3">
				<Box
					icon={Mail}
					title="Email"
					description="We respond to all emails within 24 hours."
				>
					<a
						href={`mailto:${APP_EMAIL}`}
						className="font-mono text-sm font-medium tracking-wide hover:underline"
					>
						{APP_EMAIL}
					</a>
				</Box>
				<Box
					icon={MapPin}
					title="Office"
					description="Drop by our office for a chat."
				>
					<span className="font-mono text-sm font-medium tracking-wide">
						Office # 100, 101 Second Floor Kohinoor 1, Faisalabad, Pakistan
					</span>
				</Box>
				<Box
					icon={Phone}
					title="Phone"
					description="We're available Mon-Fri, 9am-5pm."
					className="border-b-0 md:border-r-0"
				>
					<div>
						<a
							href={`tel:${APP_PHONE}`}
							className="block font-mono text-sm font-medium tracking-wide hover:underline"
						>
							{APP_PHONE}
						</a>
						<a
							href={`tel:${APP_PHONE_2}`}
							className="block font-mono text-sm font-medium tracking-wide hover:underline"
						>
							{APP_PHONE_2}
						</a>
					</div>
				</Box>
			</div>
			<BorderSeparator />
			<div className="z-1 flex h-full min-h-[320px] flex-col items-center justify-center gap-4">
				<h2 className="text-center text-3xl font-bold md:text-4xl">
					Find us online
				</h2>
				<div className="flex flex-wrap items-center gap-2">
					{socialLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-card hover:bg-accent flex items-center gap-x-2 rounded-full border px-3 py-1.5 shadow"
						>
							<link.icon className="size-4" />
							<span className="font-mono text-sm font-medium">
								{link.label}
							</span>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}

function BorderSeparator() {
	return <div className="absolute inset-x-0 h-px w-full border-b" />;
}

type ContactBox = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	title: string;
	description: string;
};

function Box({
	title,
	description,
	className,
	children,
	...props
}: ContactBox) {
	return (
		<div
			className={cn(
				'flex flex-col justify-between border-b md:border-r md:border-b-0',
				className,
			)}
		>
			<div className="bg-muted/40 flex items-center gap-x-3 border-b p-4">
				<props.icon className="text-muted-foreground size-5" strokeWidth={1} />
				<h2 className="font-heading text-lg font-medium tracking-wider">
					{title}
				</h2>
			</div>
			<div className="flex items-center gap-x-2 p-4 py-12">{children}</div>
			<div className="border-t p-4">
				<p className="text-muted-foreground text-sm">{description}</p>
			</div>
		</div>
	);
}
