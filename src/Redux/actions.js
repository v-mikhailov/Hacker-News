import { API_STATUS_FAILURE, API_STATUS_STARTED, GET_ALL_NEWS_SUCCESS, GET_NEWS_SUCCESS, GET_ONE_NEWS, GET_COMMENT_SUCCESS, GET_SUB_COMMENT_SUCCESS } from './constants';

const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
const endPointUrl = '.json';
const newStoriesUrl = `newstories`;
const news = 'item/';

export const getAllNews = () => {
  return async function (dispatch) {
    dispatch(apiStatusStarted());
    try {
      let response = await fetch(`${baseUrl}${newStoriesUrl}${endPointUrl}`);
      let result = await getResponseJson(response);
      return  dispatch(getAllNewsSuccess( await result));
    } catch(err) {
      dispatch(apiStatusFailure(err))
    }
  }
}

export const getItems = (newsId, type) => {
  return async function(dispatch) {
    try {
      let response = await fetch(`${baseUrl}${news}${newsId}${endPointUrl}`);
      let result = await getResponseJson(response);
      if (type === 'fullNews') {
        return dispatch(getOneNewsSuccess(await result))
      }
      if ( type === 'Comment') {
        return dispatch(getComment(await result))
      }
      if (type === 'SubComent') {
        return dispatch(getSubComment(await result));
      }
      return dispatch(getNewsSuccess(await result));
    } catch(err) {
      console.log(err);
    } 
  }
}

const getAllNewsSuccess = (newsIdArr) => ({
  type:  GET_ALL_NEWS_SUCCESS,
  payload: newsIdArr
  
});

const getNewsSuccess = (news) => ({
  type: GET_NEWS_SUCCESS,
  payload: news
})

const getOneNewsSuccess = (news) => ({
  type: GET_ONE_NEWS,
  payload: news
})

const getComment = (comment) => ({
  type: GET_COMMENT_SUCCESS,
  payload: comment
})

const getSubComment = (comment) => ({
  type: GET_SUB_COMMENT_SUCCESS,
  payload: comment
})

const apiStatusStarted = () => ({
  type: API_STATUS_STARTED
});

const apiStatusFailure = (error) => ({
  type: API_STATUS_FAILURE,
  payload: error
});

const getResponseJson = (data) => {
  if (data.ok) {
    return data.json();
  }
  return Promise.reject(data.status)
}