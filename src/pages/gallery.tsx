import React, { useState, useEffect } from 'react';
// import GalleryItem from './GalleryItem';
// import Modal from './Modal';
import { galleryData } from '../globals/galleryData';

// import imageImport from '../helpers/imageImport';
import CallToAction from '../components/call-to-action';
import GalleryItem from '../components/gallery-item';
import Modal from '../components/modal';
import Layout from '../components/layout';

// const images = imageImport(require.context('../images/thumbs', false, /\.jpg$/)) as { [key: string]: string };

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
            <Layout>
                <Modal
                    selectedGalleryItemId={selectedGalleryItemId}
                    modalHandler={modalHandler}
                    modalLimit={modalLimit}
                />
            </Layout>
        )
    }

    return (
        <Layout>
            <section className="gallery">
                <div className="gallery-grid">
                    {galleryData.map(item => (
                        <GalleryItem
                            selectGalleryItem={selectGalleryItem}
                            galleryItemData={item}
                            key={item.id}
                            // imgData={images[item.src]}
                        />
                    ))}
                </div>
            </section>
            <CallToAction />
        </Layout>
    )
}

export default Gallery