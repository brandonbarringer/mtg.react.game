/**
 * @TODO 
 * 1. Complete the types
 * 2. move the types to the correct files
 */

export enum SuperType {
  Basic = 'BASIC',
  Legendary = 'LEGENDARY',
  Ongoing = 'ONGOING',
  Snow = 'SNOW',
  World = 'WORLD',
}

export enum Type {
  Artifact = 'ARTIFACT',
  Creature = 'CREATURE',
  Enchantment = 'ENCHANTMENT',
  Instant = 'INSTANT',
  Land = 'LAND',
  Planeswalker = 'PLANESWALKER',
  Sorcery = 'SORCERY',
}

export type SubType<T extends Type> = {
  [Type.Artifact]: Artifact;
  [Type.Creature]: Creature;
  [Type.Enchantment]: Enchantment;
  [Type.Instant]: Instant;
  [Type.Land]: Land;
  [Type.Planeswalker]: Planeswalker;
  [Type.Sorcery]: Sorcery;
}[T];

export enum Artifact {
  Equipment = 'EQUIPMENT',
  Fortification = 'FORTIFICATION',
  Vehicle = 'VEHICLE',
}

export enum Creature {
  Advisor = 'ADVISOR',
  Aether = 'AETHER',
}

export enum Enchantment {
  Aura = 'AURA',
  Cartouche = 'CARTOUCHE',
}

export enum Instant {
  Arcane = 'ARCANE',
  Trap = 'TRAP',
}

export enum Land {
  Desert = 'DESERT',
  Forest = 'FOREST',
}

export enum Planeswalker {
  Ajani = 'AJANI',
  Angrath = 'ANGRATH',
}

export enum Sorcery {
  Arcane = 'ARCANE',
  Trap = 'TRAP',
}

export type CardType = {
  superTypes: SuperType[];
  types: Type[];
  subTypes: SubType<Type>[];
}