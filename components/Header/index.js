import React from 'react'
import Image from 'next/image'
import Menu from './Menu';
import Cart from './Cart';

import MenuIcon from '../../public/images/icon-menu.svg';
import CartIcon from '../../public/images/icon-cart.svg';
import Logo from '../../public/images/logo.svg';

import { CartModalContext} from '../../context/Header/Context/CartModalContext';
import { MenuContext } from '../../context/Header/Context/MenuContext';
import { CartContext } from '../../context/Header/Context/CartContext';

const Header=()=> {

    const {cartModal,setCartModal,toggleCartModal}=CartModalContext();
    const {menu,closeMenu,openMenu}=MenuContext(setCartModal);

    const {numCartItems,cart}=CartContext();

  return (
      <>
        <header className='flex justify-between py-5 px-6 xs:py-7 md:px-0 lg:border-b-2'>
            <div className='flex items-center'>
                <div className='mr-3 mt-1 xl:hidden'>
                    <MenuIcon className='hover:cursor-pointer' onClick={openMenu}  />
                </div>
                <div className='md:mr-10'>
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
                <div className='relative flex items-center base:mr-2 xs:mr-5 group' onClick={toggleCartModal}>
                    {
                        numCartItems!=0?
                        <div className='absolute font-bold text-white text-xs bg-orange rounded-full px-2 -right-4 -top-2 lg:-right-3 lg:top-1 group-hover:cursor-pointer'>
                            {numCartItems}
                        </div>
                        :<></>
                    }
                    <CartIcon className=' group-hover:cursor-pointer'/>
                </div>
                <div className='relative flex items-center rounded-full w-6 h-6 lg:w-12 lg:h-12 border-transparent border-2 hover:border-2 hover:border-orange hover:cursor-pointer'>
                    <Image src="/images/image-avatar.png" alt='image of current user profile' layout='fill'/>
                </div>
            </div>
        </header>
        {menu&&<Menu closeMenu={closeMenu}/>}
        {cartModal&&<Cart cart={cart}/>}
      </>
  )
}
export default Header;