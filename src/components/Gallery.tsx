import React, { useState, useEffect } from 'react';
import GalleryItem from './GalleryItem';
import CallToAction from './CallToAction';
import Modal from './Modal';
import { galleryData } from '../globals/galleryData';

import imageImport from '../helpers/imageImport';

const images = imageImport(require.context('../images/thumbs', false, /\.jpg$/)) as { [key: string]: string };

const Gallery = () => {
    const [selectedGalleryItemId, setSelectedGalleryItemId] = useState(0);
    const [isModalShowing, setIsModalShowing] = useState(false);
    const modalLimit = galleryData.length - 1;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const selectGalleryItem = (id: number): void => {
        setSelectedGalleryItemId(id);
        setIsModalShowing(true);
    }

    const modalHandler = (command: string): void => {
        switch (command) {
            case "next":
                if (selectedGalleryItemId < modalLimit) setSelectedGalleryItemId(selectedGalleryItemId + 1);
                break;
            case "prev":
                if (selectedGalleryItemId > 0) setSelectedGalleryItemId(selectedGalleryItemId - 1);
                break;
            default:
                setIsModalShowing(false);
                break;
        }
    }

    if (isModalShowing) {
        return (
            <Modal
                selectedGalleryItemId={selectedGalleryItemId}
                modalHandler={modalHandler}
                modalLimit={modalLimit}
            />
        )
    }

    return (
        <div>
            <section className="gallery">
                <div className="gallery-grid">
                    {galleryData.map(item => (
                        <GalleryItem
                            selectGalleryItem={selectGalleryItem}
                            galleryItemData={item}
                            key={item.id}
                            imgData={images[item.src]}
                        />
                    ))}
                </div>
            </section>
            <CallToAction />
        </div>
    )
}

export default Gallery