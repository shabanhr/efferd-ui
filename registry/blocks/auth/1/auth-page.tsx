import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, GithubIcon } from 'lucide-react';

// https://magicui.design/docs/components/particles
import { Particles } from '@/components/ui/particles';

import { WordmarkIcon } from '@/components/logo';

export function AuthPage() {
	return (
		<div className="relative w-full md:h-screen md:overflow-hidden">
			<Particles
				color="#666666"
				quantity={120}
				ease={20}
				className="absolute inset-0"
			/>
			<div
				aria-hidden
				className="absolute inset-0 isolate -z-10 opacity-50 contain-strict dark:opacity-100"
			>
				<div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full" />
				<div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />
				<div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full" />
			</div>
			<div className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-4">
				<Button variant="ghost" className="absolute top-4 left-4" asChild>
					<a href="#">
						<ChevronLeftIcon />
						Home
					</a>
				</Button>

				<div className="mx-auto space-y-4 sm:w-sm">
					<WordmarkIcon className="h-5" />
					<div className="flex flex-col space-y-1">
						<h1 className="text-2xl font-bold tracking-wide">
							Sign In or Join Now!
						</h1>
						<p className="text-muted-foreground text-base">
							login or create your asme account.
						</p>
					</div>
					<div className="space-y-2">
						<Button type="button" size="lg" className="w-full">
							<GoogleIcon />
							Continue with Google
						</Button>
						<Button type="button" size="lg" className="w-full">
							<GithubIcon strokeWidth={2.5} />
							Continue with GitHub
						</Button>
					</div>
					<p className="text-muted-foreground mt-8 text-sm">
						By clicking continue, you agree to our{' '}
						<a
							href="#"
							className="hover:text-primary underline underline-offset-4"
						>
							Terms of Service
						</a>{' '}
						and{' '}
						<a
							href="#"
							className="hover:text-primary underline underline-offset-4"
						>
							Privacy Policy
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
}

const GoogleIcon = (props: React.ComponentProps<'svg'>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		{...props}
	>
		<g>
			<path d="M12.479,14.265v-3.279h11.049c0.108,0.571,0.164,1.247,0.164,1.979c0,2.46-0.672,5.502-2.84,7.669   C18.744,22.829,16.051,24,12.483,24C5.869,24,0.308,18.613,0.308,12S5.869,0,12.483,0c3.659,0,6.265,1.436,8.223,3.307L18.392,5.62   c-1.404-1.317-3.307-2.341-5.913-2.341C7.65,3.279,3.873,7.171,3.873,12s3.777,8.721,8.606,8.721c3.132,0,4.916-1.258,6.059-2.401   c0.927-0.927,1.537-2.251,1.777-4.059L12.479,14.265z" />
		</g>
	</svg>
);
