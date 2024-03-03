import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Brand from "./brand";
import { Divider } from "@nextui-org/react";
import { ThemeSwitch } from "./theme-switch";
const Footer = () => {
  return (
    <>
      <Divider />
      <div className="w-screen h-36 mt-3 bg-background fr px-6 mb-2">
        <div className="basis-1/2 fc gap-4">
          <Brand setup="mini" />
          <Link href="https://github.com/mstrj" className="pt-1 fr gap-2">
            Created by
            <span className=" text-transparent  bg-clip-text  bg-gradient-to-r from-primary-400 to-secondary-300">
              MstrJ
            </span>
            <FaGithub className="mt-1" />
          </Link>
          <ThemeSwitch />
        </div>
        <div className="basis-1/2">
          <p className="text-foreground">
            This product isn't affiliated with or endorsed by Grinding Gear
            Games in any way.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
