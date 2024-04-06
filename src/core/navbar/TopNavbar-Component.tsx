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
} from "@nextui-org/react";

export default function TopMenu() {
  // const useLoadStore = useLoadingStore((state) => state);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const createProductModal = useDisclosure();
  const createCategoryModal = useDisclosure();
  const menuItems = ["Home", "Products", "Orders", "Log Out"];

  return (
    <Navbar
      className="text-black bg-landing-page border-divider"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div className="w-10 h-10">{/* <Logo /> */}</div>
          <p className="font-bold text-inherit">Health Planner</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" className="hidden lg:flex">
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/landing">Landing</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="success" href="#" variant="faded">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
