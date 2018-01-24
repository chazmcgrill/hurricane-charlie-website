import React from "react";
import { shallow, configure } from "enzyme";
import Header from "../components/Header";

const app = shallow(<Header />);

describe('Header', () => {
  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });
});
