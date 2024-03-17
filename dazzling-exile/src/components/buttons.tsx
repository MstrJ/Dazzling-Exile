"use client";
import { Button } from "@nextui-org/button";
import { signIn, signOut } from "next-auth/react";
import React, { useState } from "react";
import { cn } from "../utils/cn";

export function BtnMagicBorder(props: {
  children: React.ReactNode;
  variant: "magic" | "normal";
  handle?: () => void;
  activeMagic?: boolean;
  className?: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <Button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      disableRipple
      onClick={props.handle}
      className={` ${
        props.activeMagic
          ? "bg-gradient"
          : props.variant == "magic"
          ? "bg-gray-500/50"
          : ""
      } cursor-pointer relative inline-flex h-fit p-[1.5px] rounded-full  w-fit overflow-hidden  focus:outline-none focus:ring-0 `}
    >
      <span
        className={`transition-all inset-y-[-500%] inset-x-[-200%] animate-[spin_2.7s_linear_infinite] absolute ${
          props.variant === "normal"
            ? hover
              ? " opacity-100 "
              : !props.activeMagic
              ? "opacity-0"
              : "opacity-100"
            : hover
            ? "opacity-100"
            : "opacity-0"
        } ${
          props.activeMagic
            ? "bg-gradient"
            : props.variant == "magic"
            ? "bg-gradient"
            : "bg-gray-500/50"
        }
    `}
      />
      <span
        className={cn(
          "duration-500 bg-background text-foreground inline-flex h-full w-full py-1 px-4 items-center justify-center rounded-full  text-lg  font-medium  backdrop-blur-3xl",
          props.className
        )}
      >
        {props.children}
      </span>
    </Button>
  );
}

export function BtnLogin() {
  const handleClick = async () => {
    await signIn("poe", { callbackUrl: "/xdd" });
  };
  return (
    <BtnMagicBorder variant="magic" handle={handleClick} className="px-8">
      Become Dazzling
    </BtnMagicBorder>
  );
}
export function BtnLogout() {
  const handleClick = async () => {
    await signOut({ callbackUrl: "/" });
  };
  return (
    <BtnMagicBorder variant="magic" handle={handleClick}>
      Logout
    </BtnMagicBorder>
  );
}
