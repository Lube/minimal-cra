import Immutable from 'seamless-immutable'
import {
  indexBy,
  prop,
  values
} from 'ramda'
import { createSelector } from 'reselect'
import { get, post, delete as remove } from 'axios'

const LOAD_REQUEST = 'categorias/LOAD_REQUEST';
const LOAD_SUCCESS = 'categorias/LOAD_SUCCESS';
const LOAD_FAILED = 'categorias/LOAD_FAILED';
const CREATE_REQUEST = 'categorias/CREATE_REQUEST';
const CREATE_SUCCESS = 'categorias/CREATE_SUCCESS';
const CREATE_FAILED = 'categorias/CREATE_FAILED';
const UPDATE_REQUEST = 'categorias/UPDATE_REQUEST';
const UPDATE_SUCCESS = 'categorias/UPDATE_SUCCESS';
const UPDATE_FAILED =  'categorias/UPDATE_FAILED';
const REMOVE_REQUEST = 'categorias/REMOVE_REQUEST';
const REMOVE_SUCCESS = 'categorias/REMOVE_SUCCESS';
const REMOVE_FAILED =  'categorias/REMOVE_FAILED';
const GET_REQUEST = 'categorias/GET_REQUEST';
const GET_SUCCESS = 'categorias/GET_SUCCESS';
const GET_FAILED =  'categorias/GET_FAILED';

const initialState = Immutable({
  fetching: false,
  categorias: {}
})

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REQUEST:
      return state.merge({fetching: true})
    case CREATE_REQUEST:
      return state.merge({fetching: true})
    case UPDATE_REQUEST:
      return state.merge({fetching: true})
    case REMOVE_REQUEST:
      return state.merge({fetching: true})
    case GET_REQUEST:
      return state.merge({fetching: true})

    case LOAD_SUCCESS:
      return state.merge({fetching: false, categorias: indexBy(prop('id'), action.payload)})
    case REMOVE_SUCCESS:
      return state.merge({fetching: false, categorias: state.categorias.without(action.payload.id)})
    case CREATE_SUCCESS:
      return state.merge({
        fetching: false,
        categorias: state.categorias.merge({[action.payload.id]: action.payload})
      })
    case UPDATE_SUCCESS:
      return state.merge({
        fetching: false,
        categorias: state.categorias.merge({[action.payload.id]: action.payload})
      })
    case GET_SUCCESS:
      return state.merge({
        fetching: false,
        categorias: state.categorias.merge({[action.payload.id]: action.payload})
      })

    case LOAD_FAILED:
      return state.merge({fetching: false, categorias: {}})
    case CREATE_FAILED:
      return state.merge({fetching: false})
    case REMOVE_FAILED:
      return state.merge({fetching: false})
    case UPDATE_FAILED:
      return state.merge({fetching: false})
    case GET_FAILED:
      return state.merge({fetching: false})
    default: return state;
  }
}

export function loadCategorias() {
  return dispatch => {
    dispatch({ type: LOAD_REQUEST })
    get(`/api/categorias`)
      .then(response => dispatch({type: LOAD_SUCCESS, payload: response.data}))
      .catch(error => dispatch({type: LOAD_FAILED}))
  }
}

export function loadCategoria(categoria) {
  return dispatch => {
    dispatch({ type: GET_REQUEST })
    get(`/api/categoria${categoria.id}`)
      .then(response => dispatch({type: GET_SUCCESS, payload: response.data}))
      .catch(error => dispatch({type: GET_FAILED}))
  }
}

export function createCategoria(categoria) {
  return dispatch => {
    dispatch({ type: CREATE_REQUEST })
    post(`/api/categoria`, categoria)
      .then(response => dispatch({type: CREATE_SUCCESS, payload: response.data}))
      .catch(error => dispatch({type: CREATE_FAILED}))
  }
}

export function updateCategoria(categoria) {
  return dispatch => {
    dispatch({ type: UPDATE_REQUEST })
    post(`/api/categoria/${categoria.id}`, categoria)
      .then(response => dispatch({type: UPDATE_SUCCESS, payload: response.data }))
      .catch(error => dispatch({type: UPDATE_FAILED}))
  }
}

export function removeCategoria(categoria) {
  return dispatch => {
    dispatch({ type: REMOVE_REQUEST })
    remove(`/api/categoria/${categoria.id}`)
      .then(response => dispatch({type: REMOVE_SUCCESS, payload: response.data.id}))
      .catch(error => dispatch({type: REMOVE_FAILED}))
  }
}

export const isFetching = createSelector(
  state => state.categorias,
  ({fetching}) => fetching
)

export const getCategorias = createSelector(
  state => state.categorias,
  ({categorias}) => values(categorias)
)
