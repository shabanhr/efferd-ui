"use client";

import { ThemeProvider, type ThemeProviderProps } from "next-themes";
import type * as React from "react";

export type ProvidersProps = {
  children: React.ReactNode;
  themeProps?: Omit<ThemeProviderProps, "children">;
};

export function RootProviders({ children, themeProps }: ProvidersProps) {
  return <ThemeProvider {...themeProps}>{children}</ThemeProvider>;
}
