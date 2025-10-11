'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { WordmarkIcon } from '@/components/logo';
import { useScroll } from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/menu-toggle-icon';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{
			label: 'Features',
			href: '#',
		},
		{
			label: 'Pricing',
			href: '#',
		},
		{
			label: 'About',
			href: '#',
		},
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn('sticky top-0 z-50 w-full border-b border-transparent', {
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg':
					scrolled && !open,
				'bg-background/90': open,
			})}
		>
			<nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
				<div className="hover:bg-accent rounded-md p-2">
					<WordmarkIcon className="h-4" />
				</div>
				<div className="hidden items-center gap-2 md:flex">
					{links.map((link, i) => (
						<a key={i} className={buttonVariants({ variant: 'ghost' })} href={link.href}>
							{link.label}
						</a>
					))}
					<Button variant="outline">Sign In</Button>
					<Button>Get Started</Button>
				</div>
				<Button size="icon" variant="outline" onClick={() => setOpen(!open)} className="md:hidden">
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>

			<div
				className={cn(
					'bg-background/90 fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden',
					open ? 'block' : 'hidden',
				)}
			>
				<div
					data-slot={open ? 'open' : 'closed'}
					className={cn(
						'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
						'flex h-full w-full flex-col justify-between gap-y-2 p-4',
					)}
				>
					<div className="grid gap-y-2">
						{links.map((link) => (
							<a
								key={link.label}
								className={buttonVariants({
									variant: 'ghost',
									className: 'justify-start',
								})}
								href={link.href}
							>
								{link.label}
							</a>
						))}
					</div>
					<div className="flex flex-col gap-2">
						<Button variant="outline" className="w-full">
							Sign In
						</Button>
						<Button className="w-full">Get Started</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
