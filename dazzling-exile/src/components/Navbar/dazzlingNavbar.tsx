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
import React, { useState } from "react";
import Brand from "../brand";
import { MagicBlock } from "../blocks";
import { usePathname } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
const DazzlingNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Stash", "Build", "Profile"];

  const { status, data: session } = useSession();

  if (status == "unauthenticated") return <></>;
  return (
    <Navbar
      isBordered
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      className="sm:px-8 "
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          <Brand setup="mini" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarBrand>
          <Brand setup="navbar" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex  space-x-3 " justify="center">
        <NavbarItem>
          <Link href="/stash" aria-current="page">
            <MagicBlock
              variant="normal"
              active={pathname.startsWith("/stash") || pathname === "/"}
            >
              Stash
            </MagicBlock>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/build" aria-current="page">
            <MagicBlock variant="normal" active={pathname.startsWith("/build")}>
              Build
            </MagicBlock>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            <MagicBlock variant="normal">Things</MagicBlock>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <Link href="/profile" aria-current="page">
          <MagicBlock variant="normal" active={pathname.startsWith("/profile")}>
            {session?.user.username}
          </MagicBlock>
        </Link>
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
