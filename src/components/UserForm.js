import { useState } from 'react';

const defaultUser = {
  name: '',
  email: '',
};
export default function UserForm({ user = defaultUser, onSubmit }) {
  const [newUser, setNewUser] = useState(user);

  function onChange(event) {
    const { name, value } = event.target;

    setNewUser({ ...newUser, [name]: value });
  }

  return (
    <div>
      <form onSubmit={() => onSubmit(newUser)}>
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
      </form>
    </div>
  );
}
