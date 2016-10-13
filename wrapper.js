'use strict'

import React from 'react'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './app/reducers'
import App from './app/App'

import rootSaga from './app/sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const logger = createLogger()

// mount it on the Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
)

// then run the saga
sagaMiddleware.run(rootSaga)


const wrapper = () => {
  return (
    <Provider store={store}>
    	<App />
  	</Provider>
  )
}

export default wrapper