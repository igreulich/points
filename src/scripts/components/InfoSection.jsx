import React from 'react';

import { Button, Segment, Table } from 'semantic-ui-react';

const InfoSection = () => (
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
      <Button color="green">New Game</Button>
    </Segment>
  </Segment.Group>
);

export default InfoSection;
