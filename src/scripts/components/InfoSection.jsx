import React from 'react';
import PropTypes from 'prop-types';

import { Button, Segment, Table } from 'semantic-ui-react';

const InfoSection = (props) => {
  const { handleResetGame, rows } = props;

  const score = rows.reduce((acc, row) => acc + row.score, 0);
  const bonus = rows.reduce((acc, row) => acc + row.bonus, 0);

  return (
    <Segment.Group>
      <Segment>
        <Table celled>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Bonus Points:</Table.Cell>
              <Table.Cell>{bonus}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Total Score:</Table.Cell>
              <Table.Cell>{score}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
      <Segment textAlign="right">
        <Button color="green" onClick={handleResetGame}>
          New Game
        </Button>
      </Segment>
    </Segment.Group>
  );
};

InfoSection.propTypes = {
  handleResetGame: PropTypes.func,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string.isRequired,
      qty: PropTypes.number,
      score: PropTypes.number,
      bonus: PropTypes.number,
    }),
  ),
};

InfoSection.defaultProps = {
  handleResetGame: () => {},
  rows: [],
};

export default InfoSection;
