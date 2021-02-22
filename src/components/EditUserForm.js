import { editUser } from '../userService';
import UserForm from './UserForm';

export default function EditUserForm({ user }) {
  return <UserForm onSubmit={editUser} user={user}></UserForm>;
}
