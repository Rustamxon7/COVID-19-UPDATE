import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Country from '../Country/Country';

const Container = () => (
  <div className="app-container">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <Country />
      </Route>
      <Route />
    </Switch>
  </div>
);

export default Container;
