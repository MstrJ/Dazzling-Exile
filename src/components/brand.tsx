import Link from "next/link";
import React from "react";

const Brand = (prop: { setup: "mini" | "navbar" }) => {
  return (
    <Link href="/" className="text-3xl font-bold  ">
      Dazzling Exile
      {prop.setup === "mini" ? (
        <div className="w-[40%] fc relative items-center ">
          <div className="absolute -inset-x-2 top-0 bg-gradient-to-r from-transparent via-primary-300 to-transparent h-[2px] w-3/4" />
          <div className="absolute inset-x-16 top-0 bg-gradient-to-r from-transparent via-secondary-400 to-transparent h-[1px] w-1/4 blur-sm" />
          <div className="absolute -inset-x-2 top-0 bg-gradient-to-r from-transparent via-primary-900 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-16 top-0 bg-gradient-to-r from-transparent via-secondary-300 to-transparent h-[2px] w-1/4" />
        </div>
      ) : (
        <div className="w-full fc relative items-center ">
          <div className="absolute inset-x-7 top-0 bg-gradient-to-r from-transparent via-primary-300 to-transparent h-[2px] w-3/4" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-secondary-400 to-transparent h-[1px] w-1/4 blur-sm" />
          <div className="absolute inset-x-7 top-0 bg-gradient-to-r from-transparent via-primary-900 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-secondary-300 to-transparent h-[2px] w-1/4" />
        </div>
      )}
    </Link>
  );
};

export default Brand;
