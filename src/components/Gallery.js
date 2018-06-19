import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import CallToAction from './CallToAction';
import Modal from './Modal';

class Gallery extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { galleryData, modalStatus, handleModal } = this.props;
    const gallery = galleryData ? (
      galleryData.map(item => (
        <GalleryItem galleryItemData={item} key={item.id} />
      ))
    ) : null;
    const modal = modalStatus.open 
      ? <Modal 
          modalData={galleryData[modalStatus.id]} 
          handleModal={handleModal}
        /> 
      : null;

    return (
      <div>
        <section className="gallery">
          <div className="gallery-grid">
            {gallery}
          </div>
        </section>
        {modal}
        <CallToAction />
      </div>
    )
  }
}

export default Gallery