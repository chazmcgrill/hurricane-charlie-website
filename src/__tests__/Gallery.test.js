import React from "react";
import { shallow, configure } from "enzyme";
import Gallery from "../components/Gallery";

const app = shallow(<Gallery />);

describe('Gallery', () => {
  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });
});
