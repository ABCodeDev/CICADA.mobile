import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    github: require('./GithubRedux').reducer,
    login: require('./LoginRedux').reducer,
    profile: require('./ProfileRedux').reducer,
    feed: require('./FeedRedux').reducer,
    search: require('./SearchRedux').reducer,
    viewComponent: require('./FeedComponentRedux').reducer,
  });

  return configureStore(rootReducer, rootSaga)
}
