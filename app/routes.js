import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Resources from './components/Resources';

export default (
  <Route handler={App}>
    <Route path='/' handler={Home} />
    <Route path='/resources' handler={Resources} />
  </Route>
);
