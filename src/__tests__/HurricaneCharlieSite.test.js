import React from 'react';
import { shallow, configure } from 'enzyme';
import HurricaneCharlieSite from '../components/HurricaneCharlieSite';

const app = shallow(<HurricaneCharlieSite />);

describe('Site', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });
  
  it('initializes the `state` with an empty gallery', () => {
    expect(app.state().gallery).toEqual([]);
  });
});