import React, { Component } from 'react';
import Navbar from './Navbar';

const social = [
  { url: 'http://twitter.com/hurricanechaz', name: 'twitter'},
  { url: 'http://www.instagram.com/hurricane.charlie', name: 'instagram'},
  { url: 'http://www.behance.net/chazhurricane', name: 'behance'},
];

class Footer extends Component {
  render() {
    return (
      <footer>
        <Navbar navClick={this.props.navClick} navData={this.props.navData} />
        <div className="footer-icons">
          {social.map(s => (
            <a target="_blank" href={s.url}><i className={`fa fa-${s.name}`}></i></a>
          ))}
        </div>
        <p>&copy; 2018 Charlie Taylor all rights reserved.</p>
        test
      </footer>
    )
  }
}

export default Footer