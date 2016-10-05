'use strict';

import './Header.css';

import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Header">
        <h1 className="Header-title">
          Random #<span>Number</span># Facts!
        </h1>
      </div>
    );
  }
};

export default Header;
