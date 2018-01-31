import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../components/Contact'

const app = shallow(<Contact />);

describe('Contact', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });
});