"use client";
import React from "react";
import { BtnLogout } from "../buttons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MagicBlock } from "../blocks";

const DazzlingSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="fc justify-between h-full items-center pb-16 ">
      <div className="fc gap-4">
        <Link href="stash">
          <MagicBlock variant="normal" active={pathname.includes("/stash")}>
            Stash
          </MagicBlock>
        </Link>
        <Link href="preferences">
          <MagicBlock
            variant="normal"
            active={pathname.includes("/preferences")}
          >
            Preferences
          </MagicBlock>
        </Link>
      </div>
      <BtnLogout />
    </div>
  );
};

export default DazzlingSidebar;
