import React from 'react'
import { Route, IndexRoute } from 'react-router'
import connectNavigation from './connectors/Navigation';
import NavigationOverview from './components/NavigationOverview';
import NavigationItemOverview from './components/NavigationItemOverview';
import Layout from './components/Layout';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={connectNavigation(NavigationOverview)}/>
    <Route path="item/:id" component={connectNavigation(NavigationItemOverview)}/>
  </Route>
);
