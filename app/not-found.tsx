import { Home } from "lucide-react";
import Link from "next/link";
import { BorderSeparator } from "@/components/sheard";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";

export default function NotFound() {
  return (
    <div className="flex w-full items-center justify-center overflow-hidden">
      <div className="relative flex h-screen items-center">
        <div
          aria-hidden="true"
          className="-inset-y-14 pointer-events-none absolute left-0 border-l border-dashed"
        />
        <div>
          <BorderSeparator />
          <Empty>
            <EmptyHeader>
              <EmptyTitle className="font-bold font-mono text-8xl">
                404
              </EmptyTitle>
              <EmptyDescription className="text-nowrap">
                The page you're looking for might have been <br />
                moved or doesn't exist.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button asChild variant="outline">
                <Link href="/">
                  <Home /> Go Home
                </Link>
              </Button>
            </EmptyContent>
          </Empty>
          <BorderSeparator />
        </div>
        <div
          aria-hidden="true"
          className="-inset-y-14 pointer-events-none absolute right-0 border-r border-dashed"
        />
      </div>
    </div>
  );
}
