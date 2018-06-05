import React, { Component } from 'react';
import Navbar from './Navbar';
import socialItems from '../globals/socialItems';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Navbar navClick={this.props.navClick} navData={this.props.navData} />
        <div className="footer-icons">
          {socialItems.map(s => (
            <a key={s.id} target="_blank" href={s.url}><i className={`fa fa-${s.name}`}></i></a>
          ))}
        </div>
        <p>&copy; 2018 Charlie Taylor all rights reserved.</p>
      </footer>
    )
  }
}

export default Footer