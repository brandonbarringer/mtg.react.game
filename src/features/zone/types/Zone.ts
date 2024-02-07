import type { Id } from '@/common/types/Id';

type ZoneName =
  | 'library'
  | 'battlefield'
  | 'graveyard'
  | 'exile'
  | 'command'
  | 'stack';

export type Zone = {
  name: ZoneName;
  cards: Id<'card'>[];
}