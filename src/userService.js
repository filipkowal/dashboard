export async function getUsers() {
  const users = await fetch(
    'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data'
  ).then(r => r.json());

  return users;
}
