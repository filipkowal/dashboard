import uniqueId from 'lodash.uniqueid';

import { addUser as apiAddUser } from '../userService';
import UserForm from './UserForm';

export default function AddUserForm({ setUsers, toggleUserForm }) {
  function addUser(e, user) {
    const id = String(Number(uniqueId()) + 10);
    const newUser = { ...user, id };
    e.preventDefault();

    apiAddUser(newUser);
    setUsers(prev => [...prev, newUser]);
    toggleUserForm(false);
  }

  return (
    <UserForm onSubmit={addUser} toggleUserForm={toggleUserForm}></UserForm>
  );
}
