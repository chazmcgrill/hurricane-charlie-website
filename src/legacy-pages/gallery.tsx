import React, { useState } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import { FluidObject } from 'gatsby-image';
import CallToAction from '../components/call-to-action';
import GalleryItem from '../components/gallery-item';
import Modal from '../components/gallery-modal-content';
import Layout from '../components/layout';
import {
    fixedImageObjectFromArray,
    fluidImageObjectFromArray,
    GatsbyFluidImageNode,
} from '../helpers/imageObjectFromArray';
import SEO from '../components/seo';
import gallery, { GalleryItemData } from '@/content/gallery';

const LARGE_ITEMS_PATTERN = [3, 9, 3, 5];
const LARGE_ITEMS_PATTERN_LENGTH = LARGE_ITEMS_PATTERN.length;

const indexesForLargeGridItems = (gridLength: number): number[] => {
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

const combineDataAndImages = (images: GatsbyFluidImageNode[], data: GalleryItemData[]) => {
    const largeItemsIndexes = indexesForLargeGridItems(images.length);
    const flattendImageData = fluidImageObjectFromArray(images);
    return data.map((item, index) => ({
        ...item,
        image: flattendImageData[item.src],
        isLarge: largeItemsIndexes.includes(index),
    }));
};

const Gallery = () => {
    const [selectedGalleryItemId, setSelectedGalleryItemId] = useState(0);
    const [isModalShowing, setIsModalShowing] = useState(false);

    // const {data, images, modalImages} = useStaticQuery(graphql`
    //     query {
    //         data: galleryYaml {
    //             gallery {
    //                 id
    //                 name
    //                 shop
    //                 src
    //                 desc
    //                 modalImage
    //             }
    //         }
    //         images: allFile(filter: { relativeDirectory: { eq: "thumbs" } }) {
    //             nodes {
    //                 childImageSharp {
    //                     fluid {
    //                         originalName
    //                         ...GatsbyImageSharpFluid
    //                     }
    //                 }
    //             }
    //         }
    //         modalImages: allFile(filter: { relativeDirectory: { eq: "modal-images" } }) {
    //             nodes {
    //                 childImageSharp {
    //                     fixed(width: 360) {
    //                         originalName
    //                         ...GatsbyImageSharpFixed
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `);

    // const modalLimit = data.gallery.length - 1;
    // const galleryData = combineDataAndImages(images.nodes, data.gallery);
    // const flattendModalImageData = fixedImageObjectFromArray(modalImages.nodes);

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

    const { modalImage, ...selectedGalleryItem } = gallery[selectedGalleryItemId];

    const modalComponent = () => (
        <></>
        // <Modal
        //     selectedGalleryItem={selectedGalleryItem}
        //     imgData={flattendModalImageData[modalImage]}
        //     modalHandler={modalHandler}
        //     modalLimit={modalLimit}
        // />
    );

    return (
        <Layout isModalOpen={isModalShowing} modalComponent={modalComponent()} onOutsideClick={modalHandler}>
            <SEO title="Gallery" />
            <section className="gallery">
                <div className="gallery-grid">
                    {gallery.map((item) => (
                        <GalleryItem
                            selectGalleryItem={selectGalleryItem}
                            galleryItemData={item}
                            isLarge={false}
                            key={item.id}
                        />
                    ))}
                </div>
            </section>
            {/* <CallToAction /> */}
        </Layout>
    );
};

export default Gallery;
