'use strict';

import './Form.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { isInt } from 'validator';

class FormNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <input
        type="text"
        className="Form-input"
        id={this.props.id}
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    });

    this.props.triggerChange({
      valid: isInt(e.target.value),
      touched: true,
      value: e.target.value
    });
  };
};

export default FormNumber;
