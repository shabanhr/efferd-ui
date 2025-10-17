"use client";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type React from "react";
import { WordmarkIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";

type FooterLink = {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};
type FooterLinkGroup = {
  label: string;
  links: FooterLink[];
};

export function StickyFooter() {
  return (
    <footer
      className="relative h-[560px] w-full border-t"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[560px] w-full">
        <div className="sticky top-[calc(100vh-560px)] h-full overflow-y-auto">
          <div className="relative flex size-full flex-col justify-between gap-5 px-4">
            <div
              aria-hidden
              className="absolute inset-0 isolate z-0 opacity-50 contain-strict dark:opacity-100"
            >
              <div className="-translate-y-87.5 -rotate-45 absolute top-0 left-0 h-320 w-140 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)]" />
              <div className="-rotate-45 absolute top-0 left-0 h-320 w-60 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] [translate:5%_-50%]" />
              <div className="-translate-y-87.5 -rotate-45 absolute top-0 left-0 h-320 w-60 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)]" />
            </div>
            <div className="flex flex-col gap-8 pt-12 md:flex-row">
              <AnimatedContainer className="w-full min-w-2xs max-w-sm space-y-4">
                <WordmarkIcon className="h-5" />
                <p className="mt-8 text-muted-foreground text-sm md:mt-0">
                  Innovative fintech empowering businesses with seamless
                  payments, lending, and financial infrastructure worldwide.
                </p>
                <div className="flex gap-2">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={`social-${link.href}-${index}`}
                      size="icon-sm"
                      variant="outline"
                    >
                      <link.icon className="size-4" />
                    </Button>
                  ))}
                </div>
              </AnimatedContainer>
              {footerLinkGroups.map((group, index) => (
                <AnimatedContainer
                  className="w-full"
                  delay={0.1 + index * 0.1}
                  key={group.label}
                >
                  <div className="mb-10 md:mb-0">
                    <h3 className="text-sm uppercase">{group.label}</h3>
                    <ul className="mt-4 space-y-2 text-muted-foreground text-sm md:text-xs lg:text-sm">
                      {group.links.map((link) => (
                        <li key={link.title}>
                          <a
                            className="inline-flex items-center transition-all duration-300 hover:text-foreground"
                            href={link.href}
                          >
                            {link.icon && <link.icon className="me-1 size-4" />}
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedContainer>
              ))}
            </div>
            <div className="flex flex-col items-center justify-between gap-2 border-t py-4 text-muted-foreground text-sm md:flex-row">
              <p>
                &copy; {new Date().getFullYear()} efferd, All rights reserved.
              </p>
              <a className="hover:text-foreground" href="#">
                License
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
  { title: "Facebook", href: "#", icon: FacebookIcon },
  { title: "Instagram", href: "#", icon: InstagramIcon },
  { title: "Youtube", href: "#", icon: YoutubeIcon },
  { title: "LinkedIn", href: "#", icon: LinkedinIcon },
];

const footerLinkGroups: FooterLinkGroup[] = [
  {
    label: "Product",
    links: [
      { title: "Payments", href: "#" },
      { title: "Cards & Issuing", href: "#" },
      { title: "Lending & Credit", href: "#" },
      { title: "Wealth Management", href: "#" },
      { title: "Insurance", href: "#" },
      { title: "Crypto Wallets", href: "#" },
      { title: "FX & Currency Exchange", href: "#" },
      { title: "Treasury Management", href: "#" },
      { title: "Merchant Services", href: "#" },
      { title: "Point of Sale", href: "#" },
      { title: "Embedded Finance", href: "#" },
      { title: "Open Banking API", href: "#" },
      { title: "SDKs & Integrations", href: "#" },
      { title: "Pricing", href: "#" },
    ],
  },
  {
    label: "Solutions",
    links: [
      { title: "Startups", href: "#" },
      { title: "Enterprises", href: "#" },
      { title: "Marketplaces", href: "#" },
      { title: "Freelancers", href: "#" },
      { title: "E-commerce", href: "#" },
      { title: "Banks & Credit Unions", href: "#" },
      { title: "Investment Platforms", href: "#" },
      { title: "Insurance Providers", href: "#" },
      { title: "Payment Gateways", href: "#" },
      { title: "Government & Public Sector", href: "#" },
      { title: "Nonprofits", href: "#" },
      { title: "Education", href: "#" },
      { title: "Healthcare", href: "#" },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Blog", href: "#" },
      { title: "Case Studies", href: "#" },
      { title: "Documentation", href: "#" },
      { title: "API Reference", href: "#" },
      { title: "Developer Tools", href: "#" },
      { title: "Guides & Tutorials", href: "#" },
      { title: "Whitepapers", href: "#" },
      { title: "Reports & Research", href: "#" },
      { title: "Events & Webinars", href: "#" },
      { title: "E-books", href: "#" },
      { title: "Community Forum", href: "#" },
      { title: "Release Notes", href: "#" },
      { title: "System Status", href: "#" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "About Us", href: "#" },
      { title: "Leadership", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Press", href: "#" },
      { title: "Sustainability", href: "#" },
      { title: "Diversity & Inclusion", href: "#" },
      { title: "Investor Relations", href: "#" },
      { title: "Partners", href: "#" },
      { title: "Legal & Compliance", href: "#" },
      { title: "Privacy Policy", href: "#" },
      { title: "Cookie Policy", href: "#" },
      { title: "Terms of Service", href: "#" },
      { title: "AML & KYC Policy", href: "#" },
      { title: "Regulatory Disclosures", href: "#" },
    ],
  },
];

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
  children?: React.ReactNode;
  delay?: number;
};

function AnimatedContainer({
  delay = 0.1,
  children,
  ...props
}: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      transition={{ delay, duration: 0.8 }}
      viewport={{ once: true }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
