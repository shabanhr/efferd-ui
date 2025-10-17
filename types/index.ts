import type { BundledLanguage } from "shiki/bundle/web";

export type PreviewMode = "preview" | "code";

export type CodeFile = {
  name: string;
  lang: BundledLanguage;
  code: string;
};

export type BlockFile = {
  type: "page" | "component" | "hook";
  path: string;
  name: string;
};

export type Block = {
  name: string;
  category: string;
  block_number: string;
  description: string;
  files: BlockFile[];
};

export type Category = {
  id: string;
  name: string;
  blocksCount: number;
  isNew: boolean;
};
