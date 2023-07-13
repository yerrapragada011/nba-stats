import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = () => {
    const response = fetch(`https://www.balldontlie.io/api/v1/players`);

    setPlayers(response.data);
  };

  return (
    <div className='App'>
      <ol>
        {players &&
          players.map((player) => {
            return (
              <li key={player.id}>
                <h1>{player.first_name}</h1>
              </li>
            );
          })}
      </ol>
    </div>
  );
}

export default App;
