import { useState, useEffect } from 'react';

const ModalContext = ()=>{
    const [cartModal,setCartModal]=useState(false);

    const toggleCartModal = ()=>{
        setCartModal(!cartModal);
    };
    return {};
};

export {ModalContext};
