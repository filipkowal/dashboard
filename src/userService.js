const userUrl =
  'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data';

export async function getUsers() {
  const users = await fetch(userUrl).then(r => r.json());

  return users;
}

export async function deleteUser(userId) {
  fetch(userUrl + `/${userId}`, {
    method: 'DELETE',
    body: userId,
  });
}
