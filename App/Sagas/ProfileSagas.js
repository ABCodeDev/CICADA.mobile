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

import { call, put,select } from 'redux-saga/effects'
import ProfileActions from '../Redux/ProfileRedux'
import { getToken } from '../Redux/LoginRedux'
import { API_BASE, API_MOBILE, API_MOBILE_PROFILE } from '../Config/AppConstants'

export function * getProfile (action) {
  // make the call to the api
  let token = yield select (getToken);
  const fetchProfileURL = `${API_BASE}${API_MOBILE_PROFILE}`;
  const fetchProfileCall = yield call(request, fetchUserURL, {
    method: 'GET',
    headers: {
      Authorization:token
    }
  });
  // success?
  if (!fetchProfileCall.err) {
    yield put(ProfileActions.profileSuccess(fetchProfileCall.data));
  } else {
    yield put(ProfileActions.profileFailure());
  }
}
