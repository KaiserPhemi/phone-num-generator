// react libraries
import React from "react";

// third-party libraries
import { expect } from "chai";
import { shallow } from "enzyme";

// components
import HomePage from "../HomePage";

// test suites
describe("HomePage", () => {
  const wrapper = shallow(<HomePage />);
  it("should have a div tag", () => {
    expect(wrapper.find("div")).to.have.length(1);
  });

  it("should  have an h1 tag", () => {
    expect(wrapper.find("h1")).to.have.length(1);
  });
});
