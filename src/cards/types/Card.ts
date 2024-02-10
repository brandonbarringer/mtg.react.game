import type { Id } from '@/common/types/Id';
import type { Mana } from '@/common/mana/types/Mana';
import type { Type } from '@/cards/types/CardType';
import type { Color } from '@/common/types/Color';

export type Card = {
  id: Id<'card'>;
  name: string;
  cmc: number;
  manaCost: Mana[];
  type: Type;
  typeLine: string;
  oracleText: string;
  colors: Color[];
  colorIdentity: Color[];
}