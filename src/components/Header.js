import React, { Component } from 'react';
import logo from '../assets/img/hclogo.png';
import Navbar from './Navbar';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { burgerOpen: false, width: 0 }
    this.updateWindowSize = this.updateWindowSize.bind(this);
    this.burgerClick = this.burgerClick.bind(this);
  }

  burgerClick() {
    this.setState({ burgerOpen: !this.state.burgerOpen });
  }

  componentDidMount() {
    this.updateWindowSize();
    window.addEventListener('resize', this.updateWindowSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSize);
  }

  updateWindowSize() {
    this.setState({ width: window.innerWidth })
  }

  render() {
    const { burgerOpen, width } = this.state;
    const burgerClass = `hamburger hamburger-spin ${burgerOpen ? 'is-active' : ''}`;

    const burger = width < 640 ? (
      <div onClick={this.burgerClick} className="hamburger-container">
        <div className={burgerClass}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>
      </div>
    ) : null;

    const nav = width > 640 || burgerOpen ? (
      <Navbar 
        navClick={this.props.navClick} 
        navData={this.props.navData}
        burgerOpen={burgerOpen}
      />
    ) : null;
    
    return (
      <header>
        <img src={logo} alt="Hurricane Charlie Logo" />
        {nav}
        {burger}
      </header>
    )
  }
}

export default Header