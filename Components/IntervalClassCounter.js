import React, { useState } from 'react';
import { Component } from 'react';

class IntervalClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interVal = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interVal);
  }

  tick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return <h1>{this.state.count}</h1>;
  }
}

export default IntervalClassCounter;
