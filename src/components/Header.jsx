import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerOpen: false
    }
    this.hamburgerClick = this.hamburgerClick.bind(this);
  }


  hamburgerClick() {
    this.setState({hamburgerOpen: !this.state.hamburgerOpen});
    
    // nav.classList.toggle('hidden');
  }

  render() {
    let hamburgerClass = `hamburger hamburger--spin ham-handle ${this.state.hamburgerOpen ? 'is-active' : ''}`;

    return (
      <header>
        <img src="assets/img/hclogo.png" alt="Hurricane Charlie Logo" />
        <nav className={this.props.width > 639 ? "" : "hidden"}>
          <li><a href="#">gallery</a></li>
          <li><a href="#">contact</a></li>
          <li><a href="#">shop</a></li>
        </nav>
        <div onClick={this.hamburgerClick} className="hamburger-container">
          <button className={hamburgerClass}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </header>
    )
  }
}

export default Header