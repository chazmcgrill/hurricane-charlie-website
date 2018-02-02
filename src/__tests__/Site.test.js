import React from 'react';
import { shallow } from 'enzyme';
import Site from '../components/Site';

const app = shallow(<Site />);

describe('Site', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });
  
  it('initializes the `state` with an empty gallery', () => {
    expect(app.state().gallery).toEqual([]);
  });
});