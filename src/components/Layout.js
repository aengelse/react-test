import React, { PropTypes } from 'react';

export default function Layout({ children }) {
  return (
    <div className="mdc-typography">
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object
};
