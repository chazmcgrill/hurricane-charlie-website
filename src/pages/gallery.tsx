import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import CallToAction from '../components/call-to-action';
import GalleryItem from '../components/gallery-item';
import Modal from '../components/modal';
import Layout from '../components/layout';

export interface IGalleryItem {
    id: number;
    name: string;
    src: string;
    size: string;
    shop: boolean;
    desc: string;
    modalImage: string;
}

const Gallery = () => {
    const [selectedGalleryItemId, setSelectedGalleryItemId] = useState(0);
    const [isModalShowing, setIsModalShowing] = useState(false);
    
    const galleryData = useStaticQuery(graphql`
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
                        fluid {
                            originalName
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    `);

    const modalLimit = galleryData.data.gallery.length - 1;

    const flattendImageData = galleryData.images.nodes.reduce((acc: any, cur: any) => {
        const { originalName, ...rest } = cur.childImageSharp.fluid;
        return { [originalName]: rest, ...acc };
    }, {});

    const flattendModalImageData = galleryData.modalImages.nodes.reduce((acc: any, cur: any) => {
        const { originalName, ...rest } = cur.childImageSharp.fluid;
        return { [originalName]: rest, ...acc };
    }, {});

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
        const { modalImage, ...selectedGalleryItem } = galleryData.data.gallery[selectedGalleryItemId];
        return (
            <Layout>
                <Modal
                    selectedGalleryItem={selectedGalleryItem}
                    imgData={flattendModalImageData[modalImage]}
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
                    {galleryData.data.gallery.map((item: IGalleryItem) => (
                        <GalleryItem
                            selectGalleryItem={selectGalleryItem}
                            galleryItemData={item}
                            key={item.id}
                            imgData={flattendImageData[item.src]}
                        />
                    ))}
                </div>
            </section>
            <CallToAction />
        </Layout>
    )
}

export default Gallery