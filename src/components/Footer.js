import React, { Component } from 'react';
import Navbar from './Navbar';
import socialItems from '../globals/socialItems';

const Footer = ({ navData }) => {
  return (
    <footer>
      <Navbar navData={navData} />
      <div className="footer-icons">
        {socialItems.map(s => (
          <a key={s.id} target="_blank" href={s.url}><i className={`fab fa-${s.name}`}></i></a>
        ))}
      </div>
      <p>&copy; 2018 Charlie Taylor all rights reserved.</p>
    </footer>
  )
}

export default Footer