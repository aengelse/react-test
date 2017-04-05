import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './components/Root';
import configureStore from './store';
import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
const rootEl = document.getElementById('root');


const renderApp = appRoutes => {
    render(
      <AppContainer>
        <Root store={store} history={history} routes={appRoutes} />
      </AppContainer>,
      rootEl
    )
};

renderApp(routes);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const newRoutes = require('./routes').default;
    renderApp(newRoutes);
  });
}
