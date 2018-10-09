import React from "react";

import { shallow } from "enzyme";

import GuessSection from "./guess-section";

describe("<GuessList />", () => {
  it("Renders without crashing", () => {
    shallow(<GuessSection />);
  });
});
