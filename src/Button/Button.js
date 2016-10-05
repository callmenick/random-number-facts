'use strict';

import './Button.css';

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className={`Btn Btn--${this.props.display} Btn--${this.props.size}`}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
};

Button.defaultProps = {
  display: 'ib',
  size: 'md'
};

export default Button;
