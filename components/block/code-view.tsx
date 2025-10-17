"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
import { loadCode } from "@/lib/utils/code";
import type { BlockFile } from "@/types";
import { CopyButton } from "../copy-button";
import CodeBlock from "./code-block";

const DEFAULT_FILE_NAME = "page.tsx";

type CodeViewProps = {
  files: BlockFile[];
  name: string;
};

export function CodeView({ files, name }: CodeViewProps) {
  const defaultFile = useMemo(() => {
    if (!files?.length) {
      return null;
    }
    return files.find((file) => file.name === DEFAULT_FILE_NAME) ?? files[0];
  }, [files]);

  const [selectedIds, setSelectedIds] = useState<string[]>(() =>
    defaultFile ? [defaultFile.name] : []
  );
  const [currentFile, setCurrentFile] = useState<BlockFile | null>(defaultFile);
  const [currentCode, setCurrentCode] = useState<string>("");
  const [isFetching, setIsFetching] = useState(false);
  const codeCache = useRef(new Map<string, string>());

  const componentFiles = useMemo<BlockFile[]>(
    () => files.filter((file) => file.type === "component"),
    [files]
  );

  const hookFiles = useMemo<BlockFile[]>(
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
    codeCache.current.clear();
  }, []);

  useEffect(() => {
    if (!defaultFile) {
      setCurrentFile(null);
      setSelectedIds([]);
      setCurrentCode("");
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

  useEffect(() => {
    const filePath = currentFile?.path;
    if (!filePath) {
      setCurrentCode("");
      setIsFetching(false);
      return;
    }

    const resolvedPath = filePath;
    const cachedCode = codeCache.current.get(resolvedPath);
    if (cachedCode) {
      setCurrentCode(cachedCode);
      setIsFetching(false);
      return;
    }

    let active = true;
    setIsFetching(true);

    async function fetchCode() {
      try {
        const code = await loadCode(resolvedPath);
        if (!active) {
          return;
        }
        codeCache.current.set(resolvedPath, code);
        setCurrentCode(code);
      } catch (_err) {
        if (!active) {
          return;
        }
        setCurrentCode("// Failed to load code");
      } finally {
        if (active) {
          setIsFetching(false);
        }
      }
    }

    fetchCode();

    return () => {
      active = false;
    };
  }, [currentFile?.path]);

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
      <div className="flex h-svh items-center justify-center border border-dashed">
        <p className="text-muted-foreground text-sm">
          No code files available for this block.
        </p>
      </div>
    );
  }

  return (
    <div
      aria-busy={isFetching}
      className="fade-in flex h-svh animate-in duration-500"
    >
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
            {componentFiles?.length > 0 && (
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
            {hookFiles?.length > 0 && (
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

      <div className="relative w-full sm:w-[calc(100%-16rem)] sm:border-l sm:border-dashed">
        <div className="flex h-10 items-center justify-between border-b border-dashed bg-card px-4">
          <h3 className="font-mono text-muted-foreground text-sm">
            {currentFile?.name ?? "Select a file"}
          </h3>
          <CopyButton
            disabled={!currentCode}
            onClick={() =>
              sendGAEvent("event", "copy_code", {
                block_name: name,
                file_name: currentFile?.name ?? "unknown",
              })
            }
            text={currentCode}
          />
        </div>

        <CodeBlock
          className="h-[calc(100%-2.5rem)] max-w-full overflow-auto"
          code={currentCode}
          isFetching={isFetching}
          key={currentFile?.path ?? "empty"}
        />
      </div>
    </div>
  );
}
