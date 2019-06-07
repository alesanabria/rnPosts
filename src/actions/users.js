import AsyncStorage from '@react-native-community/async-storage';
import { fetchUser } from '../api/users';

export function getUser(userId) {
  return async (dispatch) => {
    try {
      let user = {};
      let userData = AsyncStorage.getItem(`user-${userId}`);
      if(userData) {
        user = JSON.parse(userData);
        dispatch({  });
      }
    } catch(err) {
      console.log('get user err', err);
    }
  }
}