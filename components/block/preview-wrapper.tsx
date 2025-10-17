import type React from "react";

export const BlockPreviewWrapper = ({
  children,
  id,
  height,
}: {
  children: React.ReactNode;
  id: string;
  height: number;
}) => (
  <section
    className="group mb-16 h-(--block-height) scroll-my-6 border-foreground/[0.075] border-b [--block-height:36rem] lg:[--block-height:var(--block-static-height)]"
    id={id}
    style={
      { "--block-static-height": `${height + 48}px` } as React.CSSProperties
    }
  >
    {children}
  </section>
);
