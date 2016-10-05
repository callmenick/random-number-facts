'use strict';

import './Form.css';

import React from 'react';
import ReactDOM from 'react-dom';

class FormLabel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <label
        htmlFor={this.props.for}
        className="Form-label"
        data-type={this.props.type}
      >
        {this.props.value}
      </label>
    );
  }
};

export default FormLabel;

FormLabel.defaultProps = {
  for: '',
  type: ''
};
