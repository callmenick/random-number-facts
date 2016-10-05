'use strict';

import './Form.css';

import React from 'react';
import ReactDOM from 'react-dom';

class FormSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valid: true,
      value: this.props.value
    };
  }

  componentDidMount() {
    this.props.triggerChange({
      valid: true,
      value: this.state.value
    });
  }

  render() {
    return (
      <select
        name="filter"
        id="filter"
        className="Form-input Form-select"
        value={this.state.value}
        onChange={this.onChange}
      >
        {
          this.props.options.map((option, index) => {
            return (
              <option
                key={index}
                value={option.id}>{option.name}
              </option>
            );
          })
        }
      </select>
    );
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    });

    this.props.triggerChange({
      valid: true,
      value: e.target.value
    });
  };
};

export default FormSelect;
