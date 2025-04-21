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
import Link from "next/link";
import { CodeBlock } from "@/components/globals/code-blocks";

const Page = () => {
  const [activeSection, setActiveSection] = React.useState<string>("");
  const code = `import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}
`;

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
      const sections = ["capabilities", "getting-started", "usage"];
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
  return (
    <div className="pt-5 pb-10 pl-20 pr-20">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Introduction</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid lg:grid-cols-10 relative grid-cols-1 gap-20">
        <div className="col-span-8">
          <h3 className="mt-2 text-3xl font-bold">Introduction</h3>
          <p className="mt-2 text-muted-foreground text-sm">
            ShadSnap extends the power of Shadcn UI by offering a ready-to-use
            library of components, layouts, and patterns — designed for faster
            development and bigger creativity. From dashboards to landing pages,
            forms to modals, we provide polished building blocks you can snap
            into your project in seconds.
          </p>
          <div id="capabilities" className='scroll-mt-14'>
            <h3 className="mt-6 text-2xl font-semibold">Capabilities</h3>
            <Separator className="mt-2 mb-5" />
            <p className="text-muted-foreground text-sm">
              Whether you're shipping an MVP or refining a production app,
              ShadSnap helps you build faster, design better, and create bolder
              experiences — all while staying fully customizable and easy to
              maintain.
            </p>
            <ul className="list-disc pl-5 mt-4 text-sm text-muted-foreground">
              <li>
                <span className="text-white font-semibold">
                  Prebuilt Components
                </span>{" "}
                - Snap in ready-to-use components like sidebars, billing forms,
                modals, authentication screens, dashboards, and more — all built
                on top of Shadcn UI.
              </li>
              <li>
                <span className="text-white font-semibold">
                  Layout Templates
                </span>{" "}
                - Jumpstart your app with complete page layouts for admin
                panels, landing pages, blogs, portfolios, and SaaS platforms.
              </li>
              <li>
                <span className="text-white font-semibold">
                  Fully Customizable
                </span>{" "}
                - Every component is clean, scalable, and easily styled to match
                your brand — no locking you into one design system.
              </li>
              <li>
                <span className="text-white font-semibold">
                  Light and Dark Mode Ready
                </span>{" "}
                - All components are optimized for seamless theme switching with
                polished visuals in both light and dark modes.
              </li>
              <li>
                <span className="text-white font-semibold">
                  Performance Optimized
                </span>{" "}
                - Minimalistic, accessible, and fast — ShadSnap components are
                crafted with best practices to keep your app performant.
              </li>
              <li>
                <span className="text-white font-semibold">
                  Easy Integration
                </span>{" "}
                - Drop components directly into your Next.js projects without
                extra configuration. Works out of the box with Shadcn UI and
                TailwindCSS setups.
              </li>
              <li>
                <span className="text-white font-semibold">
                  {" "}
                  Growing Component Library{" "}
                </span>{" "}
                - We’re constantly adding more components, sections, and layouts
                to keep your workflow fresh and future-proof.
              </li>
            </ul>
          </div>
          <div id="getting-started" className='scroll-mt-14'>
            <h3 className="mt-6 text-2xl font-semibold">Getting Started</h3>
            <Separator className="mt-2 mb-5" />
            <p className="text-muted-foreground text-sm">
              To get the most out of ShadSnap, you should have a basic
              understanding of{" "}
              <Link href="https://react.dev/" target='_blank' className="underline text-white font-semibold">
                React.js
              </Link>{" "}
              or{" "}
              <Link href="https://nextjs.org/" target='_blank' className="underline text-white font-semibold">
                Next.js
              </Link>
              , along with some familiarity with{" "}
              <Link href="https://tailwindcss.com/" target='_blank' className="underline text-white font-semibold">
                Tailwind CSS
              </Link>
              . Since ShadSnap is built on top of Shadcn UI, having a basic
              knowledge of Shadcn UI components and structure is also
              recommended. If you're new to Shadcn UI, you can check out the
              official{" "}
              <Link href="https://ui.shadcn.com/" target='_blank' className="underline text-white font-semibold">
                Shadcn UI documentation
              </Link>{" "}
              to get up to speed before diving into extended components and
              layouts with ShadSnap.
            </p>
          </div>
          <div id="usage" className='scroll-mt-14'>
            <h3 className="mt-6 text-2xl font-semibold">Usage</h3>
            <Separator className="mt-2 mb-5" />
            <p className="text-sm text-muted-foreground">
              Just copy and paste the components or layouts you want from the
              ShadSnap library into your project. You can then customize and use
              them directly in your React or Next.js application — fully
              compatible with Shadcn UI and TailwindCSS.
            </p>
            <p className="text-white font-semibold text-sm mt-5 mb-4">
              Example:{" "}
            </p>
            <div className="h-[500px] no-scrollbar overflow-y-auto w-full">
              <CodeBlock
                language="tsx"
                filename="DummyComponent.tsx"
                code={code}
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 ">
          <div className='fixed space-y-2 text-sm'>
            <p className="mb-5">On this page</p>
            <p
              onClick={() => handleScrollTo("capabilities")}
              className={`cursor-pointer ${
                activeSection === "capabilities"
                  ? "text-white"
                  : "text-muted-foreground"
              }`}
            >
              Capabilities
            </p>
            <p
              onClick={() => handleScrollTo("getting-started")}
              className={`cursor-pointer ${
                activeSection === "getting-started"
                  ? "text-white"
                  : "text-muted-foreground"
              }`}
            >
              Getting Started
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
