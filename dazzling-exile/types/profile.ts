export default interface Profile {
  uuid: string;
  name: string;
  realm?: "pc" | "xbox" | "sony";
  guild?: {
    name: string;
  };
  twitch?: {
    name: string;
  };
}
