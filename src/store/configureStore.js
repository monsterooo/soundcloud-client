import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

const logger = createLogger({});
const router = routerMiddleware(browserHistory);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, router, logger));
}