import React from 'react';

import { Card } from 'semantic-ui-react';
import GameItemContainer from '../containers/GameItemContainer';

import items from '../../data/items';

const GameSurface = () => (
  <Card.Group itemsPerRow={4}>
    {items.map(item => (
      <GameItemContainer key={item.name} item={item} />
    ))}
  </Card.Group>
);

export default GameSurface;
