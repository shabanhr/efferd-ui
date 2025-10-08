'use client';
import React from 'react';
import { motion } from 'motion/react';

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
}) => {
	return (
		<div className={props.className}>
			<motion.div
				animate={{
					translateY: '-50%',
				}}
				transition={{
					duration: props.duration || 10,
					repeat: Infinity,
					ease: 'linear',
					repeatType: 'loop',
				}}
				className="flex flex-col gap-6 pb-6"
			>
				{[
					...new Array(2).fill(0).map((_, index) => (
						<React.Fragment key={index}>
							{props.testimonials.map(({ text, image, name, role }, i) => (
								<div
									className="bg-card dark:bg-card/20 dark:shadow-foreground/10 w-full max-w-xs rounded-3xl border p-8 shadow-lg"
									key={i}
								>
									<div>{text}</div>
									<div className="mt-5 flex items-center gap-2">
										<img
											width={40}
											height={40}
											src={image}
											alt={name}
											className="h-10 w-10 rounded-full"
										/>
										<div className="flex flex-col">
											<div className="leading-5 font-medium tracking-tight">
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
};
