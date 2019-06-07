import AsyncStorage from '@react-native-community/async-storage';
import { fetchPosts } from '../api/posts';

export function getPosts(refresh = false) {
  return async (dispatch) => {
    try {
      let postsData = await AsyncStorage.getItem('posts');
      let posts = [];

      if(postsData && !refresh) {
        posts = JSON.parse(postsData);
        await dispatch({ type: 'SET_POSTS', payload: posts });
        return;
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

export function removePost(postId) {
  return async (dispatch) => {
    await dispatch({ type: 'REMOVE_POST', payload: postId });
  }
}

export function markReadPost(postId) {
  return async (dispatch, getState) => {
    try {
      await dispatch({ type: 'MARK_READ_POST', payload: postId });
      const posts = getState().posts.entities;
      await AsyncStorage.setItem('posts', JSON.stringify(posts));
    } catch(err) {
      console.log('mark read post err', err);
    }

  }
}

export function getFavorites() {
  return async (dispatch, getState) => {
    try {
      let favorites = [];
      const favoritesData = await AsyncStorage.getItem('favorites');

      if(favoritesData) {
        favorites = JSON.parse(favoritesData);
        await dispatch({ type: 'SET_FAVORITES', payload: favorites });
      }

    } catch(err) {
      console.log('get favorites err', err);
    }

  }
}

export function addFavoritePost(postId) {
  return async (dispatch, getState) => {
    await dispatch({ type: 'ADD_FAVORITE_POST', payload: postId });
    const favorites = getState().posts.favorites;
    await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  }
}

export function removeFavoritePost(postId) {
  return async (dispatch, getState) => {
    await dispatch({ type: 'REMOVE_FAVORITE_POST', payload: postId });
    const favorites = getState().posts.favorites;
    await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  }
}

export function clearPosts() {
  return async (dispatch) => {
    await AsyncStorage.clear();
    await dispatch({ type: 'CLEAR_POSTS' });
    await dispatch({ type: 'CLEAR_FAVORITES' });

  }
}