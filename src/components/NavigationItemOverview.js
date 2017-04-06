import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import KeyboardBackspace from 'material-ui/svg-icons/hardware/keyboard-backspace';

const NavigationItemOverview = ({ params, navigationItems }) => {
  const currentItem = navigationItems.filter( item => item.path === ('/' + params.id))[0];
  const columnStyle = { width: '200px' };

  if (!currentItem) {
    return (<div>Geen navigatie items gevonden.</div>);
  }

  return (
    <div>
      <h1 className="mdc-typography--title">{ currentItem.path }</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn style={columnStyle}>
              Navigatie item
            </TableHeaderColumn>
            <TableHeaderColumn>
              Url
            </TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody showRowHover={true}>

          { currentItem.items.map( (item, count) => (
            <TableRow key={count}>
              <TableRowColumn style={columnStyle}>
                { item.name }
              </TableRowColumn>

              <TableRowColumn>
              { item.url }
              </TableRowColumn>
            </TableRow>
          ))}

        </TableBody>
      </Table>

      <br />
      <Link to="/">
        <FlatButton label="Terug naar overzicht" icon={<KeyboardBackspace/>} />
      </Link>
    </div>
  );
};

NavigationItemOverview.propTypes = {
  navigationItems: PropTypes.array.isRequired,
  params: PropTypes.object
};

export default NavigationItemOverview;
