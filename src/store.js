import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const middlewares = applyMiddleware(thunk, createLogger());
const store = createStore(reducers, undefined, middlewares);

export default store;