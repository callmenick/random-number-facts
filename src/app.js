'use strict';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import 'normalize.css';
import './app.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main/Main.js'
import Header from './Header/Header.js';
import Content from './Content/Content.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Main>
        <Header />
        <Content />
      </Main>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
