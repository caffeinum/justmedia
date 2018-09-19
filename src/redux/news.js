import axios from 'axios'

export const GET_NEWS_REQUESTED = 'GET_NEWS_REQUESTED'
export const GET_NEWS_ERROR     = 'GET_NEWS_ERROR'
export const GET_NEWS           = 'GET_NEWS'


const initialState = {
  data: {
    positive: [],
    negative: [],
  },
  isRequested: false,
  isError: true,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_REQUESTED:
      return {
        ...state,
        isRequested: true,
      }

    case GET_NEWS:
      return {
        ...state,
        data: action.data,
        isRequested: false,
      }

    case GET_NEWS_ERROR:
      return {
        ...state,
        isError: true,
      }

    default:
      return state
  }
}

export const getNews = (search) => {
  return dispatch => {
    dispatch({
      type: GET_NEWS_REQUESTED
    })

    axios.get(`https://api.morejust.media/posts/search?q=${search}`)
      .then(({ data }) => {

        console.log('data', data)
        dispatch({
          type: GET_NEWS,
          data: {
            positive: data.best,
            negative: data.worst,
          },
        })
      })
      .catch(() => {
        dispatch({
          type: GET_NEWS_ERROR,
        })
      })
  }
}
