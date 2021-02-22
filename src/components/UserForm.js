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
  const isAddUser = user === defaultUser;

  function onChange(event) {
    const { name, value } = event.target;

    setNewUser({ ...newUser, [name]: value });
  }

  function onCancel() {
    toggleUserForm(false);
  }

  return (
    <div class="modal is-clipped is-active">
      <div class="modal-background" onClick={onCancel}></div>
      <div class="modal-content">
        <div className="modal-card">
          <header className="modal-card-head">
            <h4 className="subtitle">{isAddUser ? 'Add user' : 'Edit user'}</h4>
          </header>
          <section className="modal-card-body">
            <form onSubmit={e => onSubmit(e, newUser)}>
              <div className="field">
                <label htmlFor="id">ID</label>
                <input
                  className="input"
                  id="id"
                  type="text"
                  value={newUser.id}
                  name="id"
                  onChange={onChange}
                  disabled
                ></input>
              </div>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  className="input"
                  id="name"
                  type="text"
                  value={newUser.name}
                  name="name"
                  onChange={onChange}
                  required
                ></input>
              </div>
              <div className="field">
                <label htmlFor="username">Username</label>
                <input
                  className="input"
                  id="username"
                  type="text"
                  value={newUser.username}
                  name="username"
                  onChange={onChange}
                ></input>
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  className="input"
                  id="email"
                  type="email"
                  value={newUser.email}
                  name="email"
                  onChange={onChange}
                  required
                ></input>
              </div>
              <div className="field">
                <label htmlFor="website">Website</label>
                <input
                  className="input"
                  id="website"
                  type="url"
                  value={newUser.website}
                  name="website"
                  onChange={onChange}
                ></input>
              </div>
              {isAddUser ? (
                <button className="button is-primary">Add user</button>
              ) : (
                <button className="button is-primary">Edit user</button>
              )}
              <button className="button" type="button" onClick={onCancel}>
                Cancel
              </button>
            </form>
          </section>
        </div>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        onClick={onCancel}
      ></button>
    </div>
  );
}
