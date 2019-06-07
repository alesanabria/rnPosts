

export async function fetchComments(postId) {
  try {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    const response = await fetch(url);
    const comments = response.json()
    return comments;
  } catch(err) {
    throw err;
  }
}
