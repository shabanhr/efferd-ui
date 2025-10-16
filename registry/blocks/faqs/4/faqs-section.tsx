'use client';
import React from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '@/components/ui/accordion';
import { CreditCard, Feather, LayoutGrid, LifeBuoy, Power } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function FaqsSection() {
	const categories = [
		{ icon: LayoutGrid, id: 'all', label: 'All Topics' },
		{ icon: Power, id: 'getting-started', label: 'Getting Started' },
		{ icon: Feather, id: 'features', label: 'Features' },
		{ icon: CreditCard, id: 'billing', label: 'Billing' },
		{ icon: LifeBuoy, id: 'support', label: 'Support' },
	];

	const [activeCategory, setActiveCategory] = React.useState('all');

	const filtered = faqs.filter((faq) => {
		const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
		return matchesCategory;
	});

	const currentCategory = React.useMemo(
		() => categories.find((cat) => cat.id === activeCategory),
		[activeCategory],
	);

	return (
		<section className="mx-auto min-h-screen w-full max-w-5xl">
			<div className="flex flex-col items-center justify-center gap-4 px-4 pt-12 pb-16">
				<h2 className="font-mono text-4xl font-bold text-balance md:text-5xl lg:font-black">
					FaQs
				</h2>
				<p className="text-muted-foreground">Your questions answered here.</p>
			</div>
			<div className="relative grid min-h-full grid-cols-1 md:grid-cols-3 py-12">
				<div className="flex h-full items-start justify-center border-b pb-2 md:border-b-0">
					<div className="flex w-max flex-wrap justify-start md:flex-col items-start md:justify-center gap-2">
						{categories.map((cat) => (
							<Button
								key={cat.id}
								onClick={() => setActiveCategory(cat.id)}
								variant={activeCategory === cat.id ? 'outline' : 'ghost'}
								className={cn("border border-transparent", activeCategory === cat.id && "border-border")}
							>
								<cat.icon className="size-4" />
								{cat.label}
							</Button>
						))}
					</div>
				</div>
				<div className="col-span-2 space-y-5 px-4 py-5">
					{currentCategory && (
						<div className="flex items-center gap-2">
							<currentCategory.icon className="size-4" />
							<span className="font-medium">{currentCategory.label}</span>
						</div>
					)}
					<Accordion type="single" collapsible defaultValue="1" className="space-y-2">
						{filtered.map((item) => (
							<AccordionItem
								value={item.id.toString()}
								key={item.id}
								className="border-b-0"
							>
								<AccordionTrigger className="bg-card shadow px-4 border hover:no-underline">
									{item.title}
								</AccordionTrigger>

								<AccordionContent className="px-4 py-4 text-muted-foreground">
									{item.content}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}

const faqs = [
	{
		id: 1,
		category: 'getting-started',
		title: 'How do I create my first project?',
		content:
			'Click the "New Project" button in your dashboard, choose a template or start from scratch, customize your project name and settings, and you\'ll be ready to start building in seconds.',
	},
	{
		id: 2,
		category: 'getting-started',
		title: 'What are the system requirements?',
		content:
			'Efferd works on any modern web browser including Chrome, Firefox, Safari, and Edge. No special software installation is required—just visit our platform and log in.',
	},
	{
		id: 3,
		category: 'features',
		title: 'Can I use Efferd for team collaboration?',
		content:
			'Absolutely! Invite team members, set role-based permissions, leave comments on components, and track changes in real-time. Our collaboration features are built for teams of all sizes.',
	},
	{
		id: 4,
		category: 'features',
		title: 'Is there a component library?',
		content:
			'Yes, Efferd includes a comprehensive library of pre-built, customizable components. You can also create your own reusable components and share them across your projects.',
	},
	{
		id: 5,
		category: 'features',
		title: 'Do you support custom integrations?',
		content:
			'We support integrations with GitHub, GitLab, Figma, Slack, and major cloud providers. For custom integrations, contact our support team to discuss your needs.',
	},
	{
		id: 6,
		category: 'billing',
		title: 'What payment methods do you accept?',
		content:
			'We accept all major credit cards, PayPal, and bank transfers for annual plans. Invoicing is available for enterprise customers.',
	},
	{
		id: 7,
		category: 'billing',
		title: 'Can I change my plan anytime?',
		content:
			"Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly.",
	},
	{
		id: 8,
		category: 'support',
		title: 'How do I report a bug?',
		content:
			'Use the in-app feedback button or email support@efferd.com with details about the issue. Our team typically responds within 24 hours.',
	},
	{
		id: 9,
		category: 'support',
		title: 'Do you offer training or onboarding?',
		content:
			'We provide video tutorials, documentation, and live webinars. Premium plans include personalized onboarding sessions with our support team.',
	},
];
