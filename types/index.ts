import type { BundledLanguage } from "shiki/bundle/web";

export type PreviewMode = "preview" | "code";

export type BlockFile = {
  type: "page" | "component" | "hook";
  name: string;
  code: string;
  lang: BundledLanguage;
};

export type Block = {
  name: string;
  category: string;
  block_number: string;
  description: string;
  files: BlockFile[];
  height: string;
};

export type Category = {
  id: string;
  name: string;
  blocksCount: number;
  isNew: boolean;
};
