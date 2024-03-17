import React, { ReactNode, useState } from "react";
import { cn } from "../utils/cn";

export function MagicBlock({
  children,
  variant,
  active,
  animation = true,
  className,
}: {
  children: ReactNode;
  variant: "normal" | "magic";
  active?: boolean;
  animation?: boolean;
  className?: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${
        active ? "bg-gradient" : variant == "magic" ? "bg-gray-500/50" : ""
      } cursor-pointer relative inline-flex h-fit p-[1.5px] rounded-full  w-fit overflow-hidden  focus:outline-none focus:ring-0 `}
    >
      <span
        className={`transition-all  inset-y-[-400%] inset-x-[-100%] ${
          animation ? " animate-[spin_2.8s_linear_infinite]" : ""
        } absolute ${
          variant === "normal"
            ? hover
              ? " opacity-100 "
              : !active
              ? "opacity-0"
              : "opacity-100"
            : hover
            ? "opacity-100"
            : "opacity-0"
        } ${
          active
            ? "bg-gradient"
            : variant == "magic"
            ? "bg-gradient"
            : "bg-gray-500/50"
        }
        `}
      />
      <span
        className={cn(
          "duration-500  bg-background text-foreground inline-flex h-full w-full py-1 px-3 items-center justify-center rounded-full  text  font-medium  backdrop-blur-3xl",
          className
        )}
      >
        {children}
      </span>
    </div>
  );
}
