
export async function fetchUser(userId) {
  try {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const response = await fetch(url);
    const user = response.json()
    return user;
  } catch(err) {
    throw err;
  }
}
