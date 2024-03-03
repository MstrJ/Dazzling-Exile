"use client";
import { Button } from "@nextui-org/button";
import { signIn, signOut } from "next-auth/react";
import React, { useState } from "react";

export function BtnMagicBorder(props: {
  children: React.ReactNode;
  variant: "magic" | "normal";
  handle?: () => void;
}) {
  const [hover, setHover] = useState(false);
  if (props.variant === "magic") {
    return (
      <Button
        onClick={props.handle}
        disableRipple
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className=" cursor-pointer relative inline-flex h-12 w-fit overflow-hidden rounded-full p-[2.4px] focus:outline-none focus:ring-0 "
      >
        <span
          className={`absolute inset-[-1000%] animate-[spin_2.2s_linear_infinite]
          }  bg-[conic-gradient(from_90deg_at_50%_50%,#05C2FC_0%,#68F0FE_25%,#C166FF_50%,#7F00FF_65%,#05C2FC_100%)]`}
        />
        <span
          className={`${
            hover
              ? "bg-foreground text-background"
              : "bg-background text-foreground"
          }  duration-500  inline-flex h-full w-full px-3 items-center justify-center rounded-full  text-lg  font-medium  backdrop-blur-3xl `}
        >
          {props.children}
        </span>
      </Button>
    );
  }
  return (
    <Button
      onClick={props.handle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className=" cursor-pointer relative inline-flex h-12 w-fit overflow-hidden rounded-full p-[2.4px] focus:outline-none focus:ring-0 "
    >
      <span
        className={` transition-all    absolute ${
          hover ? "opacity-100 inset-[-1000%]" : " opacity-0 inset-0"
        } animate-[spin_2.2s_linear_infinite]
        bg-[conic-gradient(from_90deg_at_50%_50%,#05C2FC_0%,#68F0FE_25%,#C166FF_50%,#7F00FF_65%,#05C2FC_100%)]`}
      />
      <span
        className={` duration-500 bg-background text-foreground inline-flex h-full w-full px-3 items-center justify-center rounded-full  text-lg  font-medium  backdrop-blur-3xl `}
      >
        {props.children}
      </span>
    </Button>
  );
}

export function BtnLogin() {
  const handleClick = async () => {
    await signIn("poe", { callbackUrl: "/" });
  };
  return (
    <BtnMagicBorder variant="magic" handle={handleClick}>
      Become Dazzling
    </BtnMagicBorder>
  );
}
export function BtnLogout() {
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
