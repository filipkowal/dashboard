import { editUser as apiEditUser } from '../userService';
import UserForm from './UserForm';

export default function EditUserForm({ user, setUsers }) {
  function editUser(e, user) {
    e.preventDefault();

    apiEditUser(user);
    setUsers(prev => [
      ...prev.filter(prevUser => prevUser.id !== user.id),
      user,
    ]);
  }

  return <UserForm onSubmit={editUser} user={user}></UserForm>;
}
