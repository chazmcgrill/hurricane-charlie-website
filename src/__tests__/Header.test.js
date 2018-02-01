import React from "react";
import { shallow, mount } from "enzyme";
import Header from "../components/Header";

const app = shallow(<Header />);

describe("Header", () => {
  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  describe("screen at full width", () => {
    it("nav showing", () => {
      expect(app.find('nav').exists()).toEqual(true)
    });

    it("hamburger hidden", () => {
      expect(app.find('.hamburger-container').exists()).toEqual(false)
    });
  });
  
  describe("screen at mobile width", () => {  
    global.innerWidth = 600;
    global.dispatchEvent(new Event('resize'));

    const wrapper = shallow(<Header />);

    it("nav hidden", () => {
      expect(wrapper.find('nav').exists()).toEqual(false)
    });

    it("hamburger showing", () => {
      expect(wrapper.find('.hamburger-container').exists()).toEqual(true)
    });

    it("hamburger clicked nav showing", () => {
      wrapper.find('.hamburger-container').simulate('click');
      expect(wrapper.find('nav').exists()).toEqual(true)
    });
  });

});
