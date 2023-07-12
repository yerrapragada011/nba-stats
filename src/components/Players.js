import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Players = () => {
  const [players, setPlayers] = useState([]);

  const fetchPlayerData = async () => {
    await axios('https://balldontlie.io/api/v1/players', {
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        setPlayers(response.data)
      })
  };

  useEffect(() => {
    fetchPlayerData();
  }, []);

  return (
    <div>
      <button onClick={fetchPlayerData}>Fetch Players</button>
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
