import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import style from "../Navbar/ProductContainer.module.css";
import ProductPic from "../../assets/image-product-1-thumbnail.jpg";
import IconDelete from "../../assets/icon-delete.svg";

const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    const handleRemoveFromCart = (itemId, e) => {
        removeFromCart(itemId);
        e.stopPropagation();
    };

    return (
        <div>
            {cartItems.length === 0 ? (
                <div className={style.empty_cart}>
                    <p>Your's cart is empty.</p>
                </div>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <div className={style.product_container}>
                                <img
                                    className={style.product_pic}
                                    src={ProductPic}
                                    alt="Product"
                                />
                                <h3 className={style.product_name}>{item.name}</h3>

                                <button
                                    className={style.btn_delete}
                                    onClick={(e) => handleRemoveFromCart(item.id, e)}
                                >
                                    <img
                                        className={style.icon_delete}
                                        src={IconDelete}
                                        alt="Delete"
                                    />
                                </button>

                                <h3 className={style.product_price_count}>
                                    ${item.currentPrice} x {item.quantity}
                                </h3>
                                <h2 className={style.total_price}>
                                    ${parseFloat(item.currentPrice * item.quantity).toFixed(2)}
                                </h2>
                            </div>
                            <button className={style.button_checkout}>
                                <span className={style.button_label}>Checkout</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
