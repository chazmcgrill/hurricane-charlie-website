import React from "react";
import { shallow, configure } from "enzyme";
import Header from "../components/Header";
import { clearLine } from "readline";

const app = shallow(<Header />);

describe("Header", () => {
  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("initializes the hamburgerOpen `state` as false", () => {
    expect(app.state().hamburgerOpen).toBe(false);
  });

  describe("When clicking the hamburger", () => {
    beforeEach(() => {
      app.find(".hamburger-container").simulate("click");
    });

    afterEach(() => {
      app.find(".hamburger-container").simulate("click");
    });

    it("hamburgerOpen `state` set to true", () => {
      expect(app.state().hamburgerOpen).toBe(true);
    });
  });

  describe("screen width", () => {
    
    it('above 640 nav showing', () => {
      expect(app.find("nav").hasClass("hidden")).toBe(false);
    });
    
    const wrapper = shallow(<Header width={639} />);
    
    it('below 640 nav hidden', () => {
      expect(wrapper.find("nav").hasClass("hidden")).toBe(true);
    });

    it('hamburger click nav should be showing', () => {
      wrapper.find(".hamburger-container").simulate("click");
      expect(wrapper.find("nav").hasClass("hidden")).toBe(false);
    });
  });

});
