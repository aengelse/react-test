import React, { Component } from 'react';
import { connect } from 'react-redux';

import increment from '../actions/counter';

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.props.incrementCounter();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h2>Counter: {this.props.count}</h2>;
  }
}

const mapStateToProps = (state) => {
  return state.counter;
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => {
      dispatch(increment());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);