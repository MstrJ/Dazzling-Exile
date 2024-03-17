"use client";
import { fetchData } from "@/src/actions/server-actions";
import DisplayCard from "@/src/components/displayCard";
import StashTabsComponent from "@/src/components/stashComponents/StashTabsComponent";
import { League, LeagueRoot } from "@/types/league";
import { Stashes } from "@/types/stash";
import { Select, SelectItem, Button } from "@nextui-org/react";
import React, { useState, useEffect } from "react";

const StashPage = () => {
  const [stashTabs, setStashTabs] = useState<Stashes | null>(null);
  const [leagues, setLeagues] = useState<League[] | null>(null);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    const asyncLeague = async () => {
      const lgs: LeagueRoot | null = await fetchData<LeagueRoot>(
        `api/trade/data/leagues`,
        ["league"],
        "leagues",
        false
      );
      console.log(lgs);
      if (!lgs) return;
      const l: any = lgs.result?.filter((league) => league.realm == "pc");
      setLeagues(l);

      setReload(false);
    };

    // useEffect(() => {}, [leagues]);

    if (!reload) asyncLeague();
  }, [reload]);

  if (!leagues)
    return (
      <div>
        <Button onClick={() => setReload(!reload)}>Reload Data</Button>
      </div>
    );
  return (
    <div className="fc gap-4">
      <DisplayCard title="League">
        <Select
          variant="bordered"
          items={leagues}
          placeholder="Select a league"
          className="max-w-[14em] "
          size="sm"
          aria-label="Select a league"
          radius="full"
        >
          {(league) => (
            <SelectItem aria-label={league.text} key={league.id.toString()}>
              {league.text}
            </SelectItem>
          )}
        </Select>
      </DisplayCard>
      {stashTabs && (
        <DisplayCard title="Stash Tabs">
          <StashTabsComponent stashTabs={stashTabs} />
        </DisplayCard>
      )}
    </div>
  );
};

export default StashPage;
