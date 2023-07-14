import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [players, setPlayers] = useState([]);

  const fetchData = () => {
    fetch('https://www.balldontlie.io/api/v1/players')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPlayers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>NBA</h1>
      {players.length > 0 && (
        <ul>
          {players.map((player) => (
            <li key={player.id}>{player}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
