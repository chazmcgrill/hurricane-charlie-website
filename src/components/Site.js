import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import galleryData from '../galleryData';

class Site extends Component {
  constructor() {
    super()
    this.state = { 
      navData: [
        { id: 0, name: 'gallery', active: true }, 
        { id: 1, name: 'contact', active: false }, 
        { id: 2, name: 'shop', active: false }
      ] 
    };
    this.navHandler = this.navHandler.bind(this);
  }

  navHandler(e) {
    const navData = this.state.navData.map(n => (
      { ...n, active: e.target.id === n.name }
    ));
    this.setState({navData});
  }

  render() {
    const activeName = this.state.navData.filter(n => n.active)[0].name;
    const callToAction = activeName === "shop" ? null : (
      <div className="shop-cta">
        <div className="shop-btn">
          <h1 id="shop" onClick={this.navHandler} >artwork you can buy</h1>
        </div>
      </div>
    );
  
    return (
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
    );
  }
}

export default Site