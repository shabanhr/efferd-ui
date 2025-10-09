import { MetadataRoute } from 'next';
import { SITE_HOME_URL } from '@/config/site';
import { blocks } from '@/config/blocks';
import { getAllCategories } from '@/lib/utils/blocks-data';

export const dynamic = 'force-dynamic';

export default function sitemap(): MetadataRoute.Sitemap {
	const date = new Date().toISOString();
	const cats = getAllCategories();
	const catRoutes = cats.map((cat) => ({
		url: `${SITE_HOME_URL}/${cat.id}`,
		lastModified: date,
	}));
	const blockRoutes = blocks.map((item) => ({
		url: `${SITE_HOME_URL}/view/${item.name}`,
		lastModified: date,
	}));

	return [...catRoutes, ...blockRoutes];
}
