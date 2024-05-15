"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/core/navbar/TopNavbar-Component";
import SideMenu from "@/core/navbar/side_menu/side_menu_component";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import ResetPasswordModal from "@/core/modal/Reset-Password-Modal";
import { useModalStore } from "@/core/modal/store/Modal-Store";
import { use, useEffect } from "react";
import { useDisclosure } from "@nextui-org/modal";
import Sidebar from "./components/usersSearch/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const route = usePathname();
  const modalStore = useModalStore();
  const showSideMenu =
    !route.includes("landing") && !route.includes("sign") && route !== "/";

  const margin = showSideMenu ? "sm:ml-64" : "";

  return (
    <html lang="en">
      <body>
        {...modalStore.getAllModals().map((modal) => modal())}

        <TopNavbar></TopNavbar>

        <main>
          {" "}
          <div className="flex flex-row">
            {showSideMenu ? <SideMenu></SideMenu> : null}

            <div className={`${margin} overflow-x-hidden`}>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
