'use strict'

import { combineReducers } from 'redux'

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

const rootReducer = combineReducers({fetch})

export default rootReducer