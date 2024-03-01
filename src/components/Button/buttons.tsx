"use client";
import { Button } from "@nextui-org/button";
import { signIn, signOut } from "next-auth/react";
import React from "react";

export function LoginBtn() {
  const handleClick = async () => {
    await signIn("poe", { callbackUrl: "/" });
  };
  return (
    <Button
      onClick={handleClick}
      disableRipple
      variant="flat"
      className="text-primary relative overflow-visible rounded-full hover:-translate-y-[2px] px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-md after:inset-0 after:bg-primary-500/30 after:z-[-1] after:transition after:!duration-500 hover:after:scale-110 hover:after:opacity-0"
      size="md"
    >
      Login
    </Button>
  );
}
export function LogoutBtn() {
  const handleClick = async () => {
    await signOut();
  };
  return (
    <Button
      onClick={handleClick}
      disableRipple
      variant="flat"
      className="text-danger relative overflow-visible rounded-full hover:-translate-y-[2px] px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-md after:inset-0 after:bg-danger-500/30 after:z-[-1] after:transition after:!duration-500 hover:after:scale-110 hover:after:opacity-0"
      size="md"
    >
      Logout
    </Button>
  );
}
