"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { Component, ReactElement } from "react";

interface SideMenuButtonProps {
  linkPath: string;
  text: string;
  icon: ReactElement;
}

export default function SideMenuButton({
  linkPath,
  text,
  icon,
}: SideMenuButtonProps) {
  const pathName = usePathname();
  function checkActive() {
    return `link ${pathName === linkPath ? "active" : "unactive"}`;
  }
  return (
    <div
      className={`${checkActive()} flex flex-row text-black rounded-md h-11 items-center justify-between transition-all p-2`}
    >
      <div className="size-5">
        <Link href={linkPath} className="text-white">
          {icon}
        </Link>
      </div>
      <Link
        className="hidden sm:block text-white transition-all text-sm"
        href={linkPath}
      >
        {text}
      </Link>
      <div className="w-2 max-sm:hidden transition-all"></div>
    </div>
  );
}
