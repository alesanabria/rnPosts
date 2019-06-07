
const initialState = {
  favorites: [],
  entities: []
}

function Posts(state = initialState, action) {
  switch(action.type) {
    case 'SET_POSTS': {
      return { ...state, entities: action.payload }
    }
    case 'READ_POST': {
      return state
    }
    case 'ADD_FAVORITE_POST': {
      return { ...state, favorites: state.favorites.concat([action.payload]) }
    }
    case 'REMOVE_FAVORITE_POSTS': {
      return { ...state, favorites: state.favorites.filter(id => id != action.payload) }
    }
    default: {
      return state;
    }
  }
}

export default Posts;