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
      modalStatus: {
        id: 0,
        open: false 
      }
    };
    this.modalHandler = this.modalHandler.bind(this);
  }

  modalHandler(cmd) {
    let { modalStatus } = this.state;
    switch(cmd) {
      case "next":
        modalStatus.id++;
        break;
      case "prev":
        modalStatus.id--;
        break;
      case "close":
        modalStatus.open = false;
        break;
      default:
        modalStatus = {id: cmd, open: true};
        break;
    }
    this.setState({ modalStatus });
  }

  render() {  
    return (
      <BrowserRouter>
        <div>
          <Header navData={this.state.navData} />
          <Content 
            galleryData={galleryData}
            modalStatus={this.state.modalStatus}
            modalHandler={this.modalHandler}  
          />
          <Footer navData={this.state.navData} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Site