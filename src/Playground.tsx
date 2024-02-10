import { usePlayer } from './features/player/hooks/usePlayer';
import { useGame } from './features/game/hooks/useGame';
import { Phase } from './features/game/types/Phase';
import { DefaultMana } from './common/mana';
import React from 'react';

export default function Playground() {
  const { setPhase, ...game } = useGame();
  const {
    setLife,
    setMana,
    // setHand,
    setTurn,
    // setActive,
    // setCounters,
    ...player
  } = usePlayer(game.players[0].id);
  const data = { game, player };

  const phases = [
    Phase.Untap,
    Phase.Upkeep,
    Phase.Draw,
    Phase.PreCombatMain,
    Phase.BeginCombat,
    Phase.DeclareAttackers,
    Phase.DeclareBlockers,
    Phase.CombatDamage,
    Phase.EndCombat,
    Phase.PostCombatMain,
    Phase.End,
    Phase.Cleanup,
  ];

  const row = {
    display: 'flex',
    gap: '3rem',
    alignItems: 'flex-start'
  } as React.CSSProperties;

  const column = {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  } as React.CSSProperties;

  return (
    <>
      <div>
        <div>
          <h2>Game Actions</h2> 
          <p>Current Phase: {game.phase}</p>
        </div>
        {phases.map((phase) => (
          <button key={phase} onClick={() => setPhase(phase)}>
            {phase}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <h2>Player Actions</h2>
        <div style={row}>
          <div>
            <h3>Life</h3>
            <div style={column}>
              <h4>Current Life: {player.life}</h4>
              <div>
                <button onClick={() => setLife(player.life + 1)}>
                  +
                </button>
                <button onClick={() => setLife(player.life - 1)}>
                  -
                </button>
              </div>
            </div>
          </div>
          <div>
            <h3>Turn</h3>
            <div style={column}>
              <h4>Current Turn: {player.turn}</h4>
              <button onClick={() => setTurn(player.turn + 1)}>
                Next Turn
              </button>
              
            </div>
          </div>
          <div>
            <h3>Mana</h3>
            {DefaultMana.map((mana) => {
              const playerMana = player.mana.find((m) => m.type === mana.type);
              const amount = playerMana?.amount ?? 0;
              return (
                <div key={mana.type} style={column}>
                  <h4>{mana.type}</h4>
                  <div>
                    <button onClick={() => setMana(mana.type, amount + 1)}>
                      +
                    </button>
                    <button onClick={() => setMana(mana.type, amount - 1)}>
                      -
                    </button>
                  </div>
                  {playerMana?.amount}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h2>Game State</h2>
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </>
  )
}