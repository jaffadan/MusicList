import { combineReducers, createStore } from 'redux';

import ProgressReducer from '../reducers/progress.js';

const combinedReducers = combineReducers({
  progress: ProgressReducer,
});

const Store = createStore(combinedReducers);

export default Store;