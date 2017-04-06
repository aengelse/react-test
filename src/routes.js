import React from 'react'
import { Route, IndexRoute } from 'react-router'
import connectNavigation from './connectors/Navigation';
import SectionsOverview from './components/SectionsOverview';
import SectionDetailsView from './components/SectionDetailsView';
import Layout from './components/Layout';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={connectNavigation(SectionsOverview)}/>
    <Route path="item/:id" component={connectNavigation(SectionDetailsView)}/>
  </Route>
);
