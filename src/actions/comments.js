import { fetchComments } from '../api/comments';

export function getComments(postId) {
  return async (dispatch) => {
    try {
      let comments = [];
      let commentsData = await AsyncStorage.getItem(`post-${postId}-comments`);
      comments = await fetchComments(postId);
    } catch(err) {
      console.log('get comments err', err);
    }
  }
}