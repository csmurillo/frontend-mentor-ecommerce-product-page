import { useState, useEffect } from 'react';

const CartContext = (cart)=>{
    const [items,setItems]=useState([]);

    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('cart'))){
            setItems(JSON.parse(localStorage.getItem('cart')));
        }
    },[]);

    useEffect(()=>{
        setItems(cart);
    },[cart]);

    return {items};
};

export { CartContext };

