export interface HpWand {
  wood: string;
  core: string;
  length: number | null;
}

export interface HpCharacter {
  id?: string;
  name: string;
  species: string;
  house: string;
  wizard: boolean;
  ancestry: string;
  wand?: HpWand;
  actor: string;
  image: string;
  alive: boolean;
}
