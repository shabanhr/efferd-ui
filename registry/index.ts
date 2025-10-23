import {
  type Registry,
  type RegistryItem,
  registryItemSchema,
} from "shadcn/schema";
import { z } from "zod";
import { SITE_HOME_URL } from "@/config/site";
import { blocks } from "@/registry/blocks";

const DEFAULT: RegistryItem = {
  name: "index",
  type: "registry:style",
  dependencies: ["class-variance-authority", "lucide-react"],
  devDependencies: ["tw-animate-css"],
  registryDependencies: ["utils"],
  cssVars: {},
  files: [],
};

export const registry = {
  name: "efferd",
  homepage: SITE_HOME_URL,
  items: z.array(registryItemSchema).parse([DEFAULT, ...blocks]),
} satisfies Registry;
