

export async function fetchPosts() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const posts = response.json()
    return posts;
  } catch(err) {
    throw err;
  }
}
