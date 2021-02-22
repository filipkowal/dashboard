import { useState, useEffect } from 'react';

import * as api from '../userService';

export default function UsersTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const users = await api.getUsers();
      setUsers(users);
    }
    getUsers();
  }, []);

  function toggleAddUserForm() {
    console.log('toggleAddUserForm');
  }
  function toggleEditUserForm() {
    console.log('toggleEditUserForm');
  }

  async function deleteUser(userId) {
    api.deleteUser(userId);
    setUsers(users.filter(user => user.id !== userId));
  }

  console.log(users);
  return (
    <div>
      <div>
        <h4>User List</h4>
        <button onClick={toggleAddUserForm}>Add user</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>
              <td>
                <button onClick={toggleEditUserForm}>Edit</button>
              </td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
