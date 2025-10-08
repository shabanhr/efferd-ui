'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

import { AtSignIcon, ChevronLeftIcon, GithubIcon } from 'lucide-react';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from '@/components/ui/input-group';
import { WordmarkIcon } from '@/components/logo';
import { FloatingPaths } from './floating-paths';

export function AuthPage() {
	return (
		<main className="relative md:h-screen md:overflow-hidden lg:grid lg:grid-cols-2">
			<div className="bg-muted/60 relative hidden h-full flex-col border-r p-10 lg:flex">
				<div className="from-background absolute inset-0 z-10 bg-gradient-to-t to-transparent" />
				<WordmarkIcon className="mr-auto h-5" />

				<div className="z-10 mt-auto">
					<blockquote className="space-y-2">
						<p className="text-xl">
							&ldquo;This Platform has helped me to save time and serve my
							clients faster than ever before.&rdquo;
						</p>
						<footer className="font-mono text-sm font-semibold">
							~ Ali Hassan
						</footer>
					</blockquote>
				</div>
				<div className="absolute inset-0">
					<FloatingPaths position={1} />
					<FloatingPaths position={-1} />
				</div>
			</div>
			<div className="relative flex min-h-screen flex-col justify-center p-4">
				<div
					aria-hidden
					className="absolute inset-0 isolate -z-10 opacity-60 contain-strict"
				>
					<div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 right-0 h-320 w-140 -translate-y-87.5 rounded-full" />
					<div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 right-0 h-320 w-60 [translate:5%_-50%] rounded-full" />
					<div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 right-0 h-320 w-60 -translate-y-87.5 rounded-full" />
				</div>
				<Button variant="ghost" className="absolute top-7 left-5" asChild>
					<a href="#">
						<ChevronLeftIcon />
						Home
					</a>
				</Button>
				<div className="mx-auto space-y-4 sm:w-sm">
					<WordmarkIcon className="h-5 lg:hidden" />
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
							<AppleIcon />
							Continue with Apple
						</Button>
						<Button type="button" size="lg" className="w-full">
							<GithubIcon />
							Continue with GitHub
						</Button>
					</div>

					<div className="flex w-full items-center justify-center">
						<div className="bg-border h-px w-full" />
						<span className="text-muted-foreground px-2 text-xs">OR</span>
						<div className="bg-border h-px w-full" />
					</div>

					<form className="space-y-2">
						<p className="text-muted-foreground text-start text-xs">
							Enter your email address to sign in or create an account
						</p>
						<InputGroup>
							<InputGroupInput
								type="email"
								placeholder="your.email@example.com"
							/>
							<InputGroupAddon>
								<AtSignIcon />
							</InputGroupAddon>
						</InputGroup>

						<Button type="button" className="w-full">
							<span>Continue With Email</span>
						</Button>
					</form>
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
		</main>
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

function AppleIcon({
	fill = 'currentColor',
	...props
}: React.ComponentProps<'svg'>) {
	return (
		<svg viewBox="0 0 24 24" fill={fill} {...props}>
			<g id="_Group_2">
				<g id="_Group_3">
					<path
						id="_Path_"
						d="M18.546,12.763c0.024-1.87,1.004-3.597,2.597-4.576c-1.009-1.442-2.64-2.323-4.399-2.378    c-1.851-0.194-3.645,1.107-4.588,1.107c-0.961,0-2.413-1.088-3.977-1.056C6.122,5.927,4.25,7.068,3.249,8.867    c-2.131,3.69-0.542,9.114,1.5,12.097c1.022,1.461,2.215,3.092,3.778,3.035c1.529-0.063,2.1-0.975,3.945-0.975    c1.828,0,2.364,0.975,3.958,0.938c1.64-0.027,2.674-1.467,3.66-2.942c0.734-1.041,1.299-2.191,1.673-3.408    C19.815,16.788,18.548,14.879,18.546,12.763z"
					/>
					<path
						id="_Path_2"
						d="M15.535,3.847C16.429,2.773,16.87,1.393,16.763,0c-1.366,0.144-2.629,0.797-3.535,1.829    c-0.895,1.019-1.349,2.351-1.261,3.705C13.352,5.548,14.667,4.926,15.535,3.847z"
					/>
				</g>
			</g>
		</svg>
	);
}
