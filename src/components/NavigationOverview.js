import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class NavigationOverview extends Component {
  render() {
    return (
      <div>
        <h1 className="mdc-typography--title">Coolblue.nl</h1>
        <ul className="mdc-list">
            { this.props.navigationItems.map( (item, count) =>
              <li className="mdc-list-item">
                <Link to={'/item' + item.path}> { item.path } </Link>
              </li>
            )}
          </ul>
      </div>
    );
  }
}

NavigationOverview.propTypes = {
  navigationItems: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return state.navigation;
};

export default connect(mapStateToProps)(NavigationOverview);
