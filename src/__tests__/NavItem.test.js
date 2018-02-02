import React from 'react';
import { shallow } from 'enzyme';
import NavItem from '../components/NavItem';

const app = shallow(<NavItem />);

describe("NavItem", () => {
  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });
});