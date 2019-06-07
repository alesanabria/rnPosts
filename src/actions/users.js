import AsyncStorage from '@react-native-community/async-storage';
import { fetchUser } from '../api/users';

export function getUser(userId) {
  return async (dispatch) => {
    try {
      let user = {};
      console.log('GET USER', userId);
      let userData = await AsyncStorage.getItem(`user-${userId}`);

      if(userData) {
        user = JSON.parse(userData);
        dispatch({ type: 'ADD_USER', payload: user });
        return
      }

      user = await fetchUser(userId);
      await AsyncStorage.setItem(`user-${userId}`, JSON.stringify(user));
      dispatch({ type: 'ADD_USER', payload: user });
    } catch(err) {
      console.log('get user err', err);
    }
  }
}