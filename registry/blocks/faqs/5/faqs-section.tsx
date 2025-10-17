"use client";
import { Search, SearchSlash } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

export function FaqsSection() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "getting-started", label: "Getting Started" },
    { id: "features", label: "Features" },
    { id: "billing", label: "Billing" },
    { id: "support", label: "Support" },
  ];

  const filtered = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto min-h-screen w-full max-w-4xl md:border-x">
      <div className="px-4 py-16 lg:px-6">
        <h1 className="mb-4 font-bold text-3xl md:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="mb-8 max-w-2xl text-muted-foreground">
          Find answers to common questions about Efferd. Can't find what you're
          looking for? Our support team is here to help.
        </p>

        <InputGroup className="max-w-sm">
          <InputGroupInput
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search FAQs..."
            value={searchTerm}
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div className="absolute inset-x-0 h-px bg-border" />

      <div className="flex flex-wrap gap-3 border-b px-4">
        {categories.map((cat) => (
          <button
            className="flex flex-col"
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            type="button"
          >
            <span
              className={cn(
                "p-1 text-muted-foreground text-xs hover:text-primary md:p-2 md:text-base",
                activeCategory === cat.id && "text-primary"
              )}
            >
              {cat.label}
            </span>
            {activeCategory === cat.id && (
              <span className="h-0.5 w-full rounded-full bg-primary text-xs" />
            )}
          </button>
        ))}
      </div>

      <Accordion
        className="space-y-2 px-4 py-12 lg:px-6"
        collapsible
        defaultValue="item-1"
        type="single"
      >
        {filtered.map((faq) => (
          <AccordionItem
            className="rounded-md border bg-card shadow outline-none last:border-b has-focus-visible:border-ring dark:bg-card/40 dark:hover:bg-card/60"
            key={faq.id}
            value={faq.id.toString()}
          >
            <AccordionTrigger className="px-4 hover:no-underline focus-visible:ring-0">
              {faq.title}
            </AccordionTrigger>
            <AccordionContent className="px-4 pt-2 pb-4 text-muted-foreground">
              {faq.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {filtered.length === 0 && (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Search />
            </EmptyMedia>
            <EmptyTitle>No FAQs found matching your search.</EmptyTitle>
          </EmptyHeader>
          <EmptyContent>
            <Button onClick={() => setSearchTerm("")} variant="outline">
              <SearchSlash />
              Clear search
            </Button>
          </EmptyContent>
        </Empty>
      )}

      <div className="flex items-center px-4 py-6 lg:px-6">
        <p className="text-muted-foreground">
          Can't find what you're looking for?{" "}
          <a className="text-primary hover:underline" href="#">
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
}

const faqs = [
  {
    id: 1,
    category: "getting-started",
    title: "How do I create my first project?",
    content:
      'Click the "New Project" button in your dashboard, choose a template or start from scratch, customize your project name and settings, and you\'ll be ready to start building in seconds.',
  },
  {
    id: 2,
    category: "getting-started",
    title: "What are the system requirements?",
    content:
      "Efferd works on any modern web browser including Chrome, Firefox, Safari, and Edge. No special software installation is required—just visit our platform and log in.",
  },
  {
    id: 3,
    category: "features",
    title: "Can I use Efferd for team collaboration?",
    content:
      "Absolutely! Invite team members, set role-based permissions, leave comments on components, and track changes in real-time. Our collaboration features are built for teams of all sizes.",
  },
  {
    id: 4,
    category: "features",
    title: "Is there a component library?",
    content:
      "Yes, Efferd includes a comprehensive library of pre-built, customizable components. You can also create your own reusable components and share them across your projects.",
  },
  {
    id: 5,
    category: "features",
    title: "Do you support custom integrations?",
    content:
      "We support integrations with GitHub, GitLab, Figma, Slack, and major cloud providers. For custom integrations, contact our support team to discuss your needs.",
  },
  {
    id: 6,
    category: "billing",
    title: "What payment methods do you accept?",
    content:
      "We accept all major credit cards, PayPal, and bank transfers for annual plans. Invoicing is available for enterprise customers.",
  },
  {
    id: 7,
    category: "billing",
    title: "Can I change my plan anytime?",
    content:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly.",
  },
  {
    id: 8,
    category: "support",
    title: "How do I report a bug?",
    content:
      "Use the in-app feedback button or email support@efferd.com with details about the issue. Our team typically responds within 24 hours.",
  },
  {
    id: 9,
    category: "support",
    title: "Do you offer training or onboarding?",
    content:
      "We provide video tutorials, documentation, and live webinars. Premium plans include personalized onboarding sessions with our support team.",
  },
];
