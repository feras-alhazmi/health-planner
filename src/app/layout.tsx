"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/core/navbar/TopNavbar-Component";
import SideMenu from "@/core/navbar/side_menu/side_menu_component";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const route = usePathname();

  return (
    <html lang="en">
      <body className="w-svw h-svh flex flex-col bg-background">
        <header>
          <TopNavbar></TopNavbar>
          <div className="flex flex-row">
            {!route.includes("landing") ? <SideMenu></SideMenu> : null}
            <main className="p-10">{children}</main>
          </div>
        </header>
      </body>
    </html>
  );
}
