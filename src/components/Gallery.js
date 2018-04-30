import React, { Component } from 'react';
import GalleryItem from './GalleryItem';

class Gallery extends Component {
  render() {
    const gallery = this.props.galleryData ? (
      this.props.galleryData.map(item => (
        <GalleryItem galleryItemData={item} key={item.id} />
      ))
    ) : null;

    return (
      <section className="gallery">
        <div className="gallery-grid">
          {gallery}
        </div>
      </section>
    )
  }
}

export default Gallery