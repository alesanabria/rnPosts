import Posts from '../../src/reducers/posts';

const postsData = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
      'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto',
    read: false
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body:
      'est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla',
    read: false
  }
];

describe('Posts reducers', () => {
  it('should set posts', () => {
    const stateExpect = {
      entities: postsData,
      favorites: []
    }

    const action = { type: 'SET_POSTS', payload: postsData };
    const state =  Posts(undefined, action);

    expect(state).toEqual(stateExpect);
  })

  it('should mark post as read', () => {
    const postsExpected = [
      {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body:
          'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto',
        read: false
      },
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body:
          'est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla',
        read: true
      }
    ]

    const initialState = {
      entities: postsData,
      favorites: []
    };

    const stateExpect = {
      entities: postsExpected,
      favorites: []
    };

    const action = { type: 'MARK_READ_POST', payload: 2};
    const state =  Posts(initialState, action);
    expect(state).toEqual(stateExpect);
  })

  it('should remove post', () => {
    const postsExpected = [
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body:
          'est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla',
        read: false
      }
    ];

    const stateExpect = {
      entities: postsExpected,
      favorites: []
    }

    const initialState = {
      entities: postsData,
      favorites: []
    };

    const action = { type: 'REMOVE_POST', payload: 1 };
    const state =  Posts(initialState, action);
    expect(state).toEqual(stateExpect);
  })

  it('should set favorites', () => {
    const initialState = {
      entities: [],
      favorites: []
    };

    const stateExpect = {
      entities: [],
      favorites: [1,2]
    }

    const action = { type: 'SET_FAVORITES', payload: [1,2] };
    const state =  Posts(initialState, action);
    expect(state).toEqual(stateExpect);
  })

  it('should add post to favorites', () => {
    const initialState = {
      entities: [],
      favorites: []
    };

    const stateExpect = {
      entities: [],
      favorites: [4]
    };

    const action = { type: 'ADD_FAVORITE_POST', payload: 4 };
    const state =  Posts(initialState, action);
    expect(state).toEqual(stateExpect);
  })

  it('should remove favorite', () => {
    const initialState = {
      entities: [],
      favorites: [1,3,5]
    };

    const stateExpect = {
      entities: [],
      favorites: [1,5]
    };

    const action = { type: 'REMOVE_FAVORITE_POST', payload: 3 };
    const state =  Posts(initialState, action);
    expect(state).toEqual(stateExpect);
  })

  it('should clear favorites', () => {
    const initialState = {
      entities: [],
      favorites: [1,3,5]
    };

    const stateExpect = {
      entities: [],
      favorites: []
    };

    const action = { type: 'CLEAR_FAVORITES' };
    const state =  Posts(initialState, action);
    expect(state).toEqual(stateExpect);
  })

  it('should clear posts', () => {
    const initialState = {
      entities: [{ id: 1 }, { id: 2 }, { id: 3 }],
      favorites: []
    };

    const stateExpect = {
      entities: [],
      favorites: []
    };

    const action = { type: 'CLEAR_POSTS' };
    const state =  Posts(initialState, action);
    expect(state).toEqual(stateExpect);

  })

})