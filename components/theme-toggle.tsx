'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { MoonStar, SunDim } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<Button
			variant="dashed"
			size="icon-sm"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			<SunDim className="size-5 scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
			<MoonStar className="absolute scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
			<span className="sr-only">Switch Theme</span>
		</Button>
	);
}
