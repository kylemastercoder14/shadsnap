/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/components/globals/code-blocks";
import { CliBlocks } from "@/components/globals/cli-blocks";
import Link from "next/link";

const Page = () => {
  const [activeSection, setActiveSection] = React.useState<string>("");
  // Scroll to section
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Detect active section based on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["typescript", "usage", "full-documentation"];
      let current = "";

      sections.forEach((sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = sectionId;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const componentsJson = `{
  "style": "default",
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "rsc": false,
  "tsx": false,
  "aliases": {
    "utils": "~/lib/utils",
    "components": "~/components"
  }
}
`;

  const jsConfigJson = `{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
`;

  const shadInit = {
    npm: "npx shadcn@latest init",
    yarn: "yarn shadcn@latest init",
    pnpm: "pnpm dlx shadcn@latest init",
    bun: "bunx --bun shadcn@latest init",
  };

  const shadSnapInit = {
    npm: "npx @shadsnap/cli init",
    yarn: "yarn @shadsnap/cli init",
    pnpm: "pnpm dlx @shadsnap/cli init",
    bun: "bunx --bun @shadsnap/cli init",
  };

  const shadSnapAdd = {
    npm: "npx @shadsnap/cli add badge",
    yarn: "yarn @shadsnap/cli add badge",
    pnpm: "pnpm dlx @shadsnap/cli add badge",
    bun: "bunx --bun @shadsnap/cli add badge",
  };

  const shadSnapAddAll = {
    npm: "npx @shadsnap/cli add",
    yarn: "yarn @shadsnap/cli add",
    pnpm: "pnpm dlx @shadsnap/cli add",
    bun: "bunx --bun @shadsnap/cli add",
  };
  return (
    <div className="pt-5 pb-10 pl-20 pr-20">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Installation</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid lg:grid-cols-10 relative grid-cols-1 gap-20">
        <div className="col-span-8">
          <h3 className="mt-2 text-3xl font-bold">Installation</h3>
          <p className="mt-2 text-muted-foreground text-sm">
            ShadSnap provides a CLI tool (inspired by and built to extend
            shadcn-ui) that allows you to quickly add, customize, and manage UI
            components in your project. With just a few simple commands, you can
            integrate ready-made components into your codebase without manually
            setting up each file — saving you time and maintaining consistency
            across your app.
          </p>
          <div id="typescript" className='scroll-mt-14'>
            <h3 className="mt-6 text-2xl font-semibold">Typescript</h3>
            <Separator className="mt-2 mb-5" />
            <p className="text-muted-foreground text-sm">
              This project and the components are written in TypeScript. We
              recommend using TypeScript for your project as well.
            </p>
            <p className="text-muted-foreground text-sm mt-3">
              To opt-out of TypeScript, you can use the tsx flag in your
              components.json file.
            </p>
            <div className="mt-4 no-scrollbar overflow-y-auto w-full">
              <CodeBlock
                language="json"
                filename="components.json"
                code={componentsJson}
              />
            </div>
            <p className="text-muted-foreground mt-5 mb-5 text-sm">
              To configure import aliases, you can use the following
              jsconfig.json:
            </p>
            <div className="no-scrollbar overflow-y-auto w-full">
              <CodeBlock
                language="json"
                filename="jsconfig.json"
                code={jsConfigJson}
              />
            </div>
          </div>
          <div id="usage" className='scroll-mt-14'>
            <h3 className="mt-6 text-2xl font-semibold">Usage</h3>
            <Separator className="mt-2 mb-5" />
            <h4 className="text-lg font-semibold">
              Initializing a new project
            </h4>
            <p className="text-muted-foreground text-sm mt-3">
              Use the{" "}
              <code className="bg-accent rounded-md py-0.5 px-1">init</code>{" "}
              command to set up your project for ShadSnap. This command prepares
              your environment by installing required dependencies, configuring
              your{" "}
              <code className="bg-accent rounded-md py-0.5 px-1">
                tailwind.config.js
              </code>
              , adding the necessary utility functions, setting up CSS
              variables, and enabling full integration with Shadcn UI — ensuring
              you're ready to start building with ShadSnap components
              immediately.
            </p>
            <ul className="mt-5 space-y-7">
              <li className="flex flex-col">
                <span className="font-semibold">
                  1. Initialize Dependencies
                </span>
                <span className="mt-2 text-sm text-muted-foreground">
                  Run the following command to initialize the project:
                </span>
                <div className="mt-4 no-scrollbar overflow-y-auto w-full">
                  <CliBlocks
                    showMultiplePackageOptions={true}
                    codeLanguage="shell"
                    lightTheme="nord"
                    darkTheme="vitesse-dark"
                    commandMap={shadInit}
                  />
                </div>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold">
                  2. Initialize ShadSnap CLI
                </span>
                <span className="mt-2 text-sm text-muted-foreground">
                  Next, set up your project with the ShadSnap CLI:
                </span>
                <div className="mt-4 no-scrollbar overflow-y-auto w-full">
                  <CliBlocks
                    showMultiplePackageOptions={true}
                    codeLanguage="shell"
                    lightTheme="nord"
                    darkTheme="vitesse-dark"
                    commandMap={shadSnapInit}
                  />
                </div>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold">
                  3. Add a Specific Component
                </span>
                <span className="mt-2 text-sm text-muted-foreground">
                  To add a specific component, specify the component name:
                </span>
                <div className="mt-4 no-scrollbar overflow-y-auto w-full">
                  <CliBlocks
                    showMultiplePackageOptions={true}
                    codeLanguage="shell"
                    lightTheme="nord"
                    darkTheme="vitesse-dark"
                    commandMap={shadSnapAdd}
                  />
                </div>
              </li>
            </ul>
            <div className="flex flex-col mt-5">
              <span className="font-semibold">View available components</span>
              <span className="mt-2 text-sm text-muted-foreground">
                If you want to see a list of all available components, run the{" "}
                <code className="bg-accent rounded-md py-0.5 px-1">add</code>{" "}
                command without any arguments:
              </span>
              <div className="mt-4 no-scrollbar overflow-y-auto w-full">
                <CliBlocks
                  showMultiplePackageOptions={true}
                  codeLanguage="shell"
                  lightTheme="nord"
                  darkTheme="vitesse-dark"
                  commandMap={shadSnapAddAll}
                />
              </div>
            </div>
          </div>
          <div id="full-documentation" className='scroll-mt-14'>
            <h3 className="mt-6 text-2xl font-bold">Full Documentation</h3>
            <Separator className="mt-2 mb-5" />
            <p className="text-muted-foreground text-sm">
              For detailed documentation, including installation guides,
              component usage, and more, visit the{" "}
              <Link
                href="https://tailwindcss.com/"
                target="_blank"
                className="underline text-white font-semibold"
              >
                docs.
              </Link>
            </p>
          </div>
        </div>
		<div className="col-span-2 ">
          <div className='fixed space-y-2 text-sm'>
            <p className="mb-5">On this page</p>
            <p
              onClick={() => handleScrollTo("typescript")}
              className={`cursor-pointer ${
                activeSection === "typescript"
                  ? "text-white"
                  : "text-muted-foreground"
              }`}
            >
              Typescript
            </p>
            <p
              onClick={() => handleScrollTo("usage")}
              className={`cursor-pointer ${
                activeSection === "usage"
                  ? "text-white"
                  : "text-muted-foreground"
              }`}
            >
              Usage
            </p>
            <p
              onClick={() => handleScrollTo("full-documentation")}
              className={`cursor-pointer ${
                activeSection === "full-documentation"
                  ? "text-white"
                  : "text-muted-foreground"
              }`}
            >
              Full Documentation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
