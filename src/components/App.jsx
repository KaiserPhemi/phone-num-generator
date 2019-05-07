// react libraries
import React, { Component } from "react";

// components
import HomePage from "./pages/HomePage";

// import util
import createNumberSet from "../utils/randGenerator.js";

/**
 * @desc
 */
class App extends Component {
  /**
   * @desc component state
   */
  state = {
    count: 0,
    phoneNumberAmount: 0,
    openInput: false,
    generatedNumbers: []
  };

  changeValue = evt => {
    evt.preventDefault();
    this.setState({ phoneNumberAmount: evt.target.value });
  };

  generateNumber = () => {
    const num = Number(this.state.phoneNumberAmount);
    if (num <= 0) {
      return "Please supply a value greater than 1";
    } else {
      const numArr = createNumberSet(num);
      this.setState({ generatedNumbers: Array.from(numArr) });
    }
  };
  /**
   * @desc handles generating number
   */
  handleClick = () => {
    this.setState({ openInput: !this.state.openInput });
  };

  /**
   * @desc
   */
  render() {
    const { generatedNumbers } = this.state;
    return (
      <div className="app_wrapper">
        <header>
          <p>Welcome to the phone number generator</p>
        </header>
        <HomePage
          handleClick={this.handleClick}
          openInput={this.state.openInput}
          numValue={this.state.phoneNumberAmount}
          changeValue={this.changeValue}
          generateNumber={this.generateNumber}
        />
        {generatedNumbers.length > 0 && (
          <p>A total of {generatedNumbers.length} number(s) was generated.</p>
        )}
        {generatedNumbers.length > 0 &&
          generatedNumbers.map((phoneNum, index) => (
            <div key={index}>
              <span>{`0${phoneNum}`}</span>
            </div>
          ))}
      </div>
    );
  }
}

export default App;
