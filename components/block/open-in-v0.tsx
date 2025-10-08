import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { V0Icon } from '@/components/icons';

export function OpenInV0Button({
	registryUrl,
	name,
}: {
	registryUrl: string;
	name: string;
}) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						aria-label="Open in v0"
						size="icon-sm"
						variant="dashed"
						asChild
						onClick={() =>
							sendGAEvent('event', 'open_in_v0', {
								block_name: name,
							})
						}
					>
						<Link
							href={`https://v0.dev/chat/api/open?url=${registryUrl}`}
							target="_blank"
							rel="noreferrer"
						>
							<V0Icon />
						</Link>
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Open In v0</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
