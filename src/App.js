import './App.css';
import { useEffect, useState } from 'react';
import User from './User';
import Loader from './Loader.js';

const url = 'https://jsonplaceholder.typicode.com/users';


function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setLoading(false);
      setUsers(users);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  const deleteAll = () => {
    setUsers([]);
  }

  const deleteUser = (id) => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  }


  if (loading) {
    return <Loader />;
  }
  if (users.length === 0) {
    return (
      <div className="fetch-users">
        <button className='btn' onClick={fetchUsers}>display users</button>
      </div>
    )
  }
  return (
    <main>
      <div className="app">
        {users.map(user => {
          return <User key={user.id} {...user} deleteUser={deleteUser} />
        })}
      </div>
      <button className='btn' onClick={deleteAll}>delete all</button>
    </main>
  );
}

export default App;
