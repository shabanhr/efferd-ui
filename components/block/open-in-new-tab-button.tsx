import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { ExternalLinkIcon } from 'lucide-react';

export function OpenInNewTabButton({ previewLink }: { previewLink: string }) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						aria-label="Open in new tab"
						size="icon-sm"
						variant="dashed"
						asChild
					>
						<Link href={previewLink} target="_blank">
							<ExternalLinkIcon className="size-3.5" />
						</Link>
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Open In New Tab</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
