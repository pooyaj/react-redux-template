import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/App';
import {MyComponentContainer} from './components/MyComponent';
import {createStore, compose, applyMiddleware} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import * as AllActions from './actions/actionTypes'
import DevTools from './components/DevTools';
import thunkMiddleware from 'redux-thunk';

const finalCreateStore = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunkMiddleware),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)(createStore);

const store = finalCreateStore(reducer);

const routes = <Route component={App}>
  <Route path="/" component={MyComponentContainer} />
  <Route path="/anotherRoute" component={MyComponentContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
      <div>
      <Router>{routes}</Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);

