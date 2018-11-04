import React from 'react';

import { Grid } from 'semantic-ui-react';
import GameInfo from './GameInfo';
import GameSurface from './GameSurface';

const Content = () => (
  <Grid>
    <Grid.Column computer={12} tablet={16} mobile={16}>
      <GameSurface />
    </Grid.Column>
    <Grid.Column computer={4} tablet={16} mobile={16}>
      <GameInfo />
    </Grid.Column>
  </Grid>
);

export default Content;
