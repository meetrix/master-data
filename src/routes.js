import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Full from './containers/Full/'

export default() =>

<HashRouter>
  <Switch>
    <Route path="/" name="Home" component={Full} />
  </Switch>
</HashRouter>
