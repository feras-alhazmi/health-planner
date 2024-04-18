"use client";
import { usePathname } from "next/navigation";

import SideMenuButton from "./side_menu_button";

import { CiBoxes, CiReceipt } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";

export default function SideMenu() {
  const pathName = usePathname();
  function checkActive(path: string) {
    return `link ${pathName === path ? "active" : "unactive"}`;
  }

  return (
    <nav className="h-svh bg-blue border-r-1 border-divider flex-col flex text-center text-base text-pretty p-2 transition-all">
      <SideMenuButton
        icon={<MdDashboard />}
        text="Home"
        linkPath="/"
      ></SideMenuButton>
      <SideMenuButton
        icon={<CiBoxes />}
        text="Landing"
        linkPath="/landing"
      ></SideMenuButton>
      <SideMenuButton
        icon={<CiReceipt />}
        text="Orders"
        linkPath="/orders"
      ></SideMenuButton>
    </nav>
  );
}
