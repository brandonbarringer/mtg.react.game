import React, { createContext, useState } from 'react';
import type { Zone } from '@/features/zone/types/Zone';

export type ZoneContextType = Zone & {
  setCards: (cards: Zone['cards']) => void;
}

export const PlayerContext = createContext<ZoneContextType | null>(null);

interface ZoneProviderProps {
  children: React.ReactNode;
  name: Zone['name'];
  initialCards: Zone['cards'];
}

export const ZoneProvider = ({ children, name, initialCards }: ZoneProviderProps) => {
  const [cards, setCards] = useState<Zone['cards']>([]);

  const value = {
    name,
    initialCards,
    cards,
    setCards,
  };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
};
