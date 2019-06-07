import AsyncStorage from '@react-native-community/async-storage';
import { fetchComments } from '../api/comments';

export function getComments(postId) {
  return async (dispatch) => {
    try {
      let comments = [];
      let commentsData = await AsyncStorage.getItem(`post-${postId}-comments`);

      if(commentsData) {
        comments = JSON.parse(commentsData);
        dispatch({ type: 'SET_POST_COMMENTS', payload: { postId, comments } });
        return;
      }

      comments = await fetchComments(postId);
      await dispatch({ type: 'SET_POST_COMMENTS', payload: { postId, comments } });

      return comments;

    } catch(err) {
      console.log('get comments err', err);
    }
  }
}