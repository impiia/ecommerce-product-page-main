import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import style from '../Product/Product.module.css';
import IconMinus from '../../assets/icon-minus.svg';
import IconPlus from '../../assets/icon-plus.svg';
import CartIcon from '../../assets/icon-cart-w.svg'

const CartItem = ({ id, name, description, currentPrice, discount, originalPrice }) => {
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        if (quantity > 0) {
            addToCart({ id, name, description, currentPrice, discount, originalPrice, quantity });
        }
    };

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <li>
            <h2 className={style.company_title}>SNEAKER COMPANY</h2>
            <h1 className={style.company_name}>{name}</h1>
            <p className={style.product_info}>{description}</p>
            <div className={style.price_row}>
                <p className={style.current_price}>${currentPrice}</p>
                <p className={style.discount}>{discount}%</p>
            </div>
            <h4 className={style.original_price}>${originalPrice}</h4>
            <div className={style.button_row}>
                <div className={style.quantitySelector}>
                    <button className={style.decIncButton} onClick={handleDecreaseQuantity}><img src={IconMinus} alt='minus'></img></button>
                    <div className={style.quantity}>{quantity}</div>
                    <button className={style.decIncButton} onClick={handleIncreaseQuantity}><img src={IconPlus} alt='plus'></img></button>
                </div>
                <button onClick={handleAddToCart} className={style.button_add}>
                    <img className={style.cart_image} src={CartIcon} alt="Cart Icon" />
                    <span className={style.button_label}>Add to cart</span>
                </button>
            </div>
        </li>
    );
};

export default CartItem;
