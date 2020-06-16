import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

import logger from 'redux-logger'
import thunk from 'redux-thunk' // 处理异步
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers'

import routes from './routes'
import { BrowserRouter } from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import FlashMessageList from './components/flash/flashMessagesList'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter routes={ routes }>
      <NavigationBar />
      <FlashMessageList />
      { routes }
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
