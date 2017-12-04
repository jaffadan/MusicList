import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { logger } from 'redux-logger';

import ProgressReducer from '../reducers/progress';
import DevTools from '../components/shared/DevTools';

const combinedReducers = combineReducers({
  progress: ProgressReducer,
});

const enhancer = compose(
  applyMiddleware(logger),
  DevTools.instrument(),
);

export default function configureStore(initialState) {
  const store = createStore(combinedReducers, initialState, enhancer);

  // Hot reload reducers
  if (module.hot) {
    module.hot.accept('../reducers/progress.js', () =>
      store.replaceReducer(ProgressReducer),
    );
  }

  return store;
}