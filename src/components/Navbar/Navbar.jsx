import React, { useState, useEffect, useRef } from 'react';
import style from './Navbar.module.css';
import Logo from '../../assets/logo.svg';
import UserPic from '../../assets/image-avatar.png';
import OutlineMenu from '../../assets/icon-menu.svg';
import OutlineClose from '../../assets/icon-close.svg';
import CartComponent from './CartComponent';

function Navbar() {
    const [nav, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!nav);
    };


    return (
        <header className={style.header}>
            <div className={style.header_wrapper}>
                <div className={style.box}>
                    <div onClick={toggleNav} className={style.mobile_btn}>
                        {nav ? <img src={OutlineClose} alt="Close Icon" /> : <img src={OutlineMenu} alt="Menu Icon" />}
                    </div>

                    <div className={style.logo_image}>
                        <img src={Logo} alt="logo" />
                    </div>

                    <div onClick={toggleNav} className={`${style.overlay} ${nav ? style.overlay_active : ''}`}></div>
                    <ul className={`${style.menu} ${nav ? style.active : ''}`}>
                        <li><a className={style.menu_item} href="/men">Men</a></li>
                        <li><a className={style.menu_item} href="/collections">Collections</a></li>
                        <li><a className={style.menu_item} href="/women">Women</a></li>
                        <li><a className={style.menu_item} href="/about">About</a></li>
                        <li><a className={style.menu_item} href="/contact">Contact</a></li>
                    </ul>
                    
                    <div className={style.navbar_icons_container}>
                        <CartComponent />
                        <img className={style.user_pic} src={UserPic} alt="User Pic" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
