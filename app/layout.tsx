import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { RootProviders } from "@/components/providers";
import { fontHeading, fontMono, fontSans } from "@/lib/fonts";

import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  canonicalUrl: "/",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable} overscroll-none bg-background font-sans text-foreground antialiased`}
      >
        <RootProviders
          themeProps={{
            attribute: "class",
            defaultTheme: "dark",
            disableTransitionOnChange: true,
          }}
        >
          {children}
        </RootProviders>
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS as string} />
    </html>
  );
}
