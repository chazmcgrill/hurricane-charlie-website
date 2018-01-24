import React, { Component } from 'react'

class Gallery extends Component {
  render() {
    return (
      <section className="gallery">
        <div className="gallery-grid">
          <div className="grid-item large"></div>
          <div className="grid-item wide"></div>
          <div className="grid-item wide"></div>
          <div className="grid-item tall"></div>
          <div className="grid-item tall"></div>
          <div className="grid-item small"></div>
          <div className="grid-item small"></div>
          <div className="grid-item large"></div>
          <div className="grid-item wide"></div>
        </div>
      </section>
    )
  }
}

export default Gallery