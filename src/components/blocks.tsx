import React, { ReactNode, useState } from "react";

export const MagicBlock = (prop: { content: ReactNode }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative inline-flex h-12 w-fit overflow-hidden rounded-full p-[2.4px] focus:outline-none focus:ring-0 "
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
        }  duration-700  inline-flex h-full w-full px-3 items-center justify-center rounded-full  text-lg  font-medium  backdrop-blur-3xl `}
      >
        {prop.content}
      </span>
    </div>
  );
};
