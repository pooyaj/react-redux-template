import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/App';
import MyComponent from './components/MyComponent';


const routes = <Route component={App}>
  <Route path="/" component={MyComponent} />
  <Route path="/anotherRoute" component={MyComponent} />
</Route>;

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);

