"use client";

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  type LucideIcon,
  Mail,
  MapPin,
  Phone,
  TwitterIcon,
} from "lucide-react";
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
      icon: TwitterIcon,
      href: "#",
      label: "Twitter",
    },
    {
      icon: LinkedinIcon,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: InstagramIcon,
      href: "#",
      label: "Instagram",
    },
  ];

  return (
    <div className="mx-auto h-full min-h-screen max-w-5xl lg:border-x">
      <div
        aria-hidden
        className="-z-10 absolute inset-0 isolate opacity-60 contain-strict"
      >
        <div className="-translate-y-87.5 -rotate-45 absolute top-0 left-0 h-320 w-140 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)]" />
        <div className="-rotate-45 absolute top-0 left-0 h-320 w-60 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="-translate-y-87.5 -rotate-45 absolute top-0 left-0 h-320 w-60 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)]" />
      </div>
      <div className="flex grow flex-col justify-center px-4 py-18">
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
      <div className="z-1 flex h-full min-h-[320px] flex-col items-center justify-center gap-4">
        <h2 className="text-center font-bold text-3xl md:text-4xl">
          Find us online
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
              <link.icon className="size-4" />
              <span className="font-medium font-mono text-sm">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function BorderSeparator() {
  return <div className="absolute inset-x-0 h-px w-full border-b" />;
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
      <div className="flex items-center gap-x-3 border-b bg-muted/40 p-4">
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
