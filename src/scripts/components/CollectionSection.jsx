import React from 'react';
import PropTypes from 'prop-types';

import { Container, Table } from 'semantic-ui-react';

class CollectionSection extends React.Component {
  static propTypes = {
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        item: PropTypes.string.isRequired,
        qty: PropTypes.number,
        score: PropTypes.number,
        bonus: PropTypes.number,
      }),
    ),
  };

  static defaultProps = {
    rows: [],
  };

  renderDataRows = () => {
    const { rows } = this.props;

    return rows.map(row => (
      <Table.Row key={row.item}>
        <Table.Cell>{row.item}</Table.Cell>
        <Table.Cell>{row.qty}</Table.Cell>
        <Table.Cell>{row.score}</Table.Cell>
      </Table.Row>
    ));
  };

  render() {
    const { rows } = this.props;

    return (
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Item</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
              <Table.HeaderCell>Score</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{rows && this.renderDataRows()}</Table.Body>
        </Table>
      </Container>
    );
  }
}

export default CollectionSection;
