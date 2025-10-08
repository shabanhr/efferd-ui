import './globals.css';

import { RootProviders } from '@/components/providers';
import { fontHeading, fontSans, fontMono } from '@/lib/fonts';
import { GoogleAnalytics } from '@next/third-parties/google';

import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
	canonicalUrl: '/',
});

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable} bg-background text-foreground overscroll-none font-sans antialiased`}
			>
				<RootProviders
					themeProps={{
						attribute: 'class',
						defaultTheme: 'dark',
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
