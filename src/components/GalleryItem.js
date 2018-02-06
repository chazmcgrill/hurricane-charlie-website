import React from 'react';

const GalleryItem = ({ galleryItemData }) => {
  const itemClass = `grid-item ${galleryItemData ? galleryItemData.size : null}`;
  return <div className={itemClass} />;
}

export default GalleryItem;