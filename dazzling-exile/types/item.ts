export enum FrameType {
  Normal = 0,
  Magic = 1,
  Rare = 2,
  Unique = 3,
  Gem = 4,
  Currency = 5,
  DivinationCard = 6,
  Quest = 7,
  Prophecy = 8,
  Foil = 9,
  SupporterFoil = 10,
}
export enum DisplayMode {
  NameFollowedByValues = 0,
  ValuesFollowedByName = 1,
  ProgressBar = 2,
  ValuesInsertedIntoString = 3,
  Separator = 4,
}
export interface ItemSocket {
  group: number;
  attr?: string;
  sColour?: string;
}
export interface ItemProperty {
  name: string;
  values: [string, number][];
  displayMode?: DisplayMode;
  progress?: number;
  type?: number;
  suffix?: string;
}
export interface CrucibleNode {
  skill?: number;
  tier?: number;
  icon?: string;
  allocated?: boolean;
  isNotable?: boolean;
  isReward?: boolean;
  stats?: string[];
  reminderText?: string[];
  orbit?: number;
  orbitIndex?: number;
  out: string[];
  in: string[];
}

export interface Reward {
  label: string;
  rewards: Record<string, number>;
}

export interface LogbookMod {
  name: string;
  faction: {
    id: string;
    name: string;
  };
  mods: string[];
}

export interface UltimatumMod {
  type: string;
  tier: number;
}

export interface IncubatedItem {
  name: string;
  level: number;
  progress: number;
  total: number;
}

export interface Scourged {
  tier: number;
  level?: number;
  progress?: number;
  total?: number;
}

export interface Crucible {
  layout: string;
  nodes: Record<string, CrucibleNode>;
}

export interface Hybrid {
  isVaalGem?: boolean;
  baseTypeName: string;
  properties?: ItemProperty[];
  explicitMods?: string[];
  secDescrText?: string;
}

export interface Extended {
  category?: string;
  subcategories?: string[];
  prefixes?: number;
  suffixes?: number;
}

export interface Item {
  verified: boolean;
  w: number;
  h: number;
  icon: string;
  support?: boolean;
  stackSize?: number;
  maxStackSize?: number;
  stackSizeText?: string;
  league?: string;
  id?: string;
  influences?: object;
  elder?: boolean;
  shaper?: boolean;
  searing?: boolean;
  tangled?: boolean;
  abyssJewel?: boolean;
  delve?: boolean;
  fractured?: boolean;
  synthesised?: boolean;
  sockets?: ItemSocket[];
  socketedItems?: Item[];
  name: string;
  typeLine: string;
  baseType: string;
  rarity?: string;
  identified: boolean;
  itemLevel?: number;
  ilvl: number;
  note?: string;
  forum_note?: string;
  lockedToCharacter?: boolean;
  lockedToAccount?: boolean;
  duplicated?: boolean;
  split?: boolean;
  corrupted?: boolean;
  unmodifiable?: boolean;
  cisRaceReward?: boolean;
  seaRaceReward?: boolean;
  thRaceReward?: boolean;
  properties?: ItemProperty[];
  notableProperties?: ItemProperty[];
  requirements?: ItemProperty[];
  additionalProperties?: ItemProperty[];
  nextLevelRequirements?: ItemProperty[];
  talismanTier?: number;
  rewards?: Reward[];
  secDescrText?: string;
  utilityMods?: string[];
  logbookMods?: LogbookMod[];
  enchantMods?: string[];
  scourgeMods?: string[];
  implicitMods?: string[];
  ultimatumMods?: UltimatumMod[];
  explicitMods?: string[];
  craftedMods?: string[];
  fracturedMods?: string[];
  crucibleMods?: string[];
  cosmeticMods?: string[];
  veiledMods?: string[];
  veiled?: boolean;
  descrText?: string;
  flavourText?: string[];
  flavourTextParsed?: (string | object)[];
  flavourTextNote?: string;
  prophecyText?: string;
  isRelic?: boolean;
  foilVariation?: number;
  replica?: boolean;
  foreseeing?: boolean;
  incubatedItem?: IncubatedItem;
  scourged?: Scourged;
  crucible?: Crucible;
  ruthless?: boolean;
  frameType?: FrameType;
  artFilename?: string;
  hybrid?: Hybrid;
  extended?: Extended;
  x?: number;
  y?: number;
  inventoryId?: string;
  socket?: number;
  colour?: string;
}
