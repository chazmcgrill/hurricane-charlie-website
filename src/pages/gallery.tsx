import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import CallToAction from '../components/call-to-action';
import GalleryItem from '../components/gallery-item';
import Modal from '../components/gallery-modal-content';
import Layout from '../components/layout';
import { fixedImageObjectFromArray, fluidImageObjectFromArray, GatsbyFluidImageNode } from '../helpers/imageObjectFromArray';
import SEO from '../components/seo';
import { FluidObject } from 'gatsby-image';

export interface GalleryItemData {
    id: number;
    name: string;
    src: string;
    size: string;
    shop: boolean;
    desc: string;
    image: FluidObject;
    modalImage: string;
}

const combineDataAndImages = (images: GatsbyFluidImageNode[], data: GalleryItemData[]) => {
    const flattendImageData = fluidImageObjectFromArray(images);
    return data.map((item) => ({
        ...item,
        image: flattendImageData[item.src],
    }));
}

const Gallery = () => {
    const [selectedGalleryItemId, setSelectedGalleryItemId] = useState(0);
    const [isModalShowing, setIsModalShowing] = useState(false);
    
    const {data, images, modalImages} = useStaticQuery(graphql`
        query {
            data: galleryYaml {
                gallery {
                    id
                    name
                    shop
                    size
                    src
                    desc
                    modalImage
                }
            }
            images: allFile(filter: { relativeDirectory: { eq: "thumbs" } }) {
                nodes {
                    childImageSharp {
                        fluid {
                            originalName
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            modalImages: allFile(filter: { relativeDirectory: { eq: "modal-images" } }) {
                nodes {
                    childImageSharp {
                        fixed(width: 360) {
                            originalName
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    `);

    const modalLimit = data.gallery.length - 1;
    const galleryData = combineDataAndImages(images.nodes, data.gallery);
    const flattendModalImageData = fixedImageObjectFromArray(modalImages.nodes);

    const selectGalleryItem = (id: number): void => {
        setSelectedGalleryItemId(id);
        setIsModalShowing(true);
    }

    const modalHandler = (command?: string): void => {
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

    const { modalImage, ...selectedGalleryItem } = data.gallery[selectedGalleryItemId];

    const modalComponent = () => (
        <Modal
            selectedGalleryItem={selectedGalleryItem}
            imgData={flattendModalImageData[modalImage]}
            modalHandler={modalHandler}
            modalLimit={modalLimit}
        />
    );

    return (
        <Layout
            isModalOpen={isModalShowing}
            modalComponent={modalComponent()}
            onOutsideClick={modalHandler}
        >
            <SEO title="Gallery" />
            <section className="gallery">
                <div className="gallery-grid">
                    {galleryData.map((item: GalleryItemData) => (
                        <GalleryItem
                            selectGalleryItem={selectGalleryItem}
                            galleryItemData={item}
                            key={item.id}
                        />
                    ))}
                </div>
            </section>
            <CallToAction />
        </Layout>
    )
}

export default Gallery;