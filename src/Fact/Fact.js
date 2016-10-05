'use strict';

import './Fact.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../Button/Button.js';

class Fact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Fact">
        <div className="Fact-header">
          <h2 className="Fact-number">{this.props.number}</h2>
          <span className="Fact-type">#{this.props.type}</span>
        </div>
        <div className="Fact-content">
          <p className="Fact-text">{this.props.text}</p>
        </div>
        <div className="Fact-footer">
          <Button
            value="Get another!"
            onClick={this.resetState}
            size="sm"
          />
        </div>
      </div>
    );
  }

  resetState = () => {
    this.props.resetState();
  };
};

export default Fact;
