import React from 'react';

import { Container, Table } from 'semantic-ui-react';

const CollectionSection = () => (
  <Container>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Items</Table.HeaderCell>
          <Table.HeaderCell>Quantity</Table.HeaderCell>
          <Table.HeaderCell>Score</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>B</Table.Cell>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>90</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>A</Table.Cell>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>50</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
);

export default CollectionSection;
