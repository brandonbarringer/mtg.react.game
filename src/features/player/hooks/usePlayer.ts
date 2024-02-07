import { useContext } from 'react';
import { PlayerActions, PlayerContext } from '@/features/player/providers/PlayerProvider';
import type { Player } from '@/features/player/types/Player';

export const usePlayer = (id: Player['id']): PlayerActions => {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }

  const { getPlayerActions } = context;

  return getPlayerActions(id);
}