import React from 'react';
import PropTypes from 'prop-types'
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
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      urlModal: PropTypes.string.isRequired,
    }),
  ).isRequired
}

export default ImageGallery;
