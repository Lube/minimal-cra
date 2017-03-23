import { applyMiddleware, compose, createStore } from 'redux'

import { makeRootReducer } from './reducer.js'
import thunk from 'redux-thunk'

export default function configureStore () {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    compose(applyMiddleware(...middleware), ...enhancers)
  )

  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducer.js', () => {
      const reducers = require('./reducer.js').default
      store.replaceReducer(reducers)
    })
  } 

  return store
}
