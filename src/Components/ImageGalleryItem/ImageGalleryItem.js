import React from 'react';
import s from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ keyGalItem, url, urlModal, openModal }) => {
  return (
    <>
      <li key={keyGalItem} className={s.image__gallery__item} onClick={() => openModal(urlModal)}>
        <img src={url} alt='pic' className={s.image__gallery__item__image} />
      </li>
    </>
  );
};

export default ImageGalleryItem;
