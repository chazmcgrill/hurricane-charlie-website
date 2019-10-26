import React from "react";
import { shallow, mount } from "enzyme";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const minProps = { navData: [{name: test, id: 0}] };

const app = shallow(<Header {...minProps} />);

describe("Header", () => {
  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  describe("screen at full width", () => {
    it("nav showing", () => {
      expect(app.find(Navbar).length).toBe(1);
    });

    it("hamburger hidden", () => {
      expect(app.find('.hamburger-container').exists()).toEqual(false)
    });
  });
  
  describe("screen at mobile width", () => {  
    global.innerWidth = 600;
    global.dispatchEvent(new Event('resize'));

    const wrapper = shallow(<Header {...minProps} />);

    it("nav hidden", () => {
      expect(wrapper.find(Navbar).length).toBe(0);
    });

    it("hamburger showing", () => {
      expect(wrapper.find('.hamburger-container').exists()).toEqual(true);
    });

    it("hamburger clicked nav showing", () => {
      wrapper.find('.hamburger-container').simulate('click');
      expect(wrapper.find(Navbar).length).toBe(1);
    });
  });

});
