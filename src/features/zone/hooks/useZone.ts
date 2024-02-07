import { useContext } from 'react';
import { PlayerContextType, PlayerContext } from '@/features/player/providers/PlayerProvider';
export const usePlayer = (): PlayerContextType => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}