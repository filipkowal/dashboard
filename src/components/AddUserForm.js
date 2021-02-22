import { addUser } from '../userService';
import UserForm from './UserForm';

export default function AddUserForm() {
  return <UserForm onSubmit={addUser}></UserForm>;
}
