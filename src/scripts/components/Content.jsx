import React from 'react';

import { Grid } from 'semantic-ui-react';
import GameSurface from './GameSurface';
import GameInfoContainer from '../containers/GameInfoContainer';

const Content = () => (
  <Grid>
    <Grid.Column computer={12} tablet={16} mobile={16}>
      <GameSurface />
    </Grid.Column>
    <Grid.Column computer={4} tablet={16} mobile={16}>
      <GameInfoContainer />
    </Grid.Column>
  </Grid>
);

export default Content;
