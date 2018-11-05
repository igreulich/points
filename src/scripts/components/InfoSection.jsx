import React from 'react';
import PropTypes from 'prop-types';

import { Button, Segment, Table } from 'semantic-ui-react';

const InfoSection = (props) => {
  const { handleResetGame } = props;

  return (
    <Segment.Group>
      <Segment>
        <Table celled>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Bonus Points:</Table.Cell>
              <Table.Cell>30</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Total Points:</Table.Cell>
              <Table.Cell>140</Table.Cell>
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
};

InfoSection.defaultProps = {
  handleResetGame: () => {},
};

export default InfoSection;
