import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import KeyboardBackspace from 'material-ui/svg-icons/hardware/keyboard-backspace';

const SectionDetailsView = ({ params, isFetchingSection, selectedSection, fetchSection, selectedSectionDetails }) => {
  if (params.id !== selectedSection) {
    fetchSection(params.id);
  }

  const columnStyle = { width: '200px' };

  return (
    <div>
      <h1 className="mdc-typography--title">{ '/' + params.id }</h1>
      { isFetchingSection && <p>Ophalen data...</p> }
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

          { selectedSectionDetails.map( (item, count) => (
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

SectionDetailsView.propTypes = {
  params: PropTypes.object,
  isFetchingSection: PropTypes.bool,
  fetchSection: PropTypes.func.isRequired,
  selectedSectionDetails: PropTypes.array,
  selectedSection: PropTypes.string
};

export default SectionDetailsView;
