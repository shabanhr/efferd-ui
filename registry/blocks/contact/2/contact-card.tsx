import { type LucideIcon, PlusIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

type ContactInfoProps = React.ComponentProps<"div"> & {
  icon: LucideIcon;
  label: string;
  value: string;
};

type ContactCardProps = React.ComponentProps<"div"> & {
  // Content props
  title?: string;
  description?: string;
  contactInfo?: ContactInfoProps[];
  formSectionClassName?: string;
};

export function ContactCard({
  title = "Contact With Us",
  description = "If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.",
  contactInfo,
  className,
  formSectionClassName,
  children,
  ...props
}: ContactCardProps) {
  return (
    <div
      className={cn(
        "relative grid h-full w-full border bg-muted/20 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
      {...props}
    >
      <PlusIcon className="-top-3 -left-3 absolute h-6 w-6" />
      <PlusIcon className="-top-3 -right-3 absolute h-6 w-6" />
      <PlusIcon className="-bottom-3 -left-3 absolute h-6 w-6" />
      <PlusIcon className="-right-3 -bottom-3 absolute h-6 w-6" />

      <div className="col-span-1 flex flex-col justify-between lg:col-span-2">
        <div className="relative h-full space-y-4 px-4 py-8 md:p-8">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="max-w-xl text-muted-foreground text-sm md:text-base lg:text-lg">
            {description}
          </p>
          <div className="grid gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            {contactInfo?.map((info) => (
              <ContactInfo key={info.label} {...info} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={cn(
          "col-span-1 flex h-full w-full items-center border-t bg-card p-5 md:border-t-0 md:border-l",
          formSectionClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  className,
  ...props
}: ContactInfoProps) {
  return (
    <div className={cn("flex items-center gap-3 py-3", className)} {...props}>
      <div className="rounded-lg border bg-card p-3 shadow">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-muted-foreground text-xs">{value}</p>
      </div>
    </div>
  );
}
