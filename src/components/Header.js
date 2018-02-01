import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { hamburgerOpen: false, width: 0 }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.hamburgerClick = this.hamburgerClick.bind(this);
  }

  hamburgerClick() {
    this.setState({ hamburgerOpen: !this.state.hamburgerOpen });
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth })
  }

  render() {
    const { hamburgerOpen, width } = this.state;
    let hamburgerClass = `hamburger hamburger-spin ham-handle ${hamburgerOpen ? 'is-active' : ''}`;

    const hamburger = width < 640 ? (
      <div onClick={this.hamburgerClick} className="hamburger-container">
        <button className={hamburgerClass}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    ) : null;

    const nav = width > 640 || hamburgerOpen ? (
      <nav>
        <li><a href="#">gallery</a></li>
        <li><a href="#">contact</a></li>
        <li><a href="#">shop</a></li>
      </nav> 
    ) : null;
    
    return (
      <header>
        <img src="assets/img/hclogo.png" alt="Hurricane Charlie Logo" />
        {nav}
        {hamburger}
      </header>
    )
  }
}

export default Header