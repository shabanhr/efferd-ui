import { registryItemSchema, type Registry, type RegistryItem } from 'shadcn/schema';
import { z } from 'zod';

import { blocks } from '@/registry/blocks';
import { SITE_HOME_URL } from '@/config/site';

const DEFAULT: RegistryItem = {
    name: "index",
    type: "registry:style",
    dependencies: ["class-variance-authority", "lucide-react"],
    devDependencies: ["tw-animate-css"],
    registryDependencies: ["utils"],
    cssVars: {},
    files: [],
  }

export const registry = {
	name: 'efferd-ui',
	homepage: SITE_HOME_URL,
	items: z.array(registryItemSchema).parse([DEFAULT, ...blocks]),
} satisfies Registry;
