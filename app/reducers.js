'use strict'

import { combineReducers } from 'redux'
import {
  SET_SEARCH_KEYWORD,
  SEARCH_STARTED,
  SEARCH_RESULT,
  SEARCH_FAILED,
  MORE_SEARCH_RESULT,
  NEW_SEARCH,
  FETCH_DATA,
  FETCH_DATA_SUCCEEDED,
} from './actions'

const initialSearchState = {
  // searching
  error: '',
  keyword: '',
  isViewingResult: false,
  isSearching: false,

  // search result
  data: "told ya",
  result: {
    items: [],
    prevPageToken: null,
    nextPageToken: null,
    pageInfo: {
      resultsPerPage: 0,
      totalResults: 0
    }
  }
}

const search = (state = initialSearchState, action) => {
  switch (action.type) {
    case SET_SEARCH_KEYWORD:
      return Object.assign({}, state, {keyword: action.keyword})
    case SEARCH_STARTED:
      return Object.assign({}, state, {isSearching: true})
    case SEARCH_FAILED:
      return Object.assign({}, state, {
        error: action.message,
        isViewingResult: false,
        isSearching: false,
        result: {
          items: [],
          prevPageToken: null,
          nextPageToken: null,
          pageInfo: {
            resultsPerPage: 0,
            totalResults: 0
          }
        }
      })
    case SEARCH_RESULT:
      return Object.assign({}, state, {
        isViewingResult: true,
        isSearching: false,
        result: Object.assign({}, state.result, {
          items: action.data.items,
          prevPageToken: action.data.prevPageToken || null,
          nextPageToken: action.data.nextPageToken || null,
          pageInfo: action.data.pageInfo
        })
      })
    case MORE_SEARCH_RESULT:
      return Object.assign({}, state, {
        isViewingResult: true,
        isSearching: false,
        isViewingVideo: false,
        viewedVideo: null,
        result: Object.assign({}, state.result, {
          items: [
            ...state.result.items,
            ...action.data.items
          ],
          prevPageToken: action.data.prevPageToken || null,
          nextPageToken: action.data.nextPageToken || null,
          pageInfo: action.data.pageInfo
        })
      })
    case NEW_SEARCH:
      return initialSearchState
    // case FETCH_DATA:
    //   console.log("INSIDE REDUCER");
    //   return Object.assign({}, state)
    // case FETCH_DATA_SUCCEEDED:
    //   console.log("INSIDE succeed REDUCER", action.data);
    //   return Object.assign({}, state, {data: action.data})
    default:
      return state
  }
}

const initialFetchState = {
  data: []
}

const fetch = (state = initialFetchState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return Object.assign({}, state)
    case FETCH_DATA_SUCCEEDED:
      return Object.assign({}, state, {data: action.data})
    default:
      return state
  }
}

const rootReducer = combineReducers({search, fetch})

export default rootReducer