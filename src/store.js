import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware();

export default function store(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
        thunk
      ),
    ),
  )

  // sagaMiddleware.run(rootSaga)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers/rootReducer", () => {
      const nextReducer = require("./reducers/rootReducer").default;

      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
