import React, { Component } from "react";

class Counter extends Component {
  state = { currentNumber: 0 };

  increment = () => {
    this.setState({
      currentNumber: this.state.currentNumber + 1
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.currentNumber}</p>
        <button onClick={this.increment}>{this.props.buttonText}</button>
      </div>
    );
  }
}

export default Counter;
