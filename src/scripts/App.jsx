import React from 'react';

import '@babel/polyfill';
import 'airbnb-browser-shims';

import '../styles/app.less';

import { Container } from 'semantic-ui-react';
import Header from './components/Header';
import Content from './components/Content';

const App = () => (
  <Container>
    <Header />
    <Content />
  </Container>
);

export default App;
