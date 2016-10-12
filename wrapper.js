'use strict'

// import React from 'react-native'
// import { applyMiddleware, createStore } from 'redux'
// import { Provider } from 'react-redux/native'
// import createLogger from 'redux-logger'
// // import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga'
// import rootReducer from './app/reducers'
// import App from './app/app'

// const sagaMiddleware = createSagaMiddleware()
// const logger = createLogger()
// const createStoreWithMiddleware = applyMiddleware(sagaMiddleware, logger)(createStore)
// const store = createStoreWithMiddleware(rootReducer)

// sagaMiddleware.run(mySaga)

import React from 'react'
// import { Provider } from 'react-redux/native'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './app/reducers'
import App from './app/app'

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

    // <Provider store={store}>
      // {() => <App />}
    // </Provider>
export default wrapper