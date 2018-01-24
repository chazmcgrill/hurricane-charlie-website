import React from 'react';
import { shallow, configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import HurricaneCharlieSite from '../components/HurricaneCharlieSite';

// configure({ adapter: new Adapter() });

const app = shallow(<HurricaneCharlieSite />);

describe('Site', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });
  
  it('initializes the `state` with an empty gallery', () => {
    expect(app.state().gallery).toEqual([]);
  });
  
  it('initializes the `state` width to match screen size', () => {
    expect(app.state().width).toEqual(window.innerWidth);
  });
  
  it('window resize edits `state` and matches size', () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
    expect(app.state().width).toEqual(window.innerWidth);
  });
});