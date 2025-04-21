"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();

  const logoSrc =
    theme === "dark" ? "/assets/dark-logo.png" : "/assets/light-logo.png";

  return (
    <Link href="/" className="lg:flex hidden items-center lg:mr-2">
      <Image src={logoSrc} alt="Logo" width={40} height={40} />
      <span className="font-semibold">ShadSnap</span>
    </Link>
  );
};

export default Logo;
