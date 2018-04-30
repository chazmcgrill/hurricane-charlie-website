import React, { Component } from 'react';
import Navbar from './Navbar';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Navbar navClick={this.props.navClick} navData={this.props.navData} />
        <div className="footer-icons">
          <a href="http://twitter.com/hurricanechaz"><i className="fa fa-twitter"></i></a>
          <a href="http://www.instagram.com/chazhurricane"><i className="fa fa-instagram"></i></a>
          <a href="http://www.behance.net/chazhurricane"><i className="fa fa-behance"></i></a>
        </div>
        <p>&copy; 2018 Charlie Taylor all rights reserved.</p>
      </footer>
    )
  }
}

export default Footer