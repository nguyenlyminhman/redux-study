import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import StateToProps from './StateToProps.js';
import DispatchToProps from './DispatchToProps';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <StateToProps />
        <DispatchToProps />
      </div>
    );
  }
}

export default App;
