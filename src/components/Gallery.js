import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import CallToAction from './CallToAction';
import Modal from './Modal';

class Gallery extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { galleryData, modalStatus, modalHandler } = this.props;

    const gallery = galleryData 
      ? (<section className="gallery">
            <div className="gallery-grid">
              {galleryData.map(item => (
                <GalleryItem modalHandler={modalHandler} galleryItemData={item} key={item.id} />
              ))}
            </div>
          </section>) 
      : null;

    const galleryContent = modalStatus.open 
      ? <Modal 
          modalData={galleryData[modalStatus.id]} 
          modalHandler={modalHandler}
          modalLimit={galleryData.length - 1}
        /> 
      : gallery;

    return (
      <div>
        {galleryContent}
        <CallToAction />
      </div>
    )
  }
}

export default Gallery