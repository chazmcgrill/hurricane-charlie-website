import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { GalleryItemData } from '../pages/gallery';

interface GalleryItemProps {
    galleryItemData: GalleryItemData;
    selectGalleryItem: (id: number) => void;
}

const GalleryItem = ({
    galleryItemData,
    selectGalleryItem,
}: GalleryItemProps): JSX.Element => {
    const itemClass = `grid-item${galleryItemData.isLarge ? ' large' : ''}`;
  
    return (
        <BackgroundImage
            onClick={() => selectGalleryItem(galleryItemData.id)}
            className={itemClass}
            fluid={galleryItemData.image}
            alt={`Thumbnail - ${galleryItemData.name}`}
        >
            <div className="img-overlay"><p>{galleryItemData.name}</p></div>
        </BackgroundImage>
    );
}

export default GalleryItem;