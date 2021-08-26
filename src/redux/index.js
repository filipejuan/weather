import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import AppReducer from './reducers';
import rootSaga from './saga';

const middleware = [];

const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);


const store = createStore(
  AppReducer, 
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga)

export default store;