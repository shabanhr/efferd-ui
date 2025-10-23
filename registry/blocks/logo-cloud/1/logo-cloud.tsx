import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos, className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-3xl grid-cols-2 rounded-lg bg-border shadow md:grid-cols-4",
        className
      )}
      {...props}
    >
      {logos.map((logo) => (
        <div
          className="flex items-center justify-center rounded-lg border bg-background p-8"
          key={logo.alt}
        >
          <img
            alt={logo.alt}
            className="pointer-events-none block h-4 select-none md:h-5 dark:brightness-0 dark:invert"
            height={logo.height ?? "auto"}
            loading="lazy"
            src={logo.src}
            width={logo.width ?? "auto"}
          />
        </div>
      ))}
    </div>
  );
}
