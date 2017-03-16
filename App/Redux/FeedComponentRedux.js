import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  feedComponentRequest: ['cid','nid'],
  feedComponentSuccess: ['component'],
  feedComponentFailure: null
})

export const FeedComponentTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  component: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
  state.merge({ fetching: true, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { component } = action
  console.log("fetch component");
  console.log(component);
  return state.merge({ fetching: false, error: null}).set('component',component);
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, component: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FEED_COMPONENT_REQUEST]: request,
  [Types.FEED_COMPONENT_SUCCESS]: success,
  [Types.FEED_COMPONENT_FAILURE]: failure
})
