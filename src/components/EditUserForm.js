import { editUser as apiEditUser } from '../userService';
import Modal from './Modal';
import FormValidated from './FormValidated';

export default function EditUserForm({ user, setUsers, toggleUserForm }) {
  function editUser(user) {
    apiEditUser(user);
    setUsers(prev => [
      ...prev.filter(prevUser => prevUser.id !== user.id),
      user,
    ]);
    toggleUserForm(false);
  }

  return (
    <Modal title={'Add user'} close={() => toggleUserForm(false)}>
      <FormValidated
        values={user}
        handleSubmit={editUser}
        handleCancel={() => toggleUserForm(false)}
        requiredValues={['username', 'email']}
      />
    </Modal>
  );
}
