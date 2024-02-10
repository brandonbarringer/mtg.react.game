import { GameProvider } from '@/features/game/providers/GameProvider';
import { Commander } from '@/common/format';
import { Player } from '@/features/player/types/Player';
import { createId } from './common/utils/id';
import Playground from './Playground';
import { DefaultMana } from './common/mana';

const deck = {
  cards: [],
  format: Commander,
}

const playerTemplate: Omit<Player, 'id'|'name'> = {
  life: 40,
  mana: DefaultMana,
  hand: [],
  turn: 0,
  active: false,
  counters: [],
  deck: deck,
}

const players: Player[] = [playerTemplate, playerTemplate, playerTemplate, playerTemplate]
  .map((player, index) => ({
    ...player,
    name: `Player ${index + 1}`,
    id: createId('player'),
  }))

function App() {
  
  return (
    <GameProvider format={Commander} players={players}>
      <Playground />
    </GameProvider>
  )
}

export default App
