import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    let value = this.state.count;
    this.setState({ count: ++value });
  }

  handleDecrement() {
    let value = this.state.count;
    this.setState({ count: --value });
  }

  render() {
    return (
      <div>
        <button id="increment" type="button" onClick={this.handleIncrement}>+</button>
        <button id="decrement" type="button" onClick={this.handleDecrement}>-</button>
        <span> = {this.state.count}</span>
      </div>
    );
  }
}

export default Counter;
