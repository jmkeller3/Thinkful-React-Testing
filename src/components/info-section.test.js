import React from "react";

import { shallow } from "enzyme";

import InfoSection from "./info-section";

describe("<AuralStatus />", () => {
  it("Renders without crashing", () => {
    shallow(<InfoSection />);
  });
});
