import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Relations from '../pages/Relations';
import NotFound from '../pages/NotFound';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/following" component={Relations} exact />
        <Route path="/followers" component={Relations} exact />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
