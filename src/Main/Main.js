'use strict';

import './Main.css'

import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="Main">
        {this.props.children}
      </div>
    );
  }
};

export default Main;
