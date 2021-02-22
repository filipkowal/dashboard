import { useState, useEffect } from 'react';

import * as api from '../userService';
import AddUserForm from './AddUserForm';
import AreYouSure from './AreYouSure';
import EditUserForm from './EditUserForm';

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [showEditUserForm, setShowEditUserForm] = useState(false);
  const [showAreYouSure, setshowAreYouSure] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    async function getUsers() {
      const users = await api.getUsers();
      setUsers(users);
    }
    getUsers();
  }, []);

  function toggleAddUserForm(value) {
    setShowAddUserForm(value);
  }
  function toggleEditUserForm(value, user) {
    setEditedUser(user);
    setShowEditUserForm(value);
  }
  function toggleAreYouSure(value, user) {
    setEditedUser(user);
    setshowAreYouSure(value);
  }

  async function deleteUser(userId) {
    api.deleteUser(userId);
    setUsers(users.filter(user => user.id !== userId));
    toggleAreYouSure(false);
  }

  console.log('render table', users);
  return (
    <div>
      <div className="table-title container">
        <h4 className="subtitle">User List</h4>
        <button
          className="button is-primary"
          onClick={() => toggleAddUserForm(true)}
        >
          Add user
        </button>
      </div>
      <table className="table container">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Website</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length ? (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>
                  <button
                    className="button edit-button"
                    onClick={() => toggleEditUserForm(true, user)}
                  >
                    Edit
                  </button>
                  <button
                    className="button is-danger is-outlined"
                    onClick={() => toggleAreYouSure(true, user)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No users to display.</td>
            </tr>
          )}
        </tbody>
      </table>
      {showAddUserForm ? (
        <AddUserForm setUsers={setUsers} toggleUserForm={toggleAddUserForm} />
      ) : (
        ''
      )}
      {showEditUserForm ? (
        <EditUserForm
          user={editedUser}
          setUsers={setUsers}
          toggleUserForm={toggleEditUserForm}
        />
      ) : (
        ''
      )}
      {showAreYouSure ? (
        <AreYouSure
          user={editedUser}
          toggleAreYouSure={toggleAreYouSure}
          onConfirm={deleteUser}
        />
      ) : (
        ''
      )}
    </div>
  );
}
