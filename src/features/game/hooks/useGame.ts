import { useContext } from 'react';
import { GameContextType, GameContext } from '@/features/game/providers/GameProvider';
export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}