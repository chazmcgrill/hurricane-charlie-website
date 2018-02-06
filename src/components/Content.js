import React from 'react';
import Gallery from './Gallery'

const Content = ({ galleryData }) => {
  return (
    <section className="content-section">
      <Gallery galleryData={galleryData} />
    </section>
  )
}

export default Content;