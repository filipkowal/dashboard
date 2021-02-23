import uniqueId from 'lodash.uniqueid';

import { addUser as apiAddUser } from '../userService';
import Modal from './Modal';
import FormValidated from './FormValidated';

export default function AddUserForm({ setUsers, toggleUserForm }) {
  const defaultUser = {
    id: '',
    name: '',
    email: '',
    username: '',
    website: '',
  };

  function addUser(user) {
    const id = String(Number(uniqueId()) + 10);
    const newUser = { ...user, id };

    apiAddUser(newUser);
    setUsers(prev => [...prev, newUser]);
    toggleUserForm(false);
  }

  return (
    <Modal title={'Add user'} close={() => toggleUserForm(false)}>
      <FormValidated
        values={defaultUser}
        handleSubmit={addUser}
        handleCancel={() => toggleUserForm(false)}
        requiredValues={['username', 'email']}
      />
    </Modal>
  );
}
