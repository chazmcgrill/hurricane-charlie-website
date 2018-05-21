import React, { Component } from 'react';
import Navbar from './Navbar';

const social = [
  { id: 0, url: 'http://twitter.com/hurricanechaz', name: 'twitter'},
  { id: 1, url: 'http://www.instagram.com/hurricane.charlie', name: 'instagram'},
  { id: 2, url: 'http://www.behance.net/chazhurricane', name: 'behance'},
];

class Footer extends Component {
  render() {
    return (
      <footer>
        <Navbar navClick={this.props.navClick} navData={this.props.navData} />
        <div className="footer-icons">
          {social.map(s => (
            <a key={s.id} target="_blank" href={s.url}><i className={`fa fa-${s.name}`}></i></a>
          ))}
        </div>
        <p>&copy; 2018 Charlie Taylor all rights reserved.</p>
      </footer>
    )
  }
}

export default Footer