import React, { useState } from 'react';
import CallToAction from '@components/call-to-action';
import GalleryItem from '@components/gallery-item';
import Modal from '@components/gallery-modal-content';
import Layout from '@components/layout';
import gallery from '@content/gallery';

const LARGE_ITEMS_PATTERN = [3, 9, 3, 5];
const LARGE_ITEMS_PATTERN_LENGTH = LARGE_ITEMS_PATTERN.length;

const getIndexesForLargeGridItems = (gridLength: number): number[] => {
    const limitForLargeItems = gridLength - (gridLength % 10); // prevent orphaned small items
    const largeItemsIndexes = [];
    let currentGridIndex = 0;

    while (currentGridIndex < limitForLargeItems) {
        largeItemsIndexes.push(currentGridIndex);
        const patternIndex = (largeItemsIndexes.length - 1) % LARGE_ITEMS_PATTERN_LENGTH;
        currentGridIndex += LARGE_ITEMS_PATTERN[patternIndex];
    }

    return largeItemsIndexes;
};

const indexesForLargeGridItems = getIndexesForLargeGridItems(gallery.length);
const modalLimit = gallery.length - 1;

const Gallery = () => {
    const [selectedGalleryItemId, setSelectedGalleryItemId] = useState(0);
    const [isModalShowing, setIsModalShowing] = useState(false);

    const selectGalleryItem = (id: number): void => {
        setSelectedGalleryItemId(id);
        setIsModalShowing(true);
    };

    const modalHandler = (command?: string): void => {
        switch (command) {
            case 'next':
                if (selectedGalleryItemId < gallery.length) setSelectedGalleryItemId(selectedGalleryItemId + 1);
                break;
            case 'prev':
                if (selectedGalleryItemId > 0) setSelectedGalleryItemId(selectedGalleryItemId - 1);
                break;
            default:
                setIsModalShowing(false);
                break;
        }
    };

    const modalComponent = () => (
        <Modal
            selectedGalleryItem={gallery[selectedGalleryItemId]}
            modalHandler={modalHandler}
            modalLimit={modalLimit}
        />
    );

    return (
        <Layout isModalOpen={isModalShowing} modalComponent={modalComponent()} onOutsideClick={modalHandler}>
            <section className="gallery">
                <div className="gallery-grid">
                    {gallery.map((item, index) => (
                        <GalleryItem
                            selectGalleryItem={selectGalleryItem}
                            galleryItemData={item}
                            isLarge={indexesForLargeGridItems.includes(index)}
                            key={item.id}
                        />
                    ))}
                </div>
            </section>
            <CallToAction />
        </Layout>
    );
};

export default Gallery;
