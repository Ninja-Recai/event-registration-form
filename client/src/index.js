/* eslint-disable react/jsx-filename-extension, no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import registerServiceWorker from 'registerServiceWorker';
import { rootReducer } from 'reducers';
import AppContainer from 'containers/App';
import { fetchMiddleware } from 'middlewares/fetch-middleware';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(fetchMiddleware));
const store = createStore(rootReducer, enhancer);
ReactDOM.render((
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
