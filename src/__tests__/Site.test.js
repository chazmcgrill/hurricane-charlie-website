import React from 'react';
import { shallow } from 'enzyme';
import Site from '../components/Site';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

const app = shallow(<Site />);

describe('Site', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  describe('contains', () => {
    it('Header showing', () => {
      expect(app.find(Header).length).toBe(1);
    });

    it('Content showing', () => {
      expect(app.find(Content).length).toBe(1);
    });

    it('Footer showing', () => {
      expect(app.find(Footer).length).toBe(1);
    });
  });
  
});