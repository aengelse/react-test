import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui/List';
import { lightBlueA700 } from 'material-ui/styles/colors';

const SectionsOverview = ({ sections, fetchSections, isFetchingSections }) => {
  if (sections.length === 0 && isFetchingSections === false) {
    fetchSections();
  }

  const listItemStyle = { color: lightBlueA700 };

  return (
    <div>
      <h1 className="mdc-typography--title">Coolblue.nl</h1>
      { isFetchingSections && <p>Ophalen sections...</p> }

      <List>
        { sections.map((item, count) =>
          <Link to={'/item' + item} key={count}>
            <ListItem style={listItemStyle}>
              { item }
            </ListItem>
          </Link>
        )}
      </List>
    </div>
  );
};

SectionsOverview.propTypes = {
  sections: PropTypes.array,
  isFetchingSections: PropTypes.bool,
  fetchSections: PropTypes.func.isRequired
};

export default SectionsOverview;
