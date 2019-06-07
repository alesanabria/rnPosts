import { fetchPosts } from '../api/posts';
import AsyncStorage from '@react-native-community/async-storage';

export function getPosts() {
  return async (dispatch) => {
    try {
      let postsData = await AsyncStorage.getItem('posts');
      let posts = [];

      if(postsData) {
        posts = JSON.parse(postsData);
        await dispatch({ type: 'SET_POSTS', payload: posts });
      }

      posts = await fetchPosts();

      posts = posts.map((post, index) => {
        if(index < 20) {
          return { ...post, read: false }
        }

        return { ...post, read: true }
      });

      await AsyncStorage.setItem('posts', JSON.stringify(posts));
      await dispatch({ type: 'SET_POSTS', payload: posts });
      return posts;

    } catch(err) {
      console.log('get posts err', err);
    }
  }
}

export function readPost() {
  return async (dispatch, getState) => {

  }
}

export function addFavoritePost() {
  return async (dispatch, getState) => {

  }
}

export function removeFavoritePost() {
  return async (dispatch, getState) => {

  }
}

