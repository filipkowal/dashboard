import { editUser as apiEditUser } from '../userService';
import Modal from './Modal';
import FormValidated from './FormValidated';

export default function EditUserForm({ user, setUsers, toggleUserForm }) {
  const { id, name, username, email, phone, website, ...rest } = user;
  const strippedUser = { id, name, username, email, phone, website };

  function editUser(user) {
    const unStrippedUser = { ...user, ...rest };
    apiEditUser(unStrippedUser);
    setUsers(prev => [
      ...prev.filter(prevUser => prevUser.id !== unStrippedUser.id),
      unStrippedUser,
    ]);
    toggleUserForm(false);
  }

  return (
    <Modal title={'Add user'} handleClose={() => toggleUserForm(false)}>
      <FormValidated
        defaultValues={strippedUser}
        handleSubmit={editUser}
        handleCancel={() => toggleUserForm(false)}
      />
    </Modal>
  );
}
