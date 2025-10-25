"use client";

import { type LucideIcon, Mail, MapPin, Phone } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

const APP_EMAIL = "mail@example.com";
const APP_PHONE = "+92 300 1234567";
const APP_PHONE_2 = "+92 321 9876543";

export function Contact() {
  const socialLinks = [
    {
      icon: GithubIcon,
      href: "#",
      label: "GitHub",
    },
    {
      icon: XIcon,
      href: "#",
      label: "Twitter",
    },
  ];

  return (
    <div className="mx-auto h-full min-h-screen max-w-5xl lg:border-x">
      <div className="flex grow flex-col justify-center px-4 py-18 md:items-center">
        <h1 className="font-bold text-4xl md:text-5xl">Contact Us</h1>
        <p className="mb-5 text-base text-muted-foreground">
          Contact the support team at efferd.
        </p>
      </div>
      <BorderSeparator />
      <div className="grid md:grid-cols-3">
        <Box
          description="We respond to all emails within 24 hours."
          icon={Mail}
          title="Email"
        >
          <a
            className="font-medium font-mono text-sm tracking-wide hover:underline"
            href={`mailto:${APP_EMAIL}`}
          >
            {APP_EMAIL}
          </a>
        </Box>
        <Box
          description="Drop by our office for a chat."
          icon={MapPin}
          title="Office"
        >
          <span className="font-medium font-mono text-sm tracking-wide">
            Office # 100, 101 Second Floor Kohinoor 1, Faisalabad, Pakistan
          </span>
        </Box>
        <Box
          className="border-b-0 md:border-r-0"
          description="We're available Mon-Fri, 9am-5pm."
          icon={Phone}
          title="Phone"
        >
          <div>
            <a
              className="block font-medium font-mono text-sm tracking-wide hover:underline"
              href={`tel:${APP_PHONE}`}
            >
              {APP_PHONE}
            </a>
            <a
              className="block font-medium font-mono text-sm tracking-wide hover:underline"
              href={`tel:${APP_PHONE_2}`}
            >
              {APP_PHONE_2}
            </a>
          </div>
        </Box>
      </div>
      <BorderSeparator />
      <div className="z-1 flex h-full flex-col items-center justify-center gap-4 py-24">
        <h2 className="text-center font-medium text-2xl text-muted-foreground tracking-tight md:text-3xl">
          Find us <span className="text-foreground">online</span>
        </h2>
        <div className="flex flex-wrap items-center gap-2">
          {socialLinks.map((link) => (
            <a
              className="flex items-center gap-x-2 rounded-full border bg-card px-3 py-1.5 shadow hover:bg-accent"
              href={link.href}
              key={link.label}
              rel="noopener noreferrer"
              target="_blank"
            >
              <link.icon className="size-3.5 text-muted-foreground" />
              <span className="font-medium font-mono text-xs tracking-wide">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function BorderSeparator({ className }: React.ComponentProps<"div">) {
  return (
    <div className={cn("absolute inset-x-0 h-px w-full border-b", className)} />
  );
}

type ContactBox = React.ComponentProps<"div"> & {
  icon: LucideIcon;
  title: string;
  description: string;
};

function Box({
  title,
  description,
  className,
  children,
  ...props
}: ContactBox) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between border-b md:border-r md:border-b-0",
        className
      )}
    >
      <div className="flex items-center gap-x-3 border-b bg-secondary/50 p-4 dark:bg-secondary/20">
        <props.icon className="size-5 text-muted-foreground" strokeWidth={1} />
        <h2 className="font-heading font-medium text-lg tracking-wider">
          {title}
        </h2>
      </div>
      <div className="flex items-center gap-x-2 p-4 py-12">{children}</div>
      <div className="border-t p-4">
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
}

const GithubIcon = (props: React.ComponentProps<"svg">) => (
  <svg fill="currentColor" viewBox="0 0 1024 1024" {...props}>
    <path
      clipRule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
      fill="currentColor"
      fillRule="evenodd"
      transform="scale(64)"
    />
  </svg>
);

const XIcon = (props: React.ComponentProps<"svg">) => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m18.9,1.153h3.682l-8.042,9.189,9.46,12.506h-7.405l-5.804-7.583-6.634,7.583H.469l8.6-9.831L0,1.153h7.593l5.241,6.931,6.065-6.931Zm-1.293,19.494h2.039L6.482,3.239h-2.19l13.314,17.408Z" />
  </svg>
);
