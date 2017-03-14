
import request from './request'
import { call, put,select } from 'redux-saga/effects'
import FeedActions from '../Redux/FeedRedux'
import { API_BASE, API_MOBILE_NOTIFICATION } from '../Config/AppConstants'

const getToken = (state) => state.login.token

function delay(millis) {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve(true), millis)
  });
  return promise;
}

export function * getFeedReceive (action) {

  // make the call to the api
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
    console.log("hallooooo");
    console.log(FetchFeedCall.data);
    yield put(FeedActions.feedFetchSuccess(FetchFeedCall.data))
  } else {
    yield put(FeedActions.feedFetchFailure())
  }
}
