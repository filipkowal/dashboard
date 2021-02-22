import { useState, useEffect } from 'react';

import * as api from '../userService';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [showEditUserForm, setShowEditUserForm] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    async function getUsers() {
      const users = await api.getUsers();
      setUsers(users);
    }
    getUsers();
  }, []);

  function toggleAddUserForm() {
    setShowAddUserForm(prevState => !prevState);
  }
  function toggleEditUserForm(user) {
    setEditedUser(user);
    setShowEditUserForm(prevState => !prevState);
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
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>
                <button onClick={() => toggleEditUserForm(user)}>Edit</button>
              </td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showAddUserForm ? <AddUserForm /> : ''}
      {showEditUserForm ? <EditUserForm user={editedUser} /> : ''}
    </div>
  );
}
