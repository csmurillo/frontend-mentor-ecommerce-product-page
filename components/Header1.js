import React from 'react'
import Image from 'next/image'
import Menu from './Menu';
import Cart from './Cart';

import MenuIcon from '../public/images/icon-menu.svg';
import CartIcon from '../public/images/icon-cart.svg';
import Logo from '../public/images/logo.svg';
// import cart from '/image/cart.svg'

import styles from './Header.module.css';
import react ,{ useState, useEffect, useRef } from 'react';

const Header=()=> {
    const [menu,setMenu]=useState(false);
    const [cartModal,setCartModal]=useState(false);
    const [numCartItems,setNumCartItems]=useState(null);
    const [cart,setCart]=useState(false);
    const closeMenu = ()=>{
        setMenu(false);
    };
    const openMenu = ()=>{
        setMenu(true);
        setCartModal(false);
    };
    const toggleCartModal = ()=>{
        setCartModal(!cartModal);
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
                    cartItems=parseInt(cartItems)+parseInt(cart[i].quantity);
                }
            }
            setNumCartItems(cartItems);
            setCart(cart);
        };

        cartItemListener();
          
        document.addEventListener("cartItemInserted", cartItemListener);
        // document.onclick=(e)=>{
        //     console.log(e);
        // };
    },[]);

  return (
      <>
        <header className='flex xs:py-7 justify-between lg:border-b-2 md:px-0 py-5 px-6 xs:mx-0'>
            <div className='flex items-center'>
                <div className='mr-3 xl:hidden mt-1'>
                    <MenuIcon className='hover:cursor-pointer' onClick={openMenu}  />
                </div>
                <div className=' md:mr-10'>
                    <Logo />
                </div>
                <div className='hidden xl:block'>
                    <ul className='flex'>
                        <li className='mx-5 relative'>
                            <p className='highlight hover:cursor-pointer text-base'>Collection</p>
                        </li>
                        <li className='mx-5 relative'>
                            <p className='highlight hover:cursor-pointer text-base'>Men</p>
                        </li>
                        <li className='mx-5 relative'>
                            <p className='highlight hover:cursor-pointer text-base'>Women</p>
                        </li>
                        <li className='mx-5 relative'>
                            <p className='highlight hover:cursor-pointer text-base'>About</p>
                        </li>
                        <li className='mx-5 relative'>
                            <p className='highlight hover:cursor-pointer text-base'>Contact</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex'>
                <div className='relative flex items-center mr-8 group' onClick={toggleCartModal}>
                    {
                        numCartItems!=0?
                        <div className='absolute lg:-right-3 lg:top-1 -right-4 -top-2 bg-orange text-white text-xs px-2 rounded-full font-bold group-hover:cursor-pointer'>{numCartItems}</div>
                        :<></>
                    }
                    <CartIcon className={styles.cart+' group-hover:cursor-pointer'}/>
                </div>
                <div className='relative flex items-center border-transparent border-2 hover:cursor-pointer hover:border-2 hover:border-orange rounded-full lg:w-12 lg:h-12 w-6 h-6'>
                    <Image className='' src="/images/image-avatar.png" layout='fill'/>
                </div>
            </div>
        </header>
        {menu&&<Menu closeMenu={closeMenu}/>}
        {cartModal&&<Cart cart={cart}/>}
      </>
  )
}
export default Header;