"use client";
import { usePathname } from "next/navigation";

import SideMenuButton from "./side_menu_button";

import { CiBoxes, CiReceipt } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import Avatar from "./Avatar";

export default function SideMenu() {
  return (
    <nav className="h-svh  bg-blue  border-r-1 border-divider flex-col flex text-center text-base text-pretty p-2 transition-all">
      <div className="mt-16  flex justify-center items-center px-10">
        <Avatar path="/assets/images/user.png" size={90} />
        <p className="text-lg font-semibold text-white hidden xl:block xl:ml-5 ">
          Dr. Waleed Alhazmi
        </p>
      </div>
      <div className="mt-32">
        <SideMenuButton
          icon={
            <HiUserGroup
              className="inline-block mr-5 font-extrabold"
              size={30}
            />
          }
          text="Participants"
          linkPath="/"
        ></SideMenuButton>
        <SideMenuButton
          icon={
            <FaTelegramPlane
              className="inline-block mr-5 font-extrabold"
              size={30}
            />
          }
          text="Chat"
          linkPath="/chat"
        ></SideMenuButton>
      </div>

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
      <SideMenuButton
        icon={<CiBoxes />}
        text="Features"
        linkPath="/features/participants"
      ></SideMenuButton>
    </nav>
  );
}
