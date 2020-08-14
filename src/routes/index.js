import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Following from '../pages/Following';
import Followers from '../pages/Followers';
import NotFound from '../pages/NotFound';

function Routes() {
    return (
        <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/following" component={Following} exact />
          <Route path="/followers" component={Followers} exact />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
}

export default Routes;