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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TypographyAdventure } from "./typography-adventure";
import { CodeBlock } from "../../../../components/globals/code-blocks";

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

  const typographyCode = `
export function TypographyAdventure() {
  return (
    <div className='border p-5 mt-5 rounded-md'>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        The Lost City of Lumina
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Deep in the heart of the Whispering Woods, there lay a hidden city made
        entirely of glowing crystals. This city, called Lumina, was said to be a
        place of endless wonder and secrets.
      </p>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        The Discovery
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        One fateful day, an adventurous girl named Elara stumbled upon an
        ancient map while exploring her grandmother's attic. The map promised
        riches and mysteries beyond imagination.
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        "Follow the river where the sun sets, and you shall find the gates of
        light."
      </blockquote>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        The Journey Begins
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Elara packed her bag with essentials: a compass, a journal, and her
        trusty lantern. She followed the winding river, ventured through thick
        forests, and crossed rocky canyons.
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Crossed the Misty Bridge</li>
        <li>Braved the Howling Caverns</li>
        <li>Outsmarted the Trickster Owls</li>
      </ul>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Trials of Lumina
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Reaching Lumina wasn't easy. She faced three trials at the crystal
        gates:
      </p>
      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>Trial of Courage</li>
        <li>Trial of Wisdom</li>
        <li>Trial of Heart</li>
      </ol>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Each test pushed Elara to her limits, but her kindness and determination
        led her to success.
      </p>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Inside Lumina
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The city was more beautiful than she ever imagined: streets paved with
        sapphire stones, houses shimmering like diamonds, and skies filled with
        aurora lights.
      </p>
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full">
          <thead>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold">Location</th>
              <th className="border px-4 py-2 text-left font-bold">Treasure</th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2">Sapphire Square</td>
              <td className="border px-4 py-2">Endless Wisdom Scrolls</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2">Emerald Gardens</td>
              <td className="border px-4 py-2">Healing Crystals</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2">Ruby Tower</td>
              <td className="border px-4 py-2">Crown of Light</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Elara knew that the true treasure was not gold or jewels, but the
        friendships she made and the courage she discovered within herself.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        She returned home a hero, her heart forever changed by the wonders of
        Lumina.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The moral of the story: The greatest treasures are found not in riches,
        but in the adventures that shape who we are.
      </p>
    </div>
  );
}
`;
  return (
    <div className="pt-5 pb-10 pl-20 pr-20">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Typography</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid lg:grid-cols-10 relative grid-cols-1 gap-20">
        <div className="col-span-8">
          <h3 className="mt-2 text-3xl font-bold">Typography</h3>
          <p className="mt-2 text-muted-foreground text-sm">
            When writing documentation or content pages, use the following
            elements and styles to keep a clean, consistent design across your
            project:
          </p>
          <Tabs defaultValue="preview" className="mt-3">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <TypographyAdventure />
            </TabsContent>
            <TabsContent value="code">
              <div className="h-[500px] overflow-auto w-full">
                <CodeBlock language="tsx" filename='typograpy-demo.tsx' code={typographyCode} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Page;
