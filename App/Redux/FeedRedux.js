import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  feedFetchRequest: null,
  feedSendRequest: ['response'],
  feedFetchSuccess: ['notifications'],
  feedFetchFailure: null,
  feedSendFailure: null,
})

export const FeedTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  sending:null,
  notifications : null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const frequest = (state) =>
  state.merge({ fetching: true});

// request the data from an api
export const srequest = (state) =>
    state.merge({ sending: true});

// successful api lookup
export const success = (state, action) => {
  const { notifications } = action;
  return state.merge({ fetching: false, error: null, notifications })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
      [Types.FEED_FETCH_REQUEST]: frequest,
      [Types.FEED_FETCH_SUCCESS]: success,
      [Types.FEED_FETCH_FAILURE]: failure,
      [Types.FEED_SEND_REQUEST]: srequest,
      [Types.FEED_SEND_SUCCESS]: success,
      [Types.FEED_SEND_FAILURE]: failure
})
