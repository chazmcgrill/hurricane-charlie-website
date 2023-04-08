import React from 'react';
import Image from 'next/image';
import { GalleryItemData } from '@content/gallery';

interface GalleryItemProps {
    galleryItemData: GalleryItemData;
    selectGalleryItem: (id: number) => void;
    isLarge: boolean;
}

const GalleryItem = ({ galleryItemData, selectGalleryItem, isLarge }: GalleryItemProps): JSX.Element => {
    const itemClass = `grid-item${isLarge ? ' large' : ''}`;

    return (
        <div className={itemClass} onClick={() => selectGalleryItem(galleryItemData.id)}>
            <Image
                style={{ objectFit: 'cover' }}
                src={require(`../../../public/images/thumbs/${galleryItemData.src}`)}
                alt={`Thumbnail - ${galleryItemData.name}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="img-overlay">
                <p>{galleryItemData.name}</p>
            </div>
        </div>
    );
};

export default GalleryItem;
