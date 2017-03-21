import { combineReducers } from 'redux'
import testReducer from './../modules/test/reducer.js'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    testReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
