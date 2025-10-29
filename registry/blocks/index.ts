import type { RegistryItem } from "shadcn/schema";

export const blocks: RegistryItem[] = [
  {
    name: "auth-1",
    type: "registry:block",
    description:
      "Modern auth page with particle background and social login buttons.",
    registryDependencies: ["button", "@magicui/particles"],
    files: [
      {
        path: "blocks/auth/1/auth-page.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["auth"],
  },
  {
    name: "auth-2",
    type: "registry:block",
    description:
      "Modern auth page with testimonial sidebar, social logins, and email signup.",
    registryDependencies: ["button", "input-group"],
    dependencies: ["motion"],
    files: [
      {
        path: "blocks/auth/2/auth-page.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/auth/2/floating-paths.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["auth"],
  },
  {
    name: "contact-1",
    type: "registry:block",
    description:
      "Elegant contact page with office info, email, phone, and social links.",
    files: [
      {
        path: "blocks/contact/1/contact.tsx",
        type: "registry:component",
      },
    ],
    categories: ["contact"],
  },
  {
    name: "contact-2",
    type: "registry:block",
    description:
      "Modern contact card with info section and built-in form area.",
    files: [
      {
        path: "blocks/contact/2/contact-card.tsx",
        type: "registry:component",
      },
    ],
    categories: ["contact"],
    meta: {
      height: "60vh",
    },
  },
  {
    name: "cta-1",
    type: "registry:block",
    description:
      "Centered call-to-action bar with bold heading and dual action buttons.",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/cta/1/cta.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    meta: {
      height: "40vh",
    },
  },
  {
    name: "cta-2",
    type: "registry:block",
    description:
      "Minimal call-to-action section with headline, short description, and dual buttons for sales contact and getting started.",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/cta/2/cta.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    meta: {
      height: "40vh",
    },
  },
  {
    name: "cta-3",
    type: "registry:block",
    description:
      "Stylish call-to-action block featuring bordered layout, decorative icons, and clear buttons for contacting sales or getting started.",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/cta/3/cta.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    meta: {
      height: "40vh",
    },
  },
  {
    name: "cta-4",
    type: "registry:block",
    description:
      "Modern call-to-action card with rounded edges, subtle shadow, and dual buttons for contacting sales or getting started.",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/cta/4/cta.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    meta: {
      height: "40vh",
    },
  },
  {
    name: "cta-5",
    type: "registry:block",
    description:
      "Newsletter subscription section with email input, submit button, and expert avatars for added trust and engagement.",
    registryDependencies: ["button", "input-group"],
    files: [
      {
        path: "blocks/cta/5/cta.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    meta: {
      height: "40vh",
    },
  },
  {
    name: "feature-1",
    type: "registry:block",
    description:
      "Minimal feature card with icon, title, and subtle grid background.",
    registryDependencies: ["@magicui/grid-pattern"],
    dependencies: ["motion"],
    files: [
      {
        path: "blocks/feature/1/feature-card.tsx",
        type: "registry:component",
      },
    ],
    categories: ["feature"],
    meta: {
      height: "80vh",
    },
  },
  {
    name: "faqs-1",
    type: "registry:block",
    description:
      "Elegant FAQ section with accordion-style questions, smooth transitions, and clear support call-to-action.",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "blocks/faqs/1/faqs-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faqs"],
  },
  {
    name: "faqs-2",
    type: "registry:block",
    description:
      "Split-screen FAQ layout with bordered sections, interactive accordion, and a clean call-to-action footer.",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "blocks/faqs/2/faqs-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faqs"],
  },
  {
    name: "faqs-3",
    type: "registry:block",
    description:
      "Two-column FAQ section featuring bordered layout, vertical guide line, and elegant accordion interactions.",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "blocks/faqs/3/faqs-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faqs"],
  },
  {
    name: "faqs-4",
    type: "registry:block",
    description:
      "Multi-category FAQ section with sidebar filters, adaptive accordion layout, and elegant interactive transitions.",
    registryDependencies: ["accordion", "button"],
    files: [
      {
        path: "blocks/faqs/4/faqs-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faqs"],
  },
  {
    name: "faqs-5",
    type: "registry:block",
    description:
      "Responsive FAQ section with filters, search, and accordions for quick answers.",
    registryDependencies: ["accordion", "button", "input-group", "empty"],
    files: [
      {
        path: "blocks/faqs/5/faqs-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faqs"],
  },
  {
    name: "footer-1",
    type: "registry:block",
    description:
      "Clean footer with company links, resources, and social icons.",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/footer/1/footer.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta: {
      height: "40vh",
    },
  },
  {
    name: "footer-2",
    type: "registry:block",
    description:
      "Animated footer with link sections, brand logo, and social icons.",
    dependencies: ["motion"],
    files: [
      {
        path: "blocks/footer/2/footer.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta: {
      height: "50vh",
    },
  },
  {
    name: "footer-3",
    type: "registry:block",
    description:
      "Grid-based footer with social cards, link groups, and copyright bar.",
    files: [
      {
        path: "blocks/footer/3/footer.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta: {
      height: "50vh",
    },
  },
  {
    name: "footer-4",
    type: "registry:block",
    description:
      "Multi-column footer with app store buttons, social icons, and link groups.",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/footer/4/footer.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta: {
      height: "70vh",
    },
  },
  {
    name: "footer-5",
    type: "registry:block",
    description:
      "Sticky layered footer with gradient background, social icons, and animated link groups.",
    dependencies: ["motion"],
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/footer/5/sticky-footer.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
  },
  {
    name: "header-1",
    type: "registry:block",
    description:
      "Responsive sticky header with scroll blur effect, animated mobile menu, and adaptive navigation links.",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/header/1/header.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/menu-toggle-icon.tsx",
        type: "registry:component",
      },
      {
        path: "@/hooks/use-scroll.ts",
        type: "registry:hook",
      },
    ],
    categories: ["header"],
    meta: {
      height: "50vh",
    },
  },
  {
    name: "header-2",
    type: "registry:block",
    description:
      "Elegant responsive header with scroll-based styling, mobile drawer menu, and smooth transitions.",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/header/2/header.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/menu-toggle-icon.tsx",
        type: "registry:component",
      },
      {
        path: "@/hooks/use-scroll.ts",
        type: "registry:hook",
      },
    ],
    categories: ["header"],
    meta: {
      height: "50vh",
    },
  },
  {
    name: "header-3",
    type: "registry:block",
    description:
      "Feature-rich responsive header with scroll blur, animated mobile drawer, and nested navigation menus.",
    registryDependencies: ["button", "navigation-menu"],
    files: [
      {
        path: "blocks/header/3/header.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/menu-toggle-icon.tsx",
        type: "registry:component",
      },
      {
        path: "@/hooks/use-scroll.ts",
        type: "registry:hook",
      },
    ],
    categories: ["header"],
    meta: {
      height: "60vh",
    },
  },
  {
    name: "image-gallery-1",
    type: "registry:block",
    description:
      "Masonry-style responsive gallery using random images with dynamic aspect ratios.",
    dependencies: ["motion"],
    registryDependencies: ["aspect-ratio"],
    files: [
      {
        path: "blocks/image-gallery/1/image-gallery.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/image-gallery/1/lazy-image.tsx",
        type: "registry:component",
      },
    ],
    categories: ["image-gallery"],
  },
  {
    name: "logo-cloud-1",
    type: "registry:block",
    description:
      "Simple logo grid displaying brand icons in a clean, bordered layout with light and dark mode support.",
    files: [
      {
        path: "blocks/logo-cloud/1/logo-cloud.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logo-cloud"],
    meta: {
      height: "50vh",
    },
  },
  {
    name: "logo-cloud-2",
    type: "registry:block",
    description:
      "Stylish logo grid featuring top tech brands with decorative plus icons and dynamic borders for a modern visual layout.",
    files: [
      {
        path: "blocks/logo-cloud/2/logo-cloud.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logo-cloud"],
    meta: {
      height: "50vh",
    },
  },
  {
    name: "logo-cloud-3",
    type: "registry:block",
    description:
      "Smooth infinite-scrolling logo showcase highlighting trusted brands with gradient masking and elegant motion effects.",
    registryDependencies: [
      "https://motion-primitives.com/c/infinite-slider.json",
    ],
    files: [
      {
        path: "blocks/logo-cloud/3/logo-cloud.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logo-cloud"],
    meta: {
      height: "50vh",
    },
  },
  {
    name: "logo-cloud-4",
    type: "registry:block",
    description:
      "Animated logo carousel with soft edge blurs and gradient accents for a sleek, modern brand showcase.",
    registryDependencies: [
      "https://motion-primitives.com/c/infinite-slider.json",
      "https://motion-primitives.com/c/progressive-blur.json",
    ],
    files: [
      {
        path: "blocks/logo-cloud/4/logo-cloud.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logo-cloud"],
    meta: {
      height: "40vh",
    },
  },
  {
    name: "not-found-1",
    type: "registry:block",
    description:
      "Minimal 404 error page with bold typography, subtle borders, and clear navigation actions.",
    registryDependencies: ["button", "empty"],
    files: [
      {
        path: "blocks/not-found/1/not-found.tsx",
        type: "registry:component",
      },
    ],
    categories: ["not-found"],
  },
  {
    name: "not-found-2",
    type: "registry:block",
    description:
      "Animated 404 page with floating gradient orbs, soft motion effects, and clean centered layout.",
    registryDependencies: ["button", "empty"],
    dependencies: ["motion"],
    files: [
      {
        path: "blocks/not-found/2/not-found.tsx",
        type: "registry:component",
      },
    ],
    categories: ["not-found"],
  },
  {
    name: "pricing-1",
    type: "registry:block",
    description:
      "Responsive pricing section with frequency toggle, tooltips, and highlightable plans.",
    dependencies: ["motion"],
    registryDependencies: ["button", "tooltip"],
    files: [
      {
        path: "blocks/pricing/1/pricing-section.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/pricing/1/frequency-toggle.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
  },
  {
    name: "pricing-2",
    type: "registry:block",
    description:
      "Modular pricing card UI kit with reusable glass-style components and typography helpers.",
    files: [
      {
        path: "@/components/pricing-card.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    meta: {
      height: "80vh",
    },
  },
  {
    name: "pricing-3",
    type: "registry:block",
    description:
      "Three-tier pricing grid with interactive plan cards, badges, and feature lists.",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/pricing/3/pricing-section.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/pricing-card.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
  },
  {
    name: "pricing-4",
    type: "registry:block",
    description:
      "Animated dual pricing cards with motion effects, discount badges, and trust indicator.",
    dependencies: ["motion"],
    registryDependencies: ["button", "badge"],
    files: [
      {
        path: "blocks/pricing/4/pricing-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    meta: {
      height: "70vh",
    },
  },
  {
    name: "testimonials-1",
    type: "registry:block",
    description:
      "Infinite vertical testimonial scroller with smooth motion and repeated card animation.",
    dependencies: ["motion"],
    files: [
      {
        path: "blocks/testimonials/1/testimonials-columns.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
  },
  {
    name: "testimonials-2",
    type: "registry:block",
    description:
      "Responsive testimonial grid with smooth motion reveal, subtle gradients, and elegant card design.",
    dependencies: ["motion"],
    registryDependencies: ["@magicui/grid-pattern"],
    files: [
      {
        path: "blocks/testimonials/2/testimonials-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
  },
];
