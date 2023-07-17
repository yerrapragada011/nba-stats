import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>NBA</h1>
      {users.length > 0 && (
        <ul>
          {users.map((user, userId) => (
            <div key={userId}>
              <li>
                {user.id + ' - '}
                {user.title}
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
