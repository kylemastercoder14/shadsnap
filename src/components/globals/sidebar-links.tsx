"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const sidebarLinks = [
  {
    title: "Getting Started",
    links: [
      { name: "Introduction", href: "/docs" },
      { name: "Installation", href: "/docs/installation" },
      { name: "Changelog", href: "/docs/changelog" },
      { name: "Typography", href: "/docs/typography" },
      { name: "Cards", href: "#" },
      { name: "Forms", href: "#" },
      { name: "Tables", href: "#" },
    ],
  },
  {
    title: "Components",
    links: [
      { name: "Carousel", href: "#" },
      { name: "Badge", href: "#" },
      { name: "Date Picker", href: "#" },
      { name: "Time Picker", href: "#" },
      { name: "Image Upload", href: "#" },
      { name: "File Upload", href: "#" },
      { name: "Video Upload", href: "#" },
    ],
  },
  {
    title: "Blocks",
    links: [
      { name: "Contact Form", href: "#" },
      { name: "Stopwatch Timer", href: "#" },
    ],
  },
];
const SidebarLinks = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-y-1 text-sm pb-5 overflow-y-auto">
      {sidebarLinks.map((section) => {
        return (
          <div key={section.title} className="gap-y-2 flex flex-col">
            <p className="font-semibold px-1.5 mt-5">{section.title}</p>
            {section.links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`py-1.5 pr-[90px] px-2 hover:bg-accent rounded-md transition ${
                    pathname === link.href ? "bg-accent" : ""
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default SidebarLinks;
