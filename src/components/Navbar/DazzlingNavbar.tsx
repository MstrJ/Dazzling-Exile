"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import { BtnLogin, BtnLogout } from "../buttons";
import Brand from "../brand";
const DazzlingNavbar = () => {
  const { data: session, status, update } = useSession();

  if (status !== "authenticated") return <></>;

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Profile", "Dashboard", "Login"];

  return (
    <Navbar
      isBordered
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Brand setup="navbar" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarBrand>
          <Brand setup="navbar" />
        </NavbarBrand>
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Profile
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/">
            Dashboard
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <BtnLogout />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default DazzlingNavbar;
