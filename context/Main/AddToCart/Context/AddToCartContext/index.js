import { useState, useEffect } from 'react';

const AddToCartContext = (inputRef,itemInfo,addToCart)=>{
    const {name,price,originalPrice}=itemInfo;
    const [quantity,setQuantity]=useState(0);

    const submitAddToCart = (e)=>{
        e.preventDefault();
        if(quantity==0){
            return;
        }

        addToCart(name,price,quantity);
        setQuantity(0);
    };
    const addQuantity=()=>{
        console.log('add');
        setQuantity(quantity+1);
    };
    const subtractQuanity=()=>{
        console.log('sub');
        if(quantity!=0){
            setQuantity(quantity-1);
        }
    };
    useEffect(()=>{
        inputRef.current.style.width=2.4*parseInt(inputRef.current.value.length)+'ch';
    },[quantity]);
    return {quantity,submitAddToCart,addQuantity,subtractQuanity};
};

export {AddToCartContext};
