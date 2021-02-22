import { useState, useEffect } from 'react';

import { getUsers } from '../userService';

export default function UsersTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const users = await getUsers();
      setUsers(users);
    }
    fetchUsers();
  }, []);

  function toggleAddUserForm() {
    console.log('toggleAddUserForm');
  }

  console.log(users);
  return (
    <div>
      <div>
        <h4>User List</h4>
        <button onClick={toggleAddUserForm}>Add user</button>
      </div>
      <table></table>
    </div>
  );
}
