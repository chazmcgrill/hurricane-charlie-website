import React, { Component } from 'react';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

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
    // this.navHandler = this.navHandler.bind(this);
  }

  // navHandler(e) {
  //   const navData = this.state.navData.map(n => (
  //     { ...n, active: e.target.id === n.name }
  //   ));
  //   this.setState({navData});
  // }

  render() {
    const activeName = this.state.navData.filter(n => n.active)[0].name;
    const callToAction = activeName === "shop" ? null : (
      <div className="shop-cta">
        <div className="shop-cta-overlay"></div>
        <div className="shop-cta-box">
          <h2>Prints for your wall...</h2>
          <Link to="/shop">visit shop</Link>
        </div>
      </div>
    );
  
    return (
      <BrowserRouter>
      <div>
          <Header 
            navClick={this.navHandler} 
            navData={this.state.navData} 
          />
          <Content 
            galleryData={galleryData}
            activeContent={activeName} 
          />
          {callToAction}
          <Footer 
            navClick={this.navHandler} 
            navData={this.state.navData} 
          />
      </div>
      </BrowserRouter>
    );
  }
}

export default Site