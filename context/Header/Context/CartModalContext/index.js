import { useState, useEffect } from 'react';

const CartModalContext = ()=>{
    const [cartModal,setCartModal]=useState(false);

    const toggleCartModal = ()=>{
        setCartModal(!cartModal);
    };
    
    return {cartModal,setCartModal,toggleCartModal};
};

export {CartModalContext};
