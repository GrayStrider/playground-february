import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './utils/serviceWorker';
import configureStore, {history} from './configureStore';
import { Provider } from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

const store = configureStore();

//================================================================================
// Apollo - GraphQL
const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});
//================================================================================


ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>
  ,
  document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
