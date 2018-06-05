import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import galleryData from '../galleryData';

class Site extends Component {
  constructor() {
    super()
    this.state = { 
      navData: [
        { id: 0, name: 'gallery', url: '/', active: true }, 
        { id: 1, name: 'contact', url: '/contact', active: false }, 
        { id: 2, name: 'shop', url: '/shop', active: false }
      ] 
    };
  }

  render() {  
    return (
      <BrowserRouter>
        <div>
          <Header navData={this.state.navData} />
          <Content galleryData={galleryData} />
          <Footer navData={this.state.navData} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Site