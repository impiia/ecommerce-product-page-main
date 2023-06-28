
import React from 'react';
import style from './Product.module.css';

const Thumbnail = ({ images, alt, onClick }) => {
  return (
    <div className={style.thumbnail_container}>
      {images.map((image, index) => (
        <img
          key={index}
          className={style.product_thumbnail}
          src={image}
          alt={`${alt} ${index}`}
          onClick={() => onClick(images[index])}
        />
      ))}
    </div>
  );
};


export default Thumbnail;
