import React, { Component } from 'react';
import logo from '../images/hclogo.png';
import Navbar from './Navbar';
import navData from '../globals/navData';

class Header extends Component {
  state = {
    burgerOpen: false,
    width: 0
  }

  burgerClick = () => {
    this.setState({ burgerOpen: !this.state.burgerOpen });
  }

  componentDidMount() {
    this.updateWindowSize();
    window.addEventListener('resize', this.updateWindowSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSize);
  }

  updateWindowSize = () => {
    this.setState({ width: window.innerWidth })
  }

  render() {
    const { burgerOpen, width } = this.state;
    const burgerClass = `hamburger hamburger-spin ${burgerOpen ? 'is-active' : ''}`;
    
    return (
      <header>
        <img src={logo} alt="Hurricane Charlie Logo" />

        {width < 640 && (
          <div onClick={this.burgerClick} className="hamburger-container">
            <div className={burgerClass}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </div>
          </div>
        )}

        {(width > 640 || burgerOpen) && <Navbar navData={navData} />}
      </header>
    )
  }
}

export default Header