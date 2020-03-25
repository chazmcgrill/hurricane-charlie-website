import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { GalleryItemData } from '../pages/gallery';
import { FluidObject } from 'gatsby-image';

interface GalleryItemProps {
    galleryItemData: GalleryItemData;
    selectGalleryItem: (id: number) => void;
    imgData: FluidObject;
}

const GalleryItem = ({
    galleryItemData,
    selectGalleryItem,
    imgData,
}: GalleryItemProps): JSX.Element => {
    const itemClass = `grid-item ${galleryItemData ? galleryItemData.size : ''}`;
  
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