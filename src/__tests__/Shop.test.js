import React from 'react';
import { shallow } from 'enzyme';
import Shop from '../components/Shop';

const app = shallow(<Shop />);

describe('Shop', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });
});