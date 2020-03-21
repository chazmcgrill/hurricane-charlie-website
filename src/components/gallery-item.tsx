import React from 'react';
import BackgroundImage from 'gatsby-background-image';

import { IGalleryItem } from '../globals/galleryData';

interface GalleryItemProps {
    galleryItemData: IGalleryItem;
    selectGalleryItem: (id: number) => void;
    imgData: any;
}

const GalleryItem = ({
    galleryItemData,
    selectGalleryItem,
    imgData,
}: GalleryItemProps): JSX.Element => {
    const itemClass = `grid-item ${galleryItemData ? galleryItemData.size : null}`;
  
    return (
        <BackgroundImage
            onClick={() => selectGalleryItem(galleryItemData.id)}
            className={itemClass}
            fluid={imgData}
        >
            <div className="img-overlay"><p>{galleryItemData.name}</p></div>
        </BackgroundImage>
    );
}

export default GalleryItem;