import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './store';

const store = configureStore();

const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    rootEl
  );

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => render(App));
}
