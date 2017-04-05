import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class NavigationItemOverview extends Component {
  render() {
    const { params, navigationItems } = this.props;
    const currentItem = navigationItems.filter( item => item.path === ('/' + params.id))[0];

    if (!currentItem) {
      return ( <div>Geen items gevonden.</div>);
    }

    return (
      <div>
        <h1 className="mdc-typography--title">{currentItem.path}</h1>
        <ul className="mdc-list mdc-list--two-line">
          { currentItem.items.map( (item, count) => (
            <li className="mdc-list-item" key={count}>
              <span className="mdc-list-item__text">
                <span className="mdc-list-item__text__primary">{ item.name }</span>
                <span className="mdc-list-item__text__secondary">{ item.url }</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

NavigationItemOverview.propTypes = {
  navigationItems: PropTypes.array.isRequired,
  params: PropTypes.object
};

const mapStateToProps = (state) => {
  return state.navigation;
};

export default connect(mapStateToProps)(NavigationItemOverview);
