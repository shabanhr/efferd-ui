"use client";
import { CheckCircleIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { type FREQUENCY, FrequencyToggle } from "./frequency-toggle";

export type Plan = {
  name: string;
  info: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: {
    text: string;
    tooltip?: string;
  }[];
  btn: {
    text: string;
    href: string;
  };
  highlighted?: boolean;
};

interface PricingSectionProps extends React.ComponentProps<"div"> {
  plans: Plan[];
  heading: string;
  description?: string;
}

export function PricingSection({
  plans,
  heading,
  description,
  ...props
}: PricingSectionProps) {
  const [frequency, setFrequency] = React.useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center space-y-7 p-4",
        props.className
      )}
      {...props}
    >
      <div className="mx-auto max-w-xl space-y-2">
        <h2 className="text-center font-bold text-2xl tracking-tight md:text-3xl lg:font-extrabold lg:text-4xl">
          {heading}
        </h2>
        {description && (
          <p className="text-center text-muted-foreground text-sm md:text-base">
            {description}
          </p>
        )}
      </div>

      <FrequencyToggle frequency={frequency} setFrequency={setFrequency} />
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard frequency={frequency} key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  );
}

type PricingCardProps = React.ComponentProps<"div"> & {
  plan: Plan;
  frequency?: FREQUENCY;
};

export function PricingCard({
  plan,
  className,
  frequency = "monthly",
  ...props
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col rounded-lg border shadow",
        plan.highlighted && "scale-105",
        className
      )}
      key={plan.name}
      {...props}
    >
      <div
        className={cn(
          "rounded-t-lg border-b p-4",
          plan.highlighted && "bg-card dark:bg-card/80"
        )}
      >
        <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
          {plan.highlighted && (
            <p className="flex items-center gap-1 rounded-md border bg-background px-2 py-0.5 text-xs">
              <StarIcon className="h-3 w-3 fill-current" />
              Popular
            </p>
          )}
          {frequency === "yearly" && (
            <p className="flex items-center gap-1 rounded-md border bg-primary px-2 py-0.5 text-primary-foreground text-xs">
              {Math.round(
                ((plan.price.monthly * 12 - plan.price.yearly) /
                  plan.price.monthly /
                  12) *
                  100
              )}
              % off
            </p>
          )}
        </div>

        <div className="font-medium text-lg">{plan.name}</div>
        <p className="font-normal text-muted-foreground text-sm">{plan.info}</p>
        <h3 className="mt-6 mb-2 flex items-end gap-1">
          <span className="font-extrabold text-3xl">
            ${plan.price[frequency]}
          </span>
          <span className="text-muted-foreground">
            {plan.name !== "Free"
              ? `/${frequency === "monthly" ? "month" : "year"}`
              : ""}
          </span>
        </h3>
      </div>
      <div
        className={cn(
          "space-y-4 px-4 pt-6 pb-8 text-muted-foreground text-sm",
          plan.highlighted && "bg-muted/10"
        )}
      >
        {plan.features.map((feature, index) => (
          <div className="flex items-center gap-2" key={index}>
            <CheckCircleIcon className="h-4 w-4 text-foreground" />
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <p
                    className={cn(feature.tooltip && "cursor-pointer border-b")}
                  >
                    {feature.text}
                  </p>
                </TooltipTrigger>
                {feature.tooltip && (
                  <TooltipContent>
                    <p>{feature.tooltip}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </div>
      <div
        className={cn(
          "mt-auto w-full rounded-b-lg border-t p-3",
          plan.highlighted && "bg-card dark:bg-card/80"
        )}
      >
        <Button
          asChild
          className="w-full"
          variant={plan.highlighted ? "default" : "outline"}
        >
          <Link href={plan.btn.href}>{plan.btn.text}</Link>
        </Button>
      </div>
    </div>
  );
}
