// import { configureStore } from 'redux';
// import rootReducer from './reducers/index.js';

// const store = compose(
//   window.devToolsExtension && window.devToolsExtension(),
// )(configureStore)(rootReducer);

// export default store;
import { configureStore, applyMiddleware, compose,createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './index';
import rootSaga from './saga/index';

const sagaMiddleware = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleware),
 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;