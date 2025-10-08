import React from 'react';
import { LazyImage } from './lazy-image';

export function ImageGallery() {
	return (
		<div className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-10">
			<div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
				{Array.from({ length: 4 }).map((_, col) => (
					<div key={col} className="grid gap-4">
						{Array.from({ length: 8 }).map((_, index) => {
							const isPortrait = Math.random() > 0.5;
							const width = isPortrait ? 1080 : 1920;
							const height = isPortrait ? 1920 : 1080;
							const ratio = isPortrait ? 9 / 16 : 16 / 9;

							return (
								<LazyImage
									inView={true}
									key={`${col}-${index}`}
									alt={`Image ${col}-${index}`}
									src={`https://picsum.photos/seed/${col}-${index}/${width}/${height}`}
									ratio={ratio}
									fallback={`https://placehold.co/${width}x${height}/`}
								/>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
}
