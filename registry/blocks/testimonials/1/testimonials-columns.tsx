"use client";
import { motion } from "motion/react";
import React from "react";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      className="flex flex-col gap-6 pb-6"
      transition={{
        duration: props.duration || 10,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
        repeatType: "loop",
      }}
    >
      {[
        ...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={`column-${index}`}>
            {props.testimonials.map(({ text, image, name, role }) => (
              <div
                className="w-full max-w-xs rounded-3xl border bg-card p-8 shadow-lg dark:bg-card/20 dark:shadow-foreground/10"
                key={name}
              >
                <div>{text}</div>
                <div className="mt-5 flex items-center gap-2">
                  <img
                    alt={name}
                    className="h-10 w-10 rounded-full"
                    height={40}
                    src={image}
                    width={40}
                  />
                  <div className="flex flex-col">
                    <div className="font-medium leading-5 tracking-tight">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight opacity-60">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        )),
      ]}
    </motion.div>
  </div>
);
