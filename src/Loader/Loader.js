'use strict';

import './Loader.css';

import React from 'react';
import ReactDOM from 'react-dom';

class Loader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Loader">
        <span className="Loader-text">{this.props.value}</span>
      </div>
    );
  }
};

export default Loader;
