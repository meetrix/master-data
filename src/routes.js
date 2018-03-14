import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Full from './containers/Full/'

export default() =>

<HashRouter>
  <Switch>
    <Route path="/dashboard" name="Home" component={Full} />
  </Switch>
</HashRouter>
