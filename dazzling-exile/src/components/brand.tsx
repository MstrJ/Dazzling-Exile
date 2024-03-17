import Link from "next/link";
import React from "react";

const Brand = (prop: { setup: "mini" | "navbar" }) => {
  return (
    <Link href="/" className="text-3xl font-bold  ">
      Dazzling Exile
      {prop.setup === "mini" ? (
        <div className="w-[38vh] fc relative items-center ">
          <div className="absolute -inset-x-4 top-0 bg-gradient-to-r from-transparent via-primary-500 h-[2px] w-3/4" />
          <div className="absolute inset-x-16 top-0 bg-gradient-to-r from-transparent via-secondary-500 to-transparent h-[1px] w-1/4 blur-sm" />
          <div className="absolute -inset-x-4 top-0 bg-gradient-to-r from-transparent via-primary-900 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-16 top-0 bg-gradient-to-r from-transparent via-secondary-400 to-transparent h-[2px] w-1/4" />
        </div>
      ) : (
        <div className="w-full fc relative items-center">
          <div className="absolute inset-x-5 top-0 bg-gradient-to-r from-transparent via-primary-500 h-[2px] w-4/5" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparentvia-secondary-500 to-transparent h-[1px] w-1/5 blur-sm" />
          <div className="absolute inset-x-5 top-0 bg-gradient-to-r from-transparent via-primary-900 to-transparent h-[2px] w-5/5 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-secondary-400 to-transparent h-[2px] w-1/5" />
        </div>
      )}
    </Link>
  );
};

export default Brand;
