import type { Id } from '@/common/types/Id';
import type { Phase } from '@/features/game/types/Phase';
import type { Format } from '@/common/format/types/Format';
import type { Player } from '@/features/player/types/Player';
export type Game = {
  id: Id<'game'>;
  phase: Phase;
  format: Format;
  players: Player[];
}