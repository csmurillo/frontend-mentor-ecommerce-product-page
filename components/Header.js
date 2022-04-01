import React from 'react'
import Image from 'next/image'
// import { ReactComponent as Cart } from '../public/images/icon-cart.svg';
import Menu from './Menu';
import Cart from './Cart';

import MenuIcon from '../public/images/icon-menu.svg';
import CartIcon from '../public/images/icon-cart.svg';
import Logo from '../public/images/logo.svg';
// import cart from '/image/cart.svg'

import styles from './Header.module.css';
import react ,{ useState, useEffect } from 'react';

const Header=()=> {

    const [menu,setMenu]=useState(false);
    const [numCartItems,setNumCartItems]=useState(null);
    const closeMenu = ()=>{
        setMenu(false);
    };
    const openMenu = ()=>{
        setMenu(true);
    };

    useEffect(()=>{
        
        var originalSetItem = localStorage.setItem; 
        localStorage.setItem = function () {
            const event = new Event('cartItemInserted');
            originalSetItem.apply(this, arguments);
            document.dispatchEvent(event);
        }
        const cartItemListener = ()=> {
            const cart=JSON.parse(localStorage.getItem('cart'));
            let cartItems = 0;
            if(cart){
                for(let i=0; i<cart.length;i++){
                    // console.log(cart[i].itemInfo.quantity);
                    cartItems=parseInt(cartItems)+parseInt(cart[i].itemInfo.quantity);
                }
            }
            setNumCartItems(cartItems);
        };

        cartItemListener();
          
        document.addEventListener("cartItemInserted", cartItemListener);

    },[]);

  return (
      <>
        <header className='flex p-5 justify-between'>
            <div className='flex'>
                <div className='mr-3 flex items-center'>
                    <MenuIcon onClick={openMenu} />
                </div>
                <div className=''>
                    <Logo />
                </div>
            </div>
            <div className='flex'>
                <div className='relative flex items-center mr-8'>
                    <div className='absolute -right-3 -top-2 bg-orange text-white text-xs px-2 rounded-full font-bold'>{numCartItems}</div>
                    <CartIcon className={styles.cart} fill={'red'}/>
                </div>
                <div className='flex items-center'>
                    <Image src="/images/image-avatar.png" height={25} width={25}/>
                </div>
            </div>
        </header>
        {menu&&<Menu closeMenu={closeMenu}/>}
        <Cart/>
      </>
  )
}
export default Header;