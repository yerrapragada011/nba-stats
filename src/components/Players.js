import React, { useState, useEffect } from 'react';

const Players = () => {
  const [players, setPlayers] = useState([]);

  const fetchPlayerData = () => {
    const url = 'https://balldontlie.io/api/v1/players';
    let result = null;
    try {
      result = fetch(url, {
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      console.log(e);
    }

    setPlayers(result);
  };

  useEffect(() => {
    fetchPlayerData();
  }, []);

  return (
    <div>
      {players.length > 0 && (
        <ul>
          {players.map((player) => (
            <li key={player.id}>{player.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Players;
