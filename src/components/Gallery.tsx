import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import CallToAction from './CallToAction';
import Modal from './Modal';
import { galleryData } from '../globals/galleryData';

import imageImport from '../helpers/imageImport';

interface GalleryState {
    selectedGalleryItemId: number;
    isModalShowing: boolean;
}

const images = imageImport(require.context('../images/thumbs', false, /\.jpg$/)) as { [key: string]: string };

class Gallery extends Component<{}, GalleryState> {
    state = {
        selectedGalleryItemId: 0,
        isModalShowing: false,
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    selectGalleryItem = (id: number) => {
        this.setState({ selectedGalleryItemId: id, isModalShowing: true })
    }

    modalHandler = (command: string): void => {
        let { selectedGalleryItemId } = this.state;
        switch (command) {
            case "next":
                this.setState({ selectedGalleryItemId: selectedGalleryItemId + 1 });
                break;
            case "prev":
                this.setState({ selectedGalleryItemId: selectedGalleryItemId - 1 });
                break;
            default:
                this.setState({ isModalShowing: false });
                break;
        }
    }

    render() {
        const { isModalShowing, selectedGalleryItemId } = this.state;

        if (isModalShowing) {
            return (
                <Modal
                    selectedGalleryItemId={selectedGalleryItemId}
                    modalHandler={this.modalHandler}
                    modalLimit={galleryData.length - 1}
                /> 
            )
        }

        return (
            <div>
                <section className="gallery">
                    <div className="gallery-grid">
                        {galleryData.map(item => (
                            <GalleryItem
                                selectGalleryItem={this.selectGalleryItem}
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
}

export default Gallery