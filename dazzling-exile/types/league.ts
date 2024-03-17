export interface League {
  id: Number;
  realm: string;
  text: string;
}

export interface LeagueRoot {
  result: League[];
}
