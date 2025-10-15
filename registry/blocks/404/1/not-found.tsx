import { Compass, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from '@/components/ui/empty';

export function NotFoundPage() {
	return (
		<div className="flex w-full items-center justify-center">
			<div className="flex h-screen items-center border-x">
				<div>
					<div className="bg-border absolute inset-x-0 h-px" />
					<Empty>
						<EmptyHeader>
							<EmptyTitle className="font-mono text-8xl font-black">404</EmptyTitle>
							<EmptyDescription className="text-nowrap">
								The page you're looking for might have been <br />
								moved or doesn't exist.
							</EmptyDescription>
						</EmptyHeader>
						<EmptyContent>
							<div className="flex gap-2">
								<Button asChild>
									<a href="#">
										<Home /> Go Home
									</a>
								</Button>

								<Button asChild variant="outline">
									<a href="#">
										<Compass /> Explore
									</a>
								</Button>
							</div>
						</EmptyContent>
					</Empty>
					<div className="bg-border absolute inset-x-0 h-px" />
				</div>
			</div>
		</div>
	);
}
