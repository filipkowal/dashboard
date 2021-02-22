const url =
  'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data';

export async function getUsers() {
  const users = await fetch(url).then(r => r.json());

  return users;
}

export async function deleteUser(userId) {
  fetch(url + `/${userId}`, {
    method: 'DELETE',
    body: userId,
  });
}

export async function addUser(user) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({ ...user, id: user.id }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => console.log(json));
}

export async function editUser(user) {
  fetch(url + `/${user.id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => console.log(json));
}
