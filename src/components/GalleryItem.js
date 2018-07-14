import React from 'react';

const GalleryItem = ({ galleryItemData, modalHandler, imgData }) => {
  const itemClass = `grid-item ${galleryItemData ? galleryItemData.size : null}`;
  return (
    <div
      onClick={() => modalHandler(galleryItemData.id)}
      className={itemClass}
      style={{ backgroundImage: `url('${imgData}')`}}
      alt={galleryItemData.name} >
      <div className="img-overlay"><p>{galleryItemData.name}</p></div>
    </div>
  );
}

export default GalleryItem;