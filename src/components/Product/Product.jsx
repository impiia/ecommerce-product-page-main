import React, { useState } from 'react';
import style from './Product.module.css';
import ProductImageFirst from '../../assets/image-product-1.jpg';
import ProductImageSecond from '../../assets/image-product-2.jpg';
import ProductImageThird from '../../assets/image-product-3.jpg';
import ProductImageFourth from '../../assets/image-product-4.jpg';
import ProductThumbnailFirst from '../../assets/image-product-1-thumbnail.jpg';
import ProductThumbnailSecond from '../../assets/image-product-2-thumbnail.jpg';
import ProductThumbnailThird from '../../assets/image-product-3-thumbnail.jpg';
import ProductThumbnailFourth from '../../assets/image-product-4-thumbnail.jpg';
import CartItem from '../Cart/CartItem';
import productsData from '../../data/products.json';
import Thumbnail from './Thumbnail';
import IconClose from '../../assets/icon-close-orange.svg';
import { useMediaQuery } from "react-responsive";

function Product() {
    const product = productsData[0];
    const [selectedImage, setSelectedImage] = useState(ProductImageFirst);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const handleThumbnailClick = (image) => {
        const selectedIndex = thumbnailImages.findIndex((thumb) => thumb === image);
        if (selectedIndex !== -1) {
            setSelectedImage(images[selectedIndex]);
        }
    };

    const isMobile = useMediaQuery({ maxWidth: 1010 });

    const openLightbox = () => {
        setIsLightboxOpen(true);
    };

    const closeLightbox = (e) => {
        if (
            e.target.classList.contains(style.close_icon) ||
            e.target.classList.contains(style.lightbox)
        ) {
            setIsLightboxOpen(false);
        }
    };

    const showPreviousImage = () => {
        const currentIndex = images.findIndex((image) => image === selectedImage);
        const previousIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[previousIndex]);
    };

    const showNextImage = () => {
        const currentIndex = images.findIndex((image) => image === selectedImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
    };



    const images = [
        ProductImageFirst,
        ProductImageSecond,
        ProductImageThird,
        ProductImageFourth
    ];

    const thumbnailImages = [
        ProductThumbnailFirst,
        ProductThumbnailSecond,
        ProductThumbnailThird,
        ProductThumbnailFourth
    ];

    return (
        <main className={style.main_wrapper}>
            <div className={style.product_grid}>
                <div className={style.product_images}>
                    {isMobile && (<button className={style.prev_button} onClick={showPreviousImage}>&lt;</button>)}
                    <img
                        className={style.product_image}
                        src={selectedImage}
                        alt="Product"
                        onClick={openLightbox}
                    />
                    {isMobile && (<button className={style.next_button} onClick={showNextImage}>&gt;</button>)}
                    <Thumbnail images={thumbnailImages} alt="Thumbnail" onClick={handleThumbnailClick} />

                </div>
                <div className={style.product_col}>
                    <CartItem
                        id={1}
                        name={product.productName}
                        description={product.description}
                        currentPrice={parseFloat(product.currentPrice).toFixed(2)}
                        discount={parseFloat(product.discount) * 100}
                        originalPrice={parseFloat(product.originalPrice).toFixed(2)}
                    />
                </div>
            </div>
            {isLightboxOpen && !isMobile && (
                <div className={style.lightbox} onClick={closeLightbox}>
                    <div className={style.lightbox_wrapper}>
                        <img src={IconClose} className={style.close_icon} onClick={closeLightbox} alt="Close" />
                        <div className={style.lightbox_image_container} >
                            <button className={style.prev_button} onClick={showPreviousImage}>&lt;</button>
                            <img className={style.lightbox_image} src={selectedImage} alt="Product" />
                            <button className={style.next_button} onClick={showNextImage}>&gt;</button>
                        </div>
                        <Thumbnail images={thumbnailImages} alt="Thumbnail" onClick={handleThumbnailClick} />
                    </div>
                </div>
            )}

        </main>
    );
}

export default Product;
