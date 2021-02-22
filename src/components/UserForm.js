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
        <label for="id">ID</label>
        <input
          id="id"
          type="text"
          value={newUser.id}
          name="id"
          onChange={onChange}
          disabled
        ></input>
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          value={newUser.name}
          name="name"
          onChange={onChange}
        ></input>
        <label for="username">Username</label>
        <input
          id="username"
          type="text"
          value={newUser.username}
          name="username"
          onChange={onChange}
        ></input>
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          value={newUser.email}
          name="email"
          onChange={onChange}
        ></input>
        <label for="city">City</label>
        <input
          id="city"
          type="text"
          value={newUser.city}
          name="city"
          onChange={onChange}
        ></input>
      </form>
    </div>
  );
}
