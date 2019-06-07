
const initialState = {
  postComments: {}
}

function Comments(state = initialState, action) {
  switch(action.type) {
    case 'SET_POST_COMMENTS': {
      return { ...state, [action.payload.postId]: action.payload.comments }
    }
    default: {
      return state;
    }
  }
}

export default Comments
