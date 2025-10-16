import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '@/components/ui/accordion';
import { PlusIcon } from 'lucide-react';

export function FaqsSection() {
	return (
		<section className="mx-auto grid min-h-screen w-full max-w-5xl grid-cols-1 md:grid-cols-2 lg:border-x">
			<div className="px-4 pt-12 pb-6">
				<div className="space-y-5">
					<h2 className="text-4xl font-bold text-balance md:text-6xl lg:font-black">
						Frequently Asked Questions
					</h2>
					<p className="text-muted-foreground">
						Quick answers to common questions about Efferd. Open any question to learn more.
					</p>
					<p className="text-muted-foreground">
						{"Can't find what you're looking for? "}
						<a href="#" className="text-primary hover:underline">
							Contact Us
						</a>
					</p>
				</div>
			</div>
			<div className="relative place-content-center">
				{/* vertical guide line */}
				<div
					className="bg-border pointer-events-none absolute inset-y-0 left-3 h-full w-px"
					aria-hidden="true"
				/>

				<Accordion type="single" collapsible>
					{faqs.map((item) => (
						<AccordionItem
							value={item.id}
							key={item.id}
							className="group relative border-b pl-5 first:border-t last:border-b"
						>
							{/*  plus */}
							<PlusIcon
								className="text-muted-foreground pointer-events-none absolute -bottom-[5.5px] left-[12.5px] size-2.5 -translate-x-1/2 group-last:hidden"
								aria-hidden="true"
							/>

							<AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline">
								{item.title}
							</AccordionTrigger>

							<AccordionContent className="text-muted-foreground px-4 pb-4">
								{item.content}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}

const faqs = [
	{
		id: 'item-1',
		title: 'What is Efferd?',
		content:
			'Efferd is a collection of beautifully crafted Shadcn UI blocks and components, designed to help developers build modern websites with ease.',
	},
	{
		id: 'item-2',
		title: 'Who can benefit from Efferd?',
		content:
			'Efferd is built for founders, product teams, and agencies that want to accelerate idea validation and delivery.',
	},
	{
		id: 'item-3',
		title: 'What features does Efferd include?',
		content:
			'Efferd offers a collaborative workspace where you can design and build beautiful web applications, with reusable UI blocks, deployment automation, and comprehensive analytics all in one place. With Efferd, you can streamline your team’s workflow and deliver high-quality websites quickly and efficiently.',
	},
	{
		id: 'item-4',
		title: 'Can I customize components in Efferd?',
		content:
			'Yes. Efferd offers editable design systems and code scaffolding so you can tailor blocks to your brand and workflow.',
	},
	{
		id: 'item-5',
		title: 'Does Efferd integrate with my existing tools?',
		content:
			'Efferd connects with popular source control, design tools, and cloud providers to fit into your current stack.',
	},
	{
		id: 'item-6',
		title: 'How do I get support while using Efferd?',
		content:
			'You can access detailed docs, community forums, and dedicated customer success channels for help at any time.',
	},
	{
		id: 'item-7',
		title: 'How do I get started with Efferd?',
		content:
			'You can access detailed docs, community forums, and dedicated customer success channels for help at any time.',
	},
];
