"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { useTheme } from "next-themes";

export default function SparklesComponent(props: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  return (
    <div className="relative snap-always snap-center size-screen  pt-[12rem]  bg-background flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="text-foreground md:text-7xl text-3xl lg:text-9xl font-bold text-center relative  z-10 -mb-1">
        Dazzling Exile
      </h1>
      <div className=" z-0 w-[40rem] h-screen relative flex items-center flex-col">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary-500 to-transparent h-[2px] w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-secondary-500 to-transparent h-[4px] w-1/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary-900 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-secondary-400 to-transparent h-[2px] w-1/4" />
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.3}
          particleDensity={1000}
          className="w-full h-[40%] bg-background"
          isDarkParticleColor={theme !== "dark"}
        />
        <div className="absolute  inset-0 w-full h-[40%]  bg-background [mask-image:radial-gradient(350px_170px_at_top,transparent_50%,white)]"></div>
        <div className="z-10 -mt-[6.5rem] flex gap-2 ">{props.children}</div>
      </div>
    </div>
  );
}
