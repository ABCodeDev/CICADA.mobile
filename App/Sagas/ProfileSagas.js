
import request from './request'
import { call, put,select } from 'redux-saga/effects'
import ProfileActions from '../Redux/ProfileRedux'
import { API_BASE, API_MOBILE, API_MOBILE_PROFILE } from '../Config/AppConstants'

const getToken = (state) => state.login.token;

export function * getProfile (action) {
  // make the call to the api
  console.log("HERE");
  let token = yield select (getToken);
  const fetchProfileURL = `${API_BASE}${API_MOBILE_PROFILE}`;
  const fetchProfileCall = yield call(request, fetchProfileURL, {
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
