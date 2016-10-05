'use strict';

import './Form.css';

import React from 'react';
import ReactDOM from 'react-dom';

import FormLabel from './FormLabel.js';
import FormNumber from './FormNumber.js';
import FormSelect from './FormSelect.js';
import Button from '../Button/Button.js';
import Loader from '../Loader/Loader.js';
import Fact from '../Fact/Fact.js';

import api from '../api.js';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: { valid: false, touched: false, value: null },
      filter: { valid: false, touched: false, value: null },
      progress: false,
      error: null,
      fact: null
    };
  }

  render() {
    return (
      this.state.progress ? this.renderProgress() :
      (this.state.fact ? this.renderFact() : this.renderForm())
    );
  }

  renderForm = () => {
    return (
      <form
        className="Form"
        onSubmit={this.onSubmit}
        autoComplete="off"
      >
        <div className="Form-group">
          <div className="Form-field">
            <div className="Form-labels">
              <FormLabel
                for="number"
                value="Enter number"
              />
              { this.state.number.touched && !this.state.number.valid ?
                <FormLabel
                  value="Invalid number"
                  type="error"
                />
                : null }
            </div>
            <FormNumber
              id="number"
              triggerChange={this.triggerNumberChange}
            />
          </div>
          <div className="Form-field">
            <div className="Form-labels">
              <FormLabel
                for="filter"
                value="Choose filter"
              />
            </div>
            <FormSelect
              value={api.getTypes().find(type => type.default === true).id}
              options={api.getTypes()}
              triggerChange={this.triggerFilterChange}
            />
          </div>
        </div>
        <div className="Form-footer">
          <Button
            value="Get fact!"
            onClick={this.getFact}
            display="b"
            size="lg"
          />
        </div>
        <div className="Form-separator">
          <span>or</span>
        </div>
        <div className="Form-extras">
          <Button
            size="sm"
            value="Surprise me!"
            onClick={this.getRandomFact}
          />
        </div>
      </form>
    );
  };

  renderFact = () => {
    return (
      <Fact
        number={this.state.fact.number}
        type={this.state.fact.type}
        text={this.state.fact.text}
        resetState={this.resetState}
      />
    );
  };

  renderProgress = () => {
    return (
      <Loader
        value="Loading"
      />
    );
  };

  triggerNumberChange = (number) => {
    this.setState({
      number: {
        valid: number.valid,
        touched: number.touched,
        value: number.value
      }
    });
  };

  triggerFilterChange = (filter) => {
    this.setState({
      filter: {
        valid: filter.valid,
        value: filter.value
      }
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  getFact = (e) => {
    e.preventDefault();

    if (this.state.number.valid && this.state.filter.valid) {
      this.setState({
        progress: true
      });

      api.getFact(this.state.number.value, this.state.filter.value).then(response => {
        this.getFactSuccess(response);
      }).catch(error => {
        this.getFactError(error);
      });
    } else {
      this.setState({
        number: { valid: false, touched: true, value: this.state.number.value },
        filter: { valid: false, touched: true, value: this.state.filter.value }
      });
    }
  };

  getRandomFact = (e) => {
    e.preventDefault();

    this.setState({
      progress: true
    });

    api.getRandomFact().then(response => {
      this.getFactSuccess(response);
    }).catch(error => {
      this.getFactError(error);
    });
  };

  getFactSuccess = (response) => {
    this.setState({
      progress: false,
      error: null,
      fact: response
    });
  };

  getFactError = (error) => {
    this.setState({
      progress: false,
      error: error
    });
  };

  resetState = () => {
    this.setState({
      number: { valid: false, touched: false, value: null },
      filter: { valid: false, touched: false, value: null },
      progress: false,
      error: null,
      fact: null
    });
  };
};

export default Form;
