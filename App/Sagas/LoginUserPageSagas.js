/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import LoginUserPageActions from '../Redux/LoginUserPageRedux'
import I18n from 'react-native-i18n'
import { Alert } from 'react-native'
// import { LoginUserPageSelectors } from '../Redux/LoginUserPageRedux'

export function * doLoginUserPage (api, action) {
  const { userName, userPassword } = action
  // make the call to the api
  const response = yield call(api.postLoginUserPage, userName, userPassword)
  // success?
  if (response.status === 200) {
    const { access_token, refresh_token , error, error_description} = response.data
    Alert.alert('Success', 'Login Success !!!')
    yield put(LoginUserPageActions.loginUserPageSuccess(access_token, refresh_token))
  } else if (response.status == null) {
    const networkError = I18n.t('emNoNetworkAvailable')
    Alert.alert('Error', networkError)
    yield put(LoginUserPageActions.loginUserPageFailure(true, networkError))
  } else {
    const {error, error_description} = response.data
    Alert.alert('Error', error_description)
    yield put(LoginUserPageActions.loginUserPageFailure(error, error_description))
  }
}
