import request from './request'
import { call, put,select } from 'redux-saga/effects'
import FeedComponentActions from '../Redux/FeedComponentRedux'
import { API_BASE, API_COMPONENT} from '../Config/AppConstants'

const getToken = (state) => state.login.token;

export function * getFeedComponent (action) {
  // make the call to the api
  let obj  = {
    component_id:action.cid,
    notification_id:action.nid
  }

  console.log(JSON.stringify(obj));
  let token = yield select (getToken);
  const fetchComponentURL = `${API_BASE}global_data/`;
  console.log(fetchComponentURL);
  const fetchComponentCall = yield call(request, fetchComponentURL, {
    method: 'POST',
    headers: {
      Authorization:token
    },
    body:JSON.stringify(obj)
  });

  console.log(fetchComponentCall.data);
  // success?
  if (!fetchComponentCall.err) {
    console.log("fetch component success");
    yield put(FeedComponentActions.feedComponentSuccess())
  } else {
    console.log("fetch component failed");
    yield put(FeedComponentActions.feedComponentFailure())
  }
}
