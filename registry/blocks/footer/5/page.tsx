import { ArrowDownIcon } from "lucide-react";
import { StickyFooter } from "./sticky-footer";

export default function FooterDemo() {
  return (
    <div className="relative w-full">
      <div className="flex h-screen flex-col items-center justify-center gap-10">
        <div className="flex items-center gap-2">
          <p>Scroll down</p>
          <ArrowDownIcon className="size-4" />
        </div>
      </div>
      <StickyFooter />
    </div>
  );
}
