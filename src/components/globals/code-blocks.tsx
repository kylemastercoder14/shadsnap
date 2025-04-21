/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { Button } from '../ui/button';

type CodeBlockProps = {
  language: string;
  filename?: string;
  highlightLines?: number[];
} & (
  | { code: string; tabs?: never }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);

export const CodeBlock = ({
  language,
  filename,
  code,
  highlightLines = [],
  tabs = [],
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [highlightedCode, setHighlightedCode] = useState("");
  const { theme } = useTheme();

  const tabsExist = tabs.length > 0;
  const activeCode = tabsExist ? tabs[activeTab].code : code || "";
  const activeLanguage = tabsExist
    ? tabs[activeTab].language || language
    : language;
  const activeHighlightLines = tabsExist
    ? tabs[activeTab].highlightLines || []
    : highlightLines;

  const copyToClipboard = async () => {
    if (activeCode) {
      await navigator.clipboard.writeText(activeCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    async function loadHighlightedCode() {
      try {
        const { codeToHtml } = await import("shiki");

        const highlighted = await codeToHtml(activeCode, {
          lang: activeLanguage,
          themes: {
            light: "nord",
            dark: "vitesse-dark",
          },
          defaultColor: theme === "dark" ? "dark" : "light",
        });
        setHighlightedCode(highlighted);
      } catch (error) {
        console.error("Error highlighting code:", error);
        setHighlightedCode(`<pre>${activeCode}</pre>`);
      }
    }

    loadHighlightedCode();
  }, [activeCode, activeLanguage, theme]);

  return (
    <div className="w-full rounded-lg font-mono text-sm">
      <div className="mt-2 relative">
        {!tabsExist && filename && (
          <div className="absolute top-2 right-3">
            <div className="flex justify-between items-center py-2">
              <Button
                onClick={copyToClipboard}
                variant="ghost"
              >
                {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
              </Button>
            </div>
          </div>
        )}
        {highlightedCode ? (
          <div
            className="[&>pre]:overflow-x-auto [&>pre]:rounded-md [&>pre]:p-4 [&>pre]:font-mono"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        ) : (
          <pre className="rounded-md border border-border bg-white p-4 font-mono dark:bg-black">
            {activeCode}
          </pre>
        )}
      </div>

      {tabsExist && (
        <button
          onClick={copyToClipboard}
          className="absolute top-4 right-4 flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-sans"
        >
          {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
        </button>
      )}
    </div>
  );
};
