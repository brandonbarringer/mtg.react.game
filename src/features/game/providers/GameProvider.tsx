import React, { createContext, useState } from 'react';
import { createId } from '@/common/utils/id';
import { Phase } from '@/features/game/types/Phase';
import type { Game } from '@/features/game/types/Game';
import { PlayerProvider } from '@/features/player/providers/PlayerProvider';

export type GameContextType = Game & {
  setPhase: (phase: Game['phase']) => void;
}

export const GameContext = createContext<GameContextType | null>(null);

interface GameProviderProps {
  children: React.ReactNode;
  format: Game['format'];
  players: Game['players'];
}

export const GameProvider = ({
  children,
  format,
  players,
}: GameProviderProps) => {
  // Initialize the game ID once using useState, preserving it across re-renders
  const [id] = useState(() => createId('game'));
  const [phase, setPhase] = useState<Phase>(Phase.Untap);

  const value = { id, format, phase, setPhase, players };

  return (
    <GameContext.Provider value={value}>
      <PlayerProvider players={players}>
        {children}
      </PlayerProvider>
    </GameContext.Provider>
  );
};
