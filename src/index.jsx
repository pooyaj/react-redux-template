import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/App';
import {MyComponentContainer} from './components/MyComponent';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';


const store = createStore(reducer);

setInterval(()=> store.dispatch({
  type: 'SET_STATE', 
  state: {
    message: new Date().getTime()
  }
}), 1000);


const routes = <Route component={App}>
  <Route path="/" component={MyComponentContainer} />
  <Route path="/anotherRoute" component={MyComponentContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);

