import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Brand from "./brand";
import { Divider } from "@nextui-org/react";
const Footer = () => {
  return (
    <>
      <Divider />
      <div className=" snap-always snap-end w-screen h-28 mt-3 bg-background fr px-12 mb-2">
        <div className="basis-1/2 fc gap-4">
          <Brand setup="mini" />
          <Link href="https://github.com/mstrj" className="pt-1 fr gap-2">
            Created by
            <span className="text-gradient">MstrJ</span>
            <FaGithub className="mt-1" />
          </Link>
        </div>
        <div className="basis-1/2">
          <p className="text-foreground">
            This product isn&apos;t affiliated with or endorsed by Grinding Gear
            Games in any way.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
