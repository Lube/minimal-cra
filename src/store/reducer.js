import { combineReducers } from 'redux'
import categorias from 'modules/categorias.js'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    categorias,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
