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
  errorDescription: null,
  error: null,
  loggingIn: false,
  accessToken: null,
  refreshToken: null
})

/* ------------- Selectors ------------- 

export const LoginUserPageSelectors = {
  getData: state => state.data
}

*/

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ 
    errorDescription: null,
    error: null,
    loggingIn: true
  })

// successful api lookup
export const success = (state, action) => {
  const { accessToken, refreshToken } = action
  return state.merge({ 
    errorDescription: null,
    error: null,
    loggingIn: false,
    accessToken: accessToken,
    refreshToken: refreshToken
   })
}

// Something went wrong somewhere.
export const failure = (state, {error, errorDescription}) =>
state.merge({
  loggingIn: false,
  error: error,
  errorDescription: errorDescription,
  accessToken: null,
  refreshToken: null
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_USER_PAGE_REQUEST]: request,
  [Types.LOGIN_USER_PAGE_SUCCESS]: success,
  [Types.LOGIN_USER_PAGE_FAILURE]: failure
})
