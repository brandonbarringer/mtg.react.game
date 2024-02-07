// @ts-expect-error - Placholder file for types
import { Card } from '@/features/card/types/Card';

export type Format = {
  name: FormatVariant;
  startingLife: number;
  bannedCards: Card['name'][];
  maxPlayers: number;
};

export enum FormatVariant {
  Standard = 'STANDARD',
  Pioneer = 'PIONEER',
  Modern = 'MODERN',
  Legacy = 'LEGACY',
  Vintage = 'VINTAGE',
  Commander = 'COMMANDER',
  Brawl = 'BRAWL',
  Pauper = 'PAUPER',
  Cube = 'CUBE',
  Limited = 'LIMITED',
  Sealed = 'SEALED',
  Draft = 'DRAFT',
  OldSchool = 'OLD_SCHOOL',
  Historic = 'HISTORIC',
  Frontier = 'FRONTIER',
  TinyLeaders = 'TINY_LEADERS',
  Oathbreaker = 'OATHBREAKER',
  CanadianHighlander = 'CANADIAN_HIGHLANDER',
  PreModern = 'PREMODERN',
  Peasant = 'PEASANT',
  PennyDreadful = 'PENNY_DREADFUL',
}
