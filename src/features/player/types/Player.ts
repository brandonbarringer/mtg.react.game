import type { Id } from '@/common/types/Id';
import type { Counter } from '@/common/types/Counter';
import type { Mana } from '@/common/mana/types/Mana';
// @ts-expect-error - Placholder file for types
import { Card } from '@/features/card/types/Card';
import type { Format } from '@/common/format/types/Format';

type PlayerCounter = 
  | 'poison'
  | 'experience'
  | 'energy';

// @TODO: move to its own file
type Deck = {
  cards: Card['id'][];
  format: Format;
}

export type Player = {
  id: Id<'player'>;
  name: string;
  life: number;
  mana: Mana[];
  hand: Id<'card'>[];
  turn: number;
  counters: Counter<PlayerCounter>[];
  active: boolean;
  deck: Deck;
}