import React from 'react';
import { shallow } from 'enzyme';
import Content from '../components/Content';

const app = shallow(<Content />);

describe('Content Section', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });
});