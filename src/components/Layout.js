import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../scss/typography.scss'
import '../scss/base.scss'

injectTapEventPlugin();

export default function Layout({ children }) {
  return (
    <MuiThemeProvider>
      <div className="mdc-typography">
        {children}
      </div>
    </MuiThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.object
};
