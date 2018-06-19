import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import galleryData from '../globals/galleryData';

class Site extends Component {
  constructor() {
    super()
    this.state = { 
      navData: [
        { id: 0, name: 'gallery', url: '/gallery' }, 
        { id: 1, name: 'contact', url: '/contact' }, 
        { id: 2, name: 'shop',    url: '/shop' }
      ],
      modalId: 1
    };
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    console.log("modal click")
  }

  render() {  
    return (
      <BrowserRouter>
        <div>
          <Header navData={this.state.navData} />
          <Content 
            galleryData={galleryData}
            modalId={this.state.modalId}
            handleModal={this.handleModal}  
          />
          <Footer navData={this.state.navData} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Site