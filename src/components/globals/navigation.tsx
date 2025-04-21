"use client";

import Link from "next/link";
import React from "react";
import SearchCommand from "./search-command";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { ModeToggle } from "./mode-toggle";
import Logo from "./logo";
import { MenuIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  return (
    <>
      <header className={`border-b ${pathname === "/" ? "" : "border-dashed"} backdrop-blur z-10 w-full sticky inset-x-0 top-0`}>
        <div className={`flex items-center max-w-7xl mx-auto px-5 gap-3 h-12 ${pathname === "/" ? "" : "border-dashed border-r border-l"} justify-between`}>
          <div className="flex items-center gap-3">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden block">
                  <MenuIcon className="size-4" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className='h-[70vh] px-5 py-3'>
                <div className="flex flex-col gap-y-3 mt-5">
                  <Link
                    className="text-muted-foreground hover:text-black dark:hover:text-white"
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="text-muted-foreground hover:text-black dark:hover:text-white"
                    href="/docs"
                  >
                    Docs
                  </Link>
                  <Link
                    className="text-muted-foreground hover:text-black dark:hover:text-white"
                    href="/components"
                  >
                    Components
                  </Link>
                  <Link
                    className="text-muted-foreground hover:text-black dark:hover:text-white"
                    href="/blocks"
                  >
                    Blocks
                  </Link>
                </div>
              </DrawerContent>
            </Drawer>
            <Logo />

            <Link
              className="text-muted-foreground lg:block hidden hover:text-black"
              href="/docs"
            >
              Docs
            </Link>
            <Link
              className="text-muted-foreground lg:block hidden hover:text-black"
              href="/components"
            >
              Components
            </Link>
            <Link
              className="text-muted-foreground lg:block hidden hover:text-black"
              href="/blocks"
            >
              Blocks
            </Link>
          </div>
          <div className="flex items-center lg:w-auto w-full">
            <SearchCommand />
            <Button variant="ghost" size="icon">
              <FaGithub />
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
