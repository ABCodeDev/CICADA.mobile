import { getToken } from '../Redux/LoginRedux';

import { call, put,select } from 'redux-saga/effects'
import FeedActions from '../Redux/FeedRedux'
import { API_BASE, API_MOBILE_NOTIFICATION } from '../Config/AppConstants'

export function * getFeedReceive () {
  // make the call to the api
  const requestURL = `${API_BASE}${API_MOBILE_NOTIFICATION}`;
  let token = yield select(getToken);
  console.log(token);

  const FetchFeedCall = yield call(request, requestURL, {
    method: 'GET',
    headers: {
      Authentication : token
    }
  });

  // success?
  if (!FetchFeedCall.err) {
    yield put(FeedActions.feedFetchSuccess(FeedFetchCall.data))
  } else {
    yield put(FeedActions.feedFetchFailure())
  }
}
