import React, { ReactNode } from "react";

const DisplayCard = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className="space-y-2">
      <div className="ml-1 font-semibold">{title}</div>
      {children}
    </div>
  );
};

export default DisplayCard;
