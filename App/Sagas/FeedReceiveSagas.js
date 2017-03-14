
import request from './request'
import { call, put, select, fork, take, race } from 'redux-saga/effects'
import FeedActions from '../Redux/FeedRedux'
import { API_BASE, API_MOBILE_NOTIFICATION } from '../Config/AppConstants'
import { FeedTypes } from '../Redux/FeedRedux'
import { LoginTypes } from '../Redux/LoginRedux'

const getToken = (state) => state.login.token;

function delay(millis) {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve(true), millis)
  });
  return promise;
}

export function * getFeedReceive (action) {

  // make the call to the
  console.log("poll feed");
  const requestURL = `${API_BASE}${API_MOBILE_NOTIFICATION}`;
  let token = yield select(getToken);
  console.log("ini" + token);

  const FetchFeedCall = yield call(request, requestURL, {
    method: 'GET',
    headers: {
      Authorization : token
    }
  });


  // success?
  if (!FetchFeedCall.err) {
    console.log(FetchFeedCall.data);
    console.log("success");
    yield put(FeedActions.feedFetchSuccess(FetchFeedCall.data))
  } else {
    yield put(FeedActions.feedFetchFailure())
  }
}

export function* watchFeedReceive() {
  yield take(LoginTypes.LOGIN_SUCCESS);
  while (true) {
    yield call(getFeedReceive);
    yield call(delay,10000);
  }
}
