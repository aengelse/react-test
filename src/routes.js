import React from 'react'
import { Route, IndexRoute } from 'react-router'

import NavigationOverview from './components/NavigationOverview';
import NavigationItemOverview from './components/NavigationItemOverview';
import Layout from './components/Layout';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={NavigationOverview}/>
    <Route path="item/:id" component={NavigationItemOverview}/>
  </Route>
);
