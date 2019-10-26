import React from 'react';
import { IGalleryItem } from '../globals/galleryData';

interface GalleryItemProps {
  galleryItemData: IGalleryItem;
  selectGalleryItem: (id: number) => void;
  imgData: string;
}

const GalleryItem = ({
  galleryItemData,
  selectGalleryItem,
  imgData,
}: GalleryItemProps): JSX.Element => {
  const itemClass = `grid-item ${galleryItemData ? galleryItemData.size : null}`;
  
  return (
    <div
      onClick={() => selectGalleryItem(galleryItemData.id)}
      className={itemClass}
      style={{ backgroundImage: `url('${imgData}')`}}
    >
      <div className="img-overlay"><p>{galleryItemData.name}</p></div>
    </div>
  );
}

export default GalleryItem;