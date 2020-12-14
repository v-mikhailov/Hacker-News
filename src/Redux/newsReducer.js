import { API_STATUS_FAILURE, API_STATUS_STARTED, GET_ALL_NEWS_SUCCESS, GET_NEWS_SUCCESS, GET_ONE_NEWS } from './constants';

const initialState = {
  allNewsIds: [],
  allNews: [],
  oneNews: {},
  loading: false,
  error: false
}

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_STATUS_STARTED: {
      return {
        ...state,
        loading: true,
        error: false
      }
    }
    case GET_ALL_NEWS_SUCCESS: {
      const lastNewsIds = action.payload.sort((a, b) => b - a).slice(0, 100);
      return {
        ...state,
        allNewsIds: lastNewsIds,
        loading: false,
        error: false
      }
    }
    case GET_NEWS_SUCCESS: {
      return {
        ...state,
        allNews: state.allNews.concat(action.payload),
        loading: false,
        error: false
      }
    }
    case GET_ONE_NEWS: {
      return {
        ...state,
        oneNews: action.payload
      }
    }
    case API_STATUS_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    }

    default: return state
  }

}