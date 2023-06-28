import React, { useState, useEffect, useRef, useContext } from 'react';
import CartLogo from '../../assets/icon-cart.svg';
import style from './CartComponent.module.css';
import Cart from '../Cart/Cart';
import { CartContext } from '../Cart/CartContext';

function CartComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

   // Вычисление общего количества товаров в корзине
   const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={style.cart_container} ref={menuRef}>
      <div className={style.cart_image} onClick={handleMenuToggle}>
        <img
          className={style.cart_icon}
          src={CartLogo}
          alt="cart"
        />
         {totalQuantity > 0 && (
          <span className={style.cart_count}>{totalQuantity}</span>
        )}
      </div>
      {isMenuOpen && (
        <div className={style.dropdown_menu}>
          <div className={style.dropdown_menu_wrapper}>
            <h2 className={style.cart_title}>Cart</h2>
          </div>
          <hr></hr>
          <div className={style.dropdown_menu_wrapper}>
            <Cart />
          </div>
        </div>
      )}
    </div>
  );
}

export default CartComponent;
