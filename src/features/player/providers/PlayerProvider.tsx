import React, { createContext, useState } from 'react';
import type { Player } from '@/features/player/types/Player';
import type { Mana } from '@/common/mana';

export type PlayerActions = Player & {
  setLife: (life: Player['life']) => void;
  setMana: (type: Mana['type'], amount: Mana['amount']) => void;
  setHand: (hand: Player['hand']) => void;
  setTurn: (turn: Player['turn']) => void;
  setActive: (active: Player['active']) => void;
  setCounters: (counters: Player['counters']) => void;
}

export type PlayerContextType = {
  players: Player[];
  getPlayerActions: (playerId: Player['id']) => PlayerActions;
};

export const PlayerContext = createContext<PlayerContextType | null>(null);

interface PlayerProviderProps {
  players: Player[];
  children: React.ReactNode;
}

export const PlayerProvider = ({ children, players: initalPlayers }: PlayerProviderProps) => {
  const [players, setPlayers] = useState<Player[]>(initalPlayers);

  const updatePlayer = (playerId: Player['id'], update: Partial<Player>) => {
    setPlayers((previousPlayers) => previousPlayers.map((player) => {
      if (player.id === playerId) {
        return { ...player, ...update };
      }
      return player;
    }));
  };

  const getPlayerActions = (playerId: Player['id']): PlayerActions => {
    const player = players.find((p) => p.id === playerId);
    if (!player) throw new Error('Player not found');


    return {
      ...player,

      setLife: (life) => updatePlayer(player.id, { life }),

      setMana: (type: Mana['type'], amount: Mana['amount']) => {
        const mana = player.mana;
        const index = mana.findIndex((m) => m.type === type);
        if (index === -1) {
          throw new Error('Mana type not found');
        }
        const newMana = [...mana];
        newMana[index] = { ...newMana[index], amount };
        updatePlayer(player.id, { mana: newMana });
      },

      setHand: (hand) => updatePlayer(player.id, { hand }),
      setTurn: (turn) => updatePlayer(player.id, { turn }),
      setActive: (active) => updatePlayer(player.id, { active }),
      setCounters: (counters) => updatePlayer(player.id, { counters }),
    };
  }

  const value = { players, getPlayerActions };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
};
