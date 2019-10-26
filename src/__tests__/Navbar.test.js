import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../components/Navbar';

const props = { navData: [{ name: test, id: 0 }] };
const app = shallow(<Navbar {...props} />);

describe("Navbar", () => {
  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });
});