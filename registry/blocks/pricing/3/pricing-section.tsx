"use client";

import { Briefcase, Building, CheckCircle2, Users } from "lucide-react";
import * as PricingCard from "@/components/pricing-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const plans = [
    {
      icon: <Users />,
      description: "Perfect for individuals",
      name: "Basic",
      price: "Free",
      variant: "outline",
      features: [
        "Automated Meeting Scheduling",
        "Basic Calendar Sync",
        "Daily Schedule Overview",
        "Email Reminders",
        "Task Management",
        "24/7 Customer Support",
        "Single User Access",
        "Basic Reporting",
        "Mobile App Access",
      ],
    },
    {
      icon: <Briefcase />,
      description: "Ideal for small teams",
      name: "Pro",
      badge: "Popular",
      price: "$29",
      original: "$39",
      period: "/month",
      variant: "default",
      features: [
        "All Basic Plan Features",
        "Advanced Calendar Integrations",
        "Customizable Notifications",
        "Priority Support",
        "Analytics and Insights",
        "Group Scheduling",
        "Multiple User Roles",
        "Advanced Reporting",
        "Custom Branding Options",
      ],
    },
    {
      icon: <Building />,
      name: "Enterprise",
      description: "Perfect for large scale companies",
      price: "$99",
      original: "$129",
      period: "/month",
      variant: "outline",
      features: [
        "All Pro Plan Features",
        "Dedicated Account Manager",
        "Custom Integrations",
        "Advanced Security Features",
        "Team Collaboration Tools",
        "Onboarding and Training",
        "Unlimited Users",
        "API Access with Higher Limits",
        "Advanced Audit Logs",
      ],
    },
  ];

  return (
    <section className="mx-auto grid w-full max-w-4xl gap-4 p-6 md:grid-cols-3">
      {plans.map((plan, index) => (
        <PricingCard.Card
          className={cn("w-full max-w-full", index === 1 && "md:scale-105")}
          key={plan.name}
        >
          <PricingCard.Header>
            <PricingCard.Plan>
              <PricingCard.PlanName>
                {plan.icon}
                <span className="text-muted-foreground">{plan.name}</span>
              </PricingCard.PlanName>
              {plan.badge && (
                <PricingCard.Badge>{plan.badge}</PricingCard.Badge>
              )}
            </PricingCard.Plan>
            <PricingCard.Price>
              <PricingCard.MainPrice>{plan.price}</PricingCard.MainPrice>
              <PricingCard.Period>{plan.period}</PricingCard.Period>
              {plan.original && (
                <PricingCard.OriginalPrice className="ml-auto">
                  {plan.original}
                </PricingCard.OriginalPrice>
              )}
            </PricingCard.Price>
            <Button
              className={cn("w-full font-semibold")}
              variant={plan.variant as "outline" | "default"}
            >
              Get Started
            </Button>
          </PricingCard.Header>

          <PricingCard.Body>
            <PricingCard.Description>
              {plan.description}
            </PricingCard.Description>
            <PricingCard.List>
              {plan.features.map((item) => (
                <PricingCard.ListItem className="text-xs" key={item}>
                  <CheckCircle2
                    aria-hidden="true"
                    className="h-4 w-4 text-foreground"
                  />
                  <span>{item}</span>
                </PricingCard.ListItem>
              ))}
            </PricingCard.List>
          </PricingCard.Body>
        </PricingCard.Card>
      ))}
    </section>
  );
}
