import React from 'react';
import { shallow } from 'enzyme';
import GalleryItem from '../components/GalleryItem';

const app = shallow(<GalleryItem />);

describe("Gallery Item", () => {
  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });
});