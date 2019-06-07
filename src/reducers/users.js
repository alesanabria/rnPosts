
const initialState = {
  entities: {}
}

function Users(state = initialState, action) {
  switch(action.type) {
    case 'ADD_USER': {
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.payload.id]: action.payload
        }
      }
    }
    default: {
      return state;
    }
  }
}

export default Users;

