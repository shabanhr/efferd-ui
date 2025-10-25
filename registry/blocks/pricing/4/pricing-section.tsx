"use client";
import { PlusIcon, ShieldCheckIcon } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  return (
    <section className="mx-auto w-full max-w-5xl space-y-5" id="pricing">
      <motion.div
        className="mx-auto max-w-xl space-y-5"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="flex justify-center">
          <div className="rounded-md border px-4 py-1 text-sm">Pricing</div>
        </div>
        <h2 className="mt-5 text-center font-bold text-2xl tracking-tight md:text-3xl lg:text-4xl">
          Pricing Based on Your Success
        </h2>
        <p className="mt-5 text-center text-muted-foreground text-sm md:text-base">
          We offer a single price for all our services. We believe that pricing
          is a critical component of any successful business.
        </p>
      </motion.div>

      <motion.div
        className="mx-auto w-full max-w-2xl space-y-2"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="relative grid border bg-background p-4 md:grid-cols-2">
          <PlusIcon
            className="-top-[10.5px] -left-[10.5px] absolute size-5 text-foreground"
            strokeWidth={1}
          />
          <PlusIcon
            className="-top-[10.5px] -right-[10.5px] absolute size-5 text-foreground"
            strokeWidth={1}
          />
          <PlusIcon
            className="-bottom-[10.5px] -left-[10.5px] absolute size-5 text-foreground"
            strokeWidth={1}
          />
          <PlusIcon
            className="-right-[10.5px] -bottom-[10.5px] absolute size-5 text-foreground"
            strokeWidth={1}
          />

          <div className="w-full px-4 pt-5 pb-4">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold leading-none">Monthly</h3>
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
              <div className="flex items-end gap-0.5 text-muted-foreground text-xl">
                <span>$</span>
                <span className="-mb-0.5 font-extrabold text-4xl text-foreground tracking-tighter md:text-4xl">
                  7.99
                </span>
                <span>/month</span>
              </div>
              <Button asChild className="w-full" variant="outline">
                <a href="#">Start Your Journey</a>
              </Button>
            </div>
          </div>
          <div className="relative w-full rounded-md border bg-card p-4 shadow dark:bg-card/80">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold leading-none">Yearly</h3>
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
              <div className="flex items-end text-muted-foreground text-xl">
                <span>$</span>
                <span className="-mb-0.5 font-extrabold text-4xl text-foreground tracking-tighter md:text-4xl">
                  6.99
                </span>
                <span>/month</span>
              </div>
              <Button asChild className="w-full">
                <a href="#">Get Started Now</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-x-2 text-muted-foreground text-sm">
          <ShieldCheckIcon className="size-4" />
          <span>Access to all features with no hidden fees</span>
        </div>
      </motion.div>
    </section>
  );
}
