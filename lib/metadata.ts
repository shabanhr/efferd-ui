import type { Metadata } from "next";
import {
  MY_HANDLE,
  SITE_DESCRIPTION,
  SITE_HOME_URL,
  SITE_NAME,
  SITE_SHORT_DESCRIPTION,
} from "@/config/site";

type ConstructMetadataProps = {
  title?: string;
  fullTitle?: string;
  description?: string;
  image?: string | null;
  video?: string | null;
  url?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  manifest?: string | URL | null;
  keywords?: string[];
};

export function constructMetadata({
  title,
  fullTitle,
  description = SITE_DESCRIPTION,
  image = `${SITE_HOME_URL}/og.jpeg`,
  video,
  url,
  canonicalUrl,
  noIndex = false,
  manifest,
  keywords,
}: ConstructMetadataProps = {}): Metadata {
  return {
    title:
      fullTitle ||
      (title
        ? `${title} | ${SITE_NAME}`
        : `${SITE_NAME} - ${SITE_SHORT_DESCRIPTION}`),
    description,
    keywords: [
      SITE_NAME,
      "Shadcn UI",
      "UI",
      "Components",
      "Blocks",
      ...(keywords || []),
    ],
    openGraph: {
      title,
      description,
      ...(image && {
        images: image,
      }),
      url,
      ...(video && {
        videos: video,
      }),
    },
    twitter: {
      title,
      description,
      ...(image && {
        card: "summary_large_image",
        images: [image],
      }),
      ...(video && {
        player: video,
      }),
      creator: `@${MY_HANDLE}`,
    },
    metadataBase: new URL(SITE_HOME_URL),
    ...((url || canonicalUrl) && {
      alternates: {
        canonical: url || canonicalUrl,
      },
    }),
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    ...(manifest && {
      manifest,
    }),
  };
}
