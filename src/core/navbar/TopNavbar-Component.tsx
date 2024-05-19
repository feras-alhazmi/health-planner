"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  useDisclosure,
  Divider,
} from "@nextui-org/react";
import { useAuthStore } from "../auth/store/Auth-Store";
import { useRouter } from "next/navigation";
import { on } from "events";
import Image from "next/image";

export default function TopMenu() {
  // const useLoadStore = useLoadingStore((state) => state);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const authStore = useAuthStore((state) => state);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Landing", href: "/landing" },
  ];

  const loggedOutMenuItems = [
    { label: "Login", href: "/sign_in" },
    { label: "Sign Up", href: "/sign_up" },
  ];
  const loggedInMenuItems = [
    { label: "Participant", href: "/participants" },
    { label: "Profile", href: "/profile" },
    { label: "Health Provider", href: "/providers" },
  ];
  var navbarState = authStore.userData
    ? "hidden"
    : "text-blue bg-white border-divider";

  return (
    <Navbar className={navbarState} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="justify-between">
        <NavbarBrand>
          <Link
            onClick={() => {
              router.push("/");
            }}
          >
            <Image
              src="/assets/BrightcareLogo.svg"
              alt="logo"
              width={60}
              height={60}
              className="m-0 p-0 "
            />
          </Link>

          <p
            className="font-bold ml-2 hidden md:block text-blue"
            style={{ fontFamily: "Helvetica" }}
          >
            BrightKare
          </p>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarContent justify="center" className="hidden lg:flex">
        <NavbarItem>
          <Link href="/" className="text-blue">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/landing" className="text-blue">
            Landing
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="max-sm:hidden" justify="end">
        {!authStore.authUser ? (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/sign_in" className="text-blue">
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} className="text-white bg-blue" href="/sign_up">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Button
                onClick={() => {
                  authStore.logout();
                  router.push("/");
                }}
                className="text-red-500"
                variant="faded"
              >
                Logout
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={item.href} size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <Divider></Divider>
        {authStore.authUser ? (
          <>
            {loggedInMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color="primary"
                  className="w-full"
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </>
        ) : (
          <>
            {loggedOutMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color="primary"
                  className="w-full"
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </>
        )}
        {authStore.authUser ? (
          <NavbarMenuItem>
            <Link
              onClick={() => {
                authStore.logout();
                router.push("/");
              }}
              color="danger"
              className="w-full"
              size="lg"
            >
              Sign Out
            </Link>
          </NavbarMenuItem>
        ) : null}
      </NavbarMenu>
    </Navbar>
  );
}
