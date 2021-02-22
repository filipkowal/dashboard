import { useState } from 'react';

const defaultUser = {
  id: '',
  name: '',
  email: '',
  username: '',
  website: '',
};
export default function UserForm({
  user = defaultUser,
  onSubmit,
  toggleUserForm,
}) {
  const [newUser, setNewUser] = useState(user);

  function onChange(event) {
    const { name, value } = event.target;

    setNewUser({ ...newUser, [name]: value });
  }

  function onCancel(e) {
    toggleUserForm(false);
  }

  return (
    <div>
      <form onSubmit={e => onSubmit(e, newUser)}>
        <label htmlFor="id">ID</label>
        <input
          id="id"
          type="text"
          value={newUser.id}
          name="id"
          onChange={onChange}
          disabled
        ></input>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={newUser.name}
          name="name"
          onChange={onChange}
          required
        ></input>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={newUser.username}
          name="username"
          onChange={onChange}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={newUser.email}
          name="email"
          onChange={onChange}
          required
        ></input>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          value={newUser.website}
          name="website"
          onChange={onChange}
        ></input>
        {user === defaultUser ? (
          <button>Add user</button>
        ) : (
          <button>Edit user</button>
        )}
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}
