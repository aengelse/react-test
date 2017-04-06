import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui/List';
import { lightBlueA700 } from 'material-ui/styles/colors';

const NavigationOverview = ({ navigationItems }) => {
  const listItemStyle = { color: lightBlueA700 };

  return (
    <div>
      <h1 className="mdc-typography--title">Coolblue.nl</h1>
      <List>
        { navigationItems.map((item, count) =>
          <Link to={'/item' + item.path} key={count}>
            <ListItem style={listItemStyle}>
              { item.path }
            </ListItem>
          </Link>
        )}
      </List>
    </div>
  );
};

NavigationOverview.propTypes = {
  navigationItems: PropTypes.array.isRequired
};

export default NavigationOverview;
