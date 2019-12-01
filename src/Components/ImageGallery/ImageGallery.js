import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import s from './ImageGallery.module.css'


const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.image__gallery}>
      {images.map(
        el => (
          <ImageGalleryItem openModal={openModal} key={el.id} url={el.webformatURL} urlModal={el.largeImageURL} keyGalItem={el.id} />
        )
      )}
    </ul>
  );
};

export default ImageGallery;
