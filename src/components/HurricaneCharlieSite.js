import React, { Component } from 'react';
import Header from './Header';
import Gallery from './Gallery';
import Footer from './Footer';

class HurricaneCharlieSite extends Component {
  constructor() {
    super()
    this.state = { width: 0, gallery: [] };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth })
  }

  render() {
    return (
      <div>
        <Header width={this.state.width}/>
        <Gallery />
        <Footer />
      </div>
    ) 
  }
}

export default HurricaneCharlieSite