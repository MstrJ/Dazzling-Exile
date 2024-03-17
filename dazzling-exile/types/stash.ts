import { Item } from "./item";

export interface Metadata {
  public?: boolean;
  folder?: boolean;
  colour?: string;
}
export interface Stashes {
  stashes: StashTab[];
}
export interface StashTab {
  id: string;
  parent?: string;
  name: string;
  type: string;
  index?: number;
  metadata: Metadata;
  children?: StashTab[];
  items?: Item[];
}
