import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../components/Navbar';

const app = shallow(<Navbar />);

describe("Navbar", () => {
  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });
});