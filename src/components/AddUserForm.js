import { addUser as apiAddUser } from '../userService';
import UserForm from './UserForm';

export default function AddUserForm({ setUsers, toggleUserForm }) {
  function addUser(e, user) {
    const id = Date.now().toString();
    e.preventDefault();
    const newUser = { ...user, id };

    apiAddUser(newUser);
    setUsers(prev => [...prev, newUser]);
  }

  return (
    <UserForm onSubmit={addUser} toggleUserForm={toggleUserForm}></UserForm>
  );
}
