import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class Site extends Component {
  constructor() {
    super()
    this.state = { gallery: [] };
  }

  render() {
    return (
      <div>
        <Header nav={this.state.nav}/>
        <Content />
        <Footer />
      </div>
    ) 
  }
}

export default Site