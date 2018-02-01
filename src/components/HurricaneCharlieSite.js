import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class HurricaneCharlieSite extends Component {
  constructor() {
    super()
    this.state = { gallery: [] };
  }

  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    ) 
  }
}

export default HurricaneCharlieSite