import React from 'react';
import Display from './Display';
import ButtonGrid from './ButtonGrid';
import '../styles/App.css';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      result: ""
    }
  }

  handleClick = (button) => {
    if (button === "C") {
      this.reset();
    } else if (button === "%") {
      this.mod();
    } else if (button === "=") {
      this.calculate();
    } else if (button === "+/-") {
      this.inverse();
    } else {
      this.setState({ result: this.state.result + button });
    }
  }

  reset = () => {
    this.setState({ result: "" });
  }

  calculate = () => {
    this.setState({ result: String(eval(this.state.result)) })
  }

  inverse = () => {
    if (this.state.result > 0) {
      this.setState({ result: String(-Math.abs(this.state.result)) })
    } else {
      this.setState({ result: String(Math.abs(this.state.result)) })
    }
  }

  mod = () => {
    this.setState({ result: String(this.state.result / 100) })
  }

  render() {
    return (
      <div className="container">
        <div className="interface">
          <Display value={this.state.result} />
          <ButtonGrid clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}