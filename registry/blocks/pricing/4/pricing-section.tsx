'use client';
import React from 'react';
import { PlusIcon, ShieldCheckIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function PricingSection() {
	return (
		<section id="pricing" className="mx-auto w-full max-w-5xl space-y-5">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
				viewport={{ once: true }}
				className="mx-auto max-w-xl space-y-5"
			>
				<div className="flex justify-center">
					<div className="rounded-md border px-4 py-1 text-sm">Pricing</div>
				</div>
				<h2 className="mt-5 text-center text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
					Pricing Based on Your Success
				</h2>
				<p className="text-muted-foreground mt-5 text-center text-sm md:text-base">
					We offer a single price for all our services. We believe that pricing
					is a critical component of any successful business.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
				viewport={{ once: true }}
				className="mx-auto w-full max-w-2xl space-y-2"
			>
				<div className="bg-background relative grid border p-4 md:grid-cols-2">
					<PlusIcon className="text-foreground absolute -top-2 -left-2 size-4" />
					<PlusIcon className="text-foreground absolute -top-2 -right-2 size-4" />
					<PlusIcon className="text-foreground absolute -bottom-2 -left-2 size-4" />
					<PlusIcon className="text-foreground absolute -right-2 -bottom-2 size-4" />

					<div className="w-full px-4 pt-5 pb-4">
						<div className="space-y-1">
							<div className="flex items-center justify-between">
								<h3 className="leading-none font-semibold">Monthly</h3>
								<div className="flex items-center gap-x-1">
									<span className="text-muted-foreground text-sm line-through">
										$8.99
									</span>
									<Badge variant="secondary">11% off</Badge>
								</div>
							</div>
							<p className="text-muted-foreground text-sm">
								Best value for growing businesses!
							</p>
						</div>
						<div className="mt-10 space-y-4">
							<div className="text-muted-foreground flex items-end gap-0.5 text-xl">
								<span>$</span>
								<span className="text-foreground -mb-0.5 text-4xl font-extrabold tracking-tighter md:text-4xl">
									7.99
								</span>
								<span>/month</span>
							</div>
							<Button className="w-full" variant="outline" asChild>
								<a href="#">Start Your Journey</a>
							</Button>
						</div>
					</div>
					<div className="bg-card dark:bg-card/80 relative w-full rounded-md border p-4 shadow">
						<div className="space-y-1">
							<div className="flex items-center justify-between">
								<h3 className="leading-none font-semibold">Yearly</h3>
								<div className="flex items-center gap-x-1">
									<span className="text-muted-foreground text-sm line-through">
										$8.99
									</span>
									<Badge>22% off</Badge>
								</div>
							</div>
							<p className="text-muted-foreground text-sm">
								Unlock savings with an annual commitment!
							</p>
						</div>
						<div className="mt-10 space-y-4">
							<div className="text-muted-foreground flex items-end text-xl">
								<span>$</span>
								<span className="text-foreground -mb-0.5 text-4xl font-extrabold tracking-tighter md:text-4xl">
									6.99
								</span>
								<span>/month</span>
							</div>
							<Button className="w-full" asChild>
								<a href="#">Get Started Now</a>
							</Button>
						</div>
					</div>
				</div>

				<div className="text-muted-foreground flex items-center justify-center gap-x-2 text-sm">
					<ShieldCheckIcon className="size-4" />
					<span>Access to all features with no hidden fees</span>
				</div>
			</motion.div>
		</section>
	);
}
