'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import * as PricingCard from '@/components/pricing-card';
import { CheckCircle2, XCircleIcon, Users } from 'lucide-react';

export default function Page() {
	const features = [
		'Up to 3 projects',
		'Basic templates',
		'Community support',
		'1GB storage',
	];

	const lockedFeatures = [
		'Unlimited projects',
		'Premium templates',
		'Priority support',
	];

	const handleClick = (plan: string) => {
		alert(`Selected ${plan} plan!`);
	};

	return (
		<main
			className={cn(
				'relative min-h-svh w-full overflow-hidden',
				'flex items-center justify-center p-4',
			)}
		>
			{/* Subtle dotted grid */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0"
				style={{
					backgroundImage:
						'radial-gradient(rgba(255,255,255,0.08) 0.8px, transparent 0.8px)',
					backgroundSize: '14px 14px',
				}}
			/>

			{/* Radial spotlight */}
			<div
				aria-hidden="true"
				className={cn(
					'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
					'bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]',
					'blur-[30px]',
				)}
			/>
			<PricingCard.Card>
				<PricingCard.Header>
					<PricingCard.Plan>
						<PricingCard.PlanName>
							<Users aria-hidden="true" />
							<span className="text-muted-foreground">Starter</span>
						</PricingCard.PlanName>
						<PricingCard.Badge>For Individuals</PricingCard.Badge>
					</PricingCard.Plan>
					<PricingCard.Price>
						<PricingCard.MainPrice>$10</PricingCard.MainPrice>
						<PricingCard.Period>/ month</PricingCard.Period>
						<PricingCard.OriginalPrice className="ml-auto">
							$12
						</PricingCard.OriginalPrice>
					</PricingCard.Price>
					<Button
						className={cn(
							'w-full font-semibold text-white',
							'bg-gradient-to-b from-orange-500 to-orange-600 shadow-[0_10px_25px_rgba(255,115,0,0.3)]',
						)}
						onClick={() => handleClick('Starter')}
					>
						Get Started
					</Button>
				</PricingCard.Header>
				<PricingCard.Body>
					<PricingCard.List>
						{features.map((item) => (
							<PricingCard.ListItem>
								<span className="mt-0.5">
									<CheckCircle2
										className="h-4 w-4 text-green-500"
										aria-hidden="true"
									/>
								</span>
								<span>{item}</span>
							</PricingCard.ListItem>
						))}
					</PricingCard.List>
					<PricingCard.Separator>Pro features</PricingCard.Separator>
					<PricingCard.List>
						{lockedFeatures.map((item, i) => (
							<PricingCard.ListItem key={i} className="opacity-75">
								<span className="mt-0.5">
									<XCircleIcon
										className="text-destructive h-4 w-4"
										aria-hidden="true"
									/>
								</span>
								<span>{item}</span>
							</PricingCard.ListItem>
						))}
					</PricingCard.List>
				</PricingCard.Body>
			</PricingCard.Card>
		</main>
	);
}
