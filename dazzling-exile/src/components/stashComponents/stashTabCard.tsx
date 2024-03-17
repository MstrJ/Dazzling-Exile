import { StashTab } from "@/types/stash";
import { Tooltip } from "@nextui-org/react";
import React from "react";

const StashTabCard = ({ stashTab }: { stashTab: StashTab }) => {
  return (
    <Tooltip content={stashTab.type.split("Stash")[0]} placement="right">
      <div
        style={{ backgroundColor: `#${stashTab.metadata.colour}` }}
        className={` h-fit  text-lg  font-medium px-4 py-1  fc gap-2 ${
          stashTab.metadata.colour != "ffaa00"
            ? "text-stashtabtext2"
            : "text-stashtabtext1"
        } `}
      >
        {stashTab.name}
      </div>
    </Tooltip>
  );
};

export default StashTabCard;
