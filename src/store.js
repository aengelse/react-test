import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './rootReducer';
import  { createLogger }  from 'redux-logger'

const logger = createLogger();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );

  if (module.hot) {
    module.hot.accept('./rootReducer', () =>
      store.replaceReducer(require('./rootReducer').default)
    );
  }

  return store;
};
