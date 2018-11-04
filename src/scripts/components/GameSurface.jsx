import React from 'react';

import { Image } from 'semantic-ui-react';

import items from '../../data/items';

const GameSurface = () => items.map(item => (
  <Image
    key={item.name}
    src={`https://via.placeholder.com/150?text=${item.name}`}
    spaced
    bordered
  />
));

export default GameSurface;
