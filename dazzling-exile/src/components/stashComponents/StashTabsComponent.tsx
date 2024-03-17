import { Stashes } from "@/types/stash";
import React from "react";
import StashTabCard from "./stashTabCard";

const StashTabsComponent = ({ stashTabs }: { stashTabs: Stashes }) => {
  if (!stashTabs) return <div>Nic tu nie ma</div>;
  return (
    <div className=" rounded-md border-stashtabtext2 overflow-hidden border w-fit">
      {stashTabs.stashes.map((x) => {
        return <StashTabCard key={x.id} stashTab={x} />;
      })}
    </div>
  );
};

export default StashTabsComponent;
