"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ReactIcon } from "@/components/icons";
import {
  TreeExpander,
  TreeIcon,
  TreeLabel,
  TreeNode,
  TreeNodeContent,
  TreeNodeTrigger,
  TreeProvider,
  TreeView,
} from "@/components/kibo-ui/tree";
import type { BlockFile } from "@/types";
import { CopyButton } from "../copy-button";
import CodeBlock from "./code-block";

const DEFAULT_FILE_NAME = "page.tsx";

type CodeViewProps = {
  files: BlockFile[];
  name: string;
};

export function CodeView({ files, name }: CodeViewProps) {
  const defaultFile = useMemo(
    () => files.find((file) => file.name === DEFAULT_FILE_NAME) ?? files[0],
    [files]
  );

  const [selectedIds, setSelectedIds] = useState<string[]>(() =>
    defaultFile ? [defaultFile.name] : []
  );
  const [currentFile, setCurrentFile] = useState<BlockFile | null>(defaultFile);

  const componentFiles = useMemo(
    () => files.filter((file) => file.type === "component"),
    [files]
  );

  const hookFiles = useMemo(
    () => files.filter((file) => file.type === "hook"),
    [files]
  );

  const defaultExpandedIds = useMemo(() => {
    const ids: string[] = [];
    if (defaultFile) {
      ids.push("app");
    }
    if (componentFiles.length) {
      ids.push("components");
    }
    if (hookFiles.length) {
      ids.push("hooks");
    }
    return ids;
  }, [componentFiles.length, hookFiles.length, defaultFile]);

  const treeProviderKey = useMemo(
    () => files.map((file) => `${file.type}:${file.name}`).join("|"),
    [files]
  );

  useEffect(() => {
    if (!defaultFile) {
      setCurrentFile(null);
      setSelectedIds([]);
      return;
    }

    setCurrentFile((prev) =>
      prev?.name === defaultFile.name ? prev : defaultFile
    );
    setSelectedIds((prev) =>
      prev.length === 1 && prev[0] === defaultFile.name
        ? prev
        : [defaultFile.name]
    );
  }, [defaultFile]);

  const onSelectionChange = useCallback(
    (ids: string[]) => {
      if (!files || ids.length === 0) {
        return;
      }
      const firstId = ids[0];
      if (!firstId?.includes(".")) {
        return;
      }
      const file = files.find((item) => item.name === firstId);
      if (!file) {
        return;
      }
      setSelectedIds(ids);
      setCurrentFile(file);
    },
    [files]
  );

  if (!files?.length) {
    return (
      <div className="flex h-[var(--block-height)] items-center justify-center border border-dashed">
        <p className="text-muted-foreground text-sm">
          No code files available for this block.
        </p>
      </div>
    );
  }

  return (
    <div className="fade-in flex h-[var(--block-height)] animate-in duration-500">
      {/* Sidebar */}
      <div className="hidden w-64 bg-card sm:block">
        <div className="flex h-10 items-center border-b border-dashed px-4">
          <h3 className="font-mono text-muted-foreground text-sm">Files</h3>
        </div>
        <TreeProvider
          defaultExpandedIds={defaultExpandedIds}
          key={treeProviderKey}
          onSelectionChange={onSelectionChange}
          selectedIds={selectedIds}
        >
          <TreeView>
            {defaultFile && (
              <TreeNode nodeId="app">
                <TreeNodeTrigger>
                  <TreeExpander hasChildren /> <TreeIcon hasChildren />
                  <TreeLabel>app</TreeLabel>
                </TreeNodeTrigger>
                <TreeNodeContent hasChildren>
                  <TreeNode level={1} nodeId={defaultFile.name}>
                    <TreeNodeTrigger>
                      <TreeExpander /> <TreeIcon icon={<ReactIcon />} />
                      <TreeLabel>{defaultFile.name}</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                </TreeNodeContent>
              </TreeNode>
            )}
            {componentFiles.length > 0 && (
              <TreeNode nodeId="components">
                <TreeNodeTrigger>
                  <TreeExpander hasChildren /> <TreeIcon hasChildren />
                  <TreeLabel>components</TreeLabel>
                </TreeNodeTrigger>
                <TreeNodeContent hasChildren>
                  {componentFiles.map((file) => (
                    <TreeNode key={file.name} level={1} nodeId={file.name}>
                      <TreeNodeTrigger>
                        <TreeExpander /> <TreeIcon icon={<ReactIcon />} />
                        <TreeLabel>{file.name}</TreeLabel>
                      </TreeNodeTrigger>
                    </TreeNode>
                  ))}
                </TreeNodeContent>
              </TreeNode>
            )}
            {hookFiles.length > 0 && (
              <TreeNode nodeId="hooks">
                <TreeNodeTrigger>
                  <TreeExpander hasChildren /> <TreeIcon hasChildren />
                  <TreeLabel>hooks</TreeLabel>
                </TreeNodeTrigger>
                <TreeNodeContent hasChildren>
                  {hookFiles.map((file) => (
                    <TreeNode key={file.name} level={1} nodeId={file.name}>
                      <TreeNodeTrigger>
                        <TreeExpander /> <TreeIcon icon={<ReactIcon />} />
                        <TreeLabel>{file.name}</TreeLabel>
                      </TreeNodeTrigger>
                    </TreeNode>
                  ))}
                </TreeNodeContent>
              </TreeNode>
            )}
          </TreeView>
        </TreeProvider>
      </div>

      {/* Code Viewer */}
      <div className="relative w-full sm:w-[calc(100%-16rem)] sm:border-l sm:border-dashed">
        <div className="flex h-10 items-center justify-between border-b border-dashed bg-card px-4">
          <h3 className="font-mono text-muted-foreground text-sm">
            {currentFile?.name ?? "Select a file"}
          </h3>
          <CopyButton
            disabled={!currentFile?.code}
            onClick={() =>
              sendGAEvent("event", "copy_code", {
                block_name: name,
                file_name: currentFile?.name ?? "unknown",
              })
            }
            text={currentFile?.code ?? ""}
          />
        </div>

        <CodeBlock
          className="h-[calc(100%-2.5rem)] max-w-full overflow-auto"
          code={currentFile?.code ?? ""}
          isFetching={false}
          key={currentFile?.name ?? "empty"}
        />
      </div>
    </div>
  );
}
