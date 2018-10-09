import React from "react";

import { shallow, mount } from "enzyme";

import GuestForm from "./guess-form";
import { wrap } from "module";

describe("<GuessForm />", () => {
  it("Renders without crashing", () => {
    shallow(<GuestForm />);
  });

  it("Should fire the onMakeGuess callback when the form is submitted", () => {
    const callback = jest.fn();
    const wrapper = mount(<GuestForm onMakeGuess={callback} />);
    const value = 11;
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate("submit");
    expect(callback).toHaveBeenCalledWith(value.toString());
  });

  it("Should reset the input when the form is submitted", () => {
    const wrapper = mount(<GuestForm />);
    const input = wrapper.find('input[type="number"]');
    input.instance().value = 11;
    wrapper.simulate("submit");
    expect(input.instance().value).toEqual("");
  });
});
