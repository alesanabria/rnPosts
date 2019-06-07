
const initialState = {
  favorites: [],
  entities: []
}

function Posts(state = initialState, action) {
  switch(action.type) {
    case 'SET_POSTS': {
      return { ...state, entities: action.payload }
    }
    case 'MARK_READ_POST': {
      return {
        ...state,
        entities: state.entities.map(post => post.id == action.payload ? {...post, read: true} : post )
      }
    }
    case 'REMOVE_POST': {
      return { ...state, entities: state.entities.filter(post => post.id !== action.payload) }
    }
    case 'SET_FAVORITES': {
      return { ...state, favorites: action.payload }
    }
    case 'ADD_FAVORITE_POST': {
      return { ...state, favorites: state.favorites.concat([action.payload]) }
    }
    case 'REMOVE_FAVORITE_POST': {
      return { ...state, favorites: state.favorites.filter(id => id !== action.payload) }
    }
    case 'CLEAR_POSTS': {
      return { ...state, entities: [] }
    }
    case 'CLEAR_FAVORITES': {
      return { ...state, favorites: [] }
    }
    default: {
      return state;
    }
  }
}

export default Posts;