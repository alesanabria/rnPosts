import AsyncStorage from '../../__mocks__/@react-native-community/async-storage';
import { setupFetch } from '../../__mocks__/fetch';
import {
  getPosts,
  removePost,
  markReadPost,
  addFavoritePost,
  getFavorites,
  removeFavoritePost,
  clearPosts
} from '../../src/actions/posts';

describe('Posts actions', () => {
  it('should get posts and stored', async () => {
    const posts = [
      {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body:
          'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        read: false
      },
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body:
          'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
        read: false
      }
    ];

    const postsStr = JSON.stringify(posts);
    const dispatch = jest.fn();

    setupFetch(posts);

    await getPosts()(dispatch);

    expect(AsyncStorage.getItem).toBeCalledWith('posts');
    expect(dispatch).toBeCalledWith({ type: 'SET_POSTS', payload: posts });
    expect(AsyncStorage.setItem).toBeCalledWith('posts', postsStr);
  });

  it('should dispatch remove', async () => {
    const dispatch = jest.fn();
    await removePost(1)(dispatch);
    expect(dispatch).toBeCalledWith({ type: 'REMOVE_POST', payload: 1 });
  });

  it('should mark read post and stored', async () => {
    const posts = [
      {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body:
          'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        read: false
      }
    ];

    const postsStr = JSON.stringify(posts);

    const state = {posts: {
      entities: posts
     }};

    const dispatch = jest.fn(() => Promise.resolve());
    const getState = jest.fn(() => state);
    await markReadPost(1)(dispatch, getState);
    expect(dispatch).toBeCalledWith({ type: 'MARK_READ_POST', payload: 1 });
    expect(AsyncStorage.setItem).toBeCalledWith('posts', postsStr);
  });

  it('should get favorites', async () => {
    const dispatch = jest.fn();
    await getFavorites()(dispatch);
    expect(AsyncStorage.getItem).toBeCalledWith('favorites');
  })

  it('should add post to favorites', async () => {
    const state = { posts: { favorites: [1] } };
    const dispatch = jest.fn(() => Promise.resolve());
    const getState = jest.fn(() => state);

    await addFavoritePost(1)(dispatch, getState);

    expect(dispatch).toBeCalledWith({ type: 'ADD_FAVORITE_POST', payload: 1});
    expect(AsyncStorage.setItem).toBeCalledWith("favorites", "[1]");
  })

  it('should remove post from favorites', async () => {
    const state = {
      posts: {
        favorites: [1, 3]
      }
    };
    const dispatch = jest.fn(() => Promise.resolve());
    const getState = jest.fn(() => state);

    await removeFavoritePost(2)(dispatch, getState);
    expect(dispatch).toBeCalledWith({ type: 'REMOVE_FAVORITE_POST', payload: 2 });
    expect(AsyncStorage.setItem).toBeCalledWith('favorites', "[1,3]");
  })

  it('should dispatch clear posts', async () => {
    const dispatch = jest.fn();
    await clearPosts()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toBeCalledWith({ type: 'CLEAR_POSTS' });
    expect(dispatch).toBeCalledWith({ type: 'CLEAR_FAVORITES' });
  })

});
