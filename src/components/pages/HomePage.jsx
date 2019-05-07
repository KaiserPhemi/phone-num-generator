// react libraries
import React from "react";

// styles
import "./home_page.scss";

/**
 * @desc
 */
const HomePage = ({
  handleClick,
  openInput,
  numValue,
  changeValue,
  generateNumber
}) => {
  return (
    <div className="home_page_wrapper">
      <h1>Phone number generator</h1>
      <button onClick={() => handleClick()}>
        {openInput ? "Close Input" : "Open Input"}
      </button>
      {openInput && (
        <label>
          <input
            placeholder="amount of phone numbers"
            type="number"
            value={numValue}
            onChange={changeValue}
          />
        </label>
      )}
      {openInput && (
        <button onClick={() => generateNumber()}>Generate numbers</button>
      )}
    </div>
  );
};

export default HomePage;
