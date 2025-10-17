import { Geist, Geist_Mono, Outfit } from "next/font/google";

export const fontSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const fontMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const fontHeading = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});
