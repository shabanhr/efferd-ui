import { type RegistryItem } from 'shadcn/schema';

export const blocks: RegistryItem[] = [
	{
		name: 'auth-1',
		type: 'registry:block',
		description: 'Modern auth page with particle background and social login buttons.',
		registryDependencies: ['button', '@magicui/particles'],
		files: [
			{
				path: 'blocks/auth/1/auth-page.tsx',
				type: 'registry:component',
			},
			{
				path: '@/components/logo.tsx',
				type: 'registry:component',
			},
		],
		categories: ['auth'],
	},
	{
		name: 'auth-2',
		type: 'registry:block',
		description: 'Modern auth page with testimonial sidebar, social logins, and email signup.',
		registryDependencies: ['button', 'input-group'],
		dependencies: ['motion'],
		files: [
			{
				path: 'blocks/auth/2/auth-page.tsx',
				type: 'registry:component',
			},
			{
				path: 'blocks/auth/2/floating-paths.tsx',
				type: 'registry:component',
			},
			{
				path: '@/components/logo.tsx',
				type: 'registry:component',
			},
		],
		categories: ['auth'],
	},
	{
		name: 'contact-1',
		type: 'registry:block',
		description: 'Elegant contact page with office info, email, phone, and social links.',
		files: [
			{
				path: 'blocks/contact/1/contact.tsx',
				type: 'registry:component',
			},
		],
		categories: ['contact'],
	},
	{
		name: 'contact-2',
		type: 'registry:block',
		description: 'Modern contact card with info section and built-in form area.',
		files: [
			{
				path: 'blocks/contact/2/contact-card.tsx',
				type: 'registry:component',
			},
		],
		categories: ['contact'],
	},
	{
		name: 'feature-1',
		type: 'registry:block',
		description: 'Minimal feature card with icon, title, and subtle grid background.',
		registryDependencies: ['@magicui/grid-pattern'],
		dependencies: ['motion'],
		files: [
			{
				path: 'blocks/feature/1/feature-card.tsx',
				type: 'registry:component',
			},
		],
		categories: ['feature'],
	},
	{
		name: 'footer-1',
		type: 'registry:block',
		description: 'Clean footer with company links, resources, and social icons.',
		registryDependencies: ['button'],
		files: [
			{
				path: 'blocks/footer/1/footer.tsx',
				type: 'registry:component',
			},
			{
				path: '@/components/logo.tsx',
				type: 'registry:component',
			},
		],
		categories: ['footer'],
	},
	{
		name: 'footer-2',
		type: 'registry:block',
		description: 'Animated footer with link sections, brand logo, and social icons.',
		dependencies: ['motion'],
		files: [
			{
				path: 'blocks/footer/2/footer.tsx',
				type: 'registry:component',
			},
			{
				path: '@/components/logo.tsx',
				type: 'registry:component',
			},
		],
		categories: ['footer'],
	},
	{
		name: 'footer-3',
		type: 'registry:block',
		description: 'Grid-based footer with social cards, link groups, and copyright bar.',
		files: [
			{
				path: 'blocks/footer/3/footer.tsx',
				type: 'registry:component',
			},
		],
		categories: ['footer'],
	},
	{
		name: 'footer-4',
		type: 'registry:block',
		description: 'Multi-column footer with app store buttons, social icons, and link groups.',
		registryDependencies: ['button'],
		files: [
			{
				path: 'blocks/footer/4/footer.tsx',
				type: 'registry:component',
			},
		],
		categories: ['footer'],
	},
	{
		name: 'footer-5',
		type: 'registry:block',
		description:
			'Sticky layered footer with gradient background, social icons, and animated link groups.',
		dependencies: ['motion'],
		registryDependencies: ['button'],
		files: [
			{
				path: 'blocks/footer/5/sticky-footer.tsx',
				type: 'registry:component',
			},
			{
				path: '@/components/logo.tsx',
				type: 'registry:component',
			},
		],
		categories: ['footer'],
	},
	{
		name: 'header-1',
		type: 'registry:block',
		description:
			'Responsive sticky header with scroll blur effect, animated mobile menu, and adaptive navigation links.',
		registryDependencies: ['button'],
		files: [
			{
				path: 'blocks/header/1/header.tsx',
				type: 'registry:component',
			},
			{
				path: '@/components/logo.tsx',
				type: 'registry:component',
			},
			{
				path: '@/components/menu-toggle-icon.tsx',
				type: 'registry:component',
			},
			{
				path: '@/hooks/use-scroll.ts',
				type: 'registry:hook',
			},
		],
		categories: ['header'],
	},
	{
		name: 'header-2',
		type: 'registry:block',
		description:
			'Elegant responsive header with scroll-based styling, mobile drawer menu, and smooth transitions.',
		registryDependencies: ['button'],
		files: [
			{
				path: 'blocks/header/2/header.tsx',
				type: 'registry:component',
			},
			{
				path: '@/components/logo.tsx',
				type: 'registry:component',
			},
			{
				path: '@/components/menu-toggle-icon.tsx',
				type: 'registry:component',
			},
			{
				path: '@/hooks/use-scroll.ts',
				type: 'registry:hook',
			},
		],
		categories: ['header'],
	},
	{
		name: 'header-3',
		type: 'registry:block',
		description:
			'Feature-rich responsive header with scroll blur, animated mobile drawer, and nested navigation menus.',
		registryDependencies: ['button', 'navigation-menu'],
		files: [
			{
				path: 'blocks/header/3/header.tsx',
				type: 'registry:component',
			},
			{
				path: '@/components/logo.tsx',
				type: 'registry:component',
			},
			{
				path: '@/components/menu-toggle-icon.tsx',
				type: 'registry:component',
			},
			{
				path: '@/hooks/use-scroll.ts',
				type: 'registry:hook',
			},
		],
		categories: ['header'],
	},
	{
		name: 'image-gallery-1',
		type: 'registry:block',
		description: 'Masonry-style responsive gallery using random images with dynamic aspect ratios.',
		dependencies: ['motion'],
		registryDependencies: ['aspect-ratio'],
		files: [
			{
				path: 'blocks/image-gallery/1/image-gallery.tsx',
				type: 'registry:component',
			},
			{
				path: 'blocks/image-gallery/1/lazy-image.tsx',
				type: 'registry:component',
			},
		],
		categories: ['image-gallery'],
	},
	{
		name: 'pricing-1',
		type: 'registry:block',
		description:
			'Responsive pricing section with frequency toggle, tooltips, and highlightable plans.',
		dependencies: ['motion'],
		registryDependencies: ['button', 'tooltip'],
		files: [
			{
				path: 'blocks/pricing/1/pricing-section.tsx',
				type: 'registry:component',
			},
			{
				path: 'blocks/pricing/1/frequency-toggle.tsx',
				type: 'registry:component',
			},
		],
		categories: ['pricing'],
	},
	{
		name: 'pricing-2',
		type: 'registry:block',
		description:
			'Modular pricing card UI kit with reusable glass-style components and typography helpers.',
		files: [
			{
				path: '@/components/pricing-card.tsx',
				type: 'registry:component',
			},
		],
		categories: ['pricing'],
	},
	{
		name: 'pricing-3',
		type: 'registry:block',
		description: 'Three-tier pricing grid with interactive plan cards, badges, and feature lists.',
		registryDependencies: ['button'],
		files: [
			{
				path: 'blocks/pricing/3/pricing-section.tsx',
				type: 'registry:component',
			},
			{
				path: '@/components/pricing-card.tsx',
				type: 'registry:component',
			},
		],
		categories: ['pricing'],
	},
	{
		name: 'pricing-4',
		type: 'registry:block',
		description:
			'Animated dual pricing cards with motion effects, discount badges, and trust indicator.',
		dependencies: ['motion'],
		registryDependencies: ['button', 'badge'],
		files: [
			{
				path: 'blocks/pricing/4/pricing-section.tsx',
				type: 'registry:component',
			},
		],
		categories: ['pricing'],
	},
	{
		name: 'testimonials-1',
		type: 'registry:block',
		description:
			'Infinite vertical testimonial scroller with smooth motion and repeated card animation.',
		dependencies: ['motion'],
		files: [
			{
				path: 'blocks/testimonials/1/testimonials-columns.tsx',
				type: 'registry:component',
			},
		],
		categories: ['testimonials'],
	},
	{
		name: 'testimonials-2',
		type: 'registry:block',
		description:
			'Responsive testimonial grid with smooth motion reveal, subtle gradients, and elegant card design.',
		dependencies: ['motion'],
		registryDependencies: ['@magicui/grid-pattern'],
		files: [
			{
				path: 'blocks/testimonials/2/testimonials-section.tsx',
				type: 'registry:component',
			},
		],
		categories: ['testimonials'],
	},
];
