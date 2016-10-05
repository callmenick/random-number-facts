'use strict';

import './Content.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Form from '../Form/Form.js';
import Fact from '../Fact/Fact.js';

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fact: null
    };
  }

  render() {
    return (
      <div className="Content">
        <Form />
      </div>
    );
  }
};

export default Content;
