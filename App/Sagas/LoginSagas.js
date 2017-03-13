import { put,call } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'
import request from './request'
import {API_BASE, API_AUTH_LOGIN} from '../Config/AppConstants'

// attempts to login
export function * login ({ username, password }) {
  console.log("attempt login2");
  const requestURL = `${API_BASE}${API_AUTH_LOGIN}`;
  console.log(username +"," + password);

  let dataForm = new FormData();
  dataForm.append('username',username);
  dataForm.append('password',password);

  const loginCall = yield call(request, requestURL, {
    method: 'POST',
    headers: {

    },
    body:dataForm
  });

  if (!loginCall.err) {
    token = "Token " + loginCall.data.key;
      console.log(token);
    yield put (LoginActions.loginSuccess(token));
  }else{
    yield put(LoginActions.loginFailure(loginCall.err));
      console.log(loginCall.err);
  }
}
