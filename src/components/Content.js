import React, { Component } from 'react';
import Gallery from './Gallery';
import Contact from './Contact';
import Shop from './Shop';

class Content extends Component {
  contentSwitch(name) {
    switch (name) {
      case 'gallery':
        return <Gallery galleryData={this.props.galleryData} />;
      case 'contact':
        return <Contact />;
      case 'shop':
        return <Shop />;
      default:
        return null;
    }
  }
  
  render() {
    return (
      <section className="content-section">
        {this.contentSwitch(this.props.activeContent)}
      </section>
    )
  }
}

export default Content;