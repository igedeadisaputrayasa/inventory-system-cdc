import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginUserPageRequest: ['userName', 'userPassword'],
  loginUserPageSuccess: ['payload'],
  loginUserPageFailure: ['error', 'errorDescription']
})

export const LoginUserPageTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  errorDescription: null,
  error: null,
  accessToken: null,
  refreshToken: null,
  loggingIn: false
})

/* ------------- Selectors ------------- */

export const LoginUserPageSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null})

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({
    data : null,
    payload: null, 
    fetching: false, 
    errorDescription: errorDescription,
    error: error, 
    accessToken: null,
    refreshToken: null,
    loggingIn: false
  })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_USER_PAGE_REQUEST]: request,
  [Types.LOGIN_USER_PAGE_SUCCESS]: success,
  [Types.LOGIN_USER_PAGE_FAILURE]: failure
})
