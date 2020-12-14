import { GET_COMMENT_SUCCESS, GET_SUB_COMMENT_SUCCESS } from './constants';

const initialState = {
  comments: [],
  subComments: []
}

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT_SUCCESS: {
      return {
        ...state,
        comments: state.comments.concat(action.payload),
      }
    }
    case GET_SUB_COMMENT_SUCCESS: {
      return {
        ...state,
        subComments: state.subComments.concat(action.payload)
      }
    }

    default: return state
  }

}