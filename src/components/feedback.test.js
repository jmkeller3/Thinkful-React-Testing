import React from "react";

import { shallow } from "enzyme";

import Feedback from "./feedback";

describe("<Feedback />", () => {
  it("Renders without crashing", () => {
    shallow(<Feedback />);
  });

  it("Renders some feedback", () => {
    let TEST = "This is a test";

    let wrapper = shallow(<Feedback feedback={TEST} />);
    expect(wrapper.contains(TEST)).toEqual(true);
  });
});
