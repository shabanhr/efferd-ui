import { ArrowRightIcon, AtSignIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export function CallToAction() {
  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-x bg-secondary/80 px-2 py-8 md:px-4 dark:bg-secondary/40">
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

      <div className="space-y-1">
        <h2 className="text-center font-semibold text-2xl tracking-tight md:text-4xl">
          Subscripe to our newsletter
        </h2>
        <p className="text-balance text-center text-muted-foreground text-sm md:text-base">
          Get the latest updates and insights delivered right to your inbox.
        </p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <InputGroup className="max-w-[280px] bg-card">
          <InputGroupInput placeholder="Enter your email" />
          <InputGroupAddon>
            <AtSignIcon />
          </InputGroupAddon>
        </InputGroup>

        <Button>
          Subscribe <ArrowRightIcon />
        </Button>
      </div>
      <div className="flex items-center justify-center gap-2">
        <p className="text-muted-foreground text-sm">
          Written by{" "}
          <span className="font-medium text-foreground">real humans</span> (we
          swear).
        </p>
        <div className="-space-x-[0.45rem] flex">
          <img
            alt="Avatar 01"
            className="rounded-full ring-1 ring-background"
            height={24}
            src="https://mynaui.com/avatars/avatar-01.jpg"
            width={24}
          />
          <img
            alt="Avatar 02"
            className="rounded-full ring-1 ring-background"
            height={24}
            src="https://mynaui.com/avatars/avatar-02.jpg"
            width={24}
          />
          <img
            alt="Avatar 03"
            className="rounded-full ring-1 ring-background"
            height={24}
            src="https://mynaui.com/avatars/avatar-03.jpg"
            width={24}
          />
          <img
            alt="Avatar 04"
            className="rounded-full ring-1 ring-background"
            height={24}
            src="https://mynaui.com/avatars/avatar-04.jpg"
            width={24}
          />
        </div>
      </div>

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
    </div>
  );
}
