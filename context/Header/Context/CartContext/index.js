import { useState, useEffect } from 'react';

const CartContext = ()=>{
    const [numCartItems,setNumCartItems]=useState(null);
    const [cart,setCart]=useState(false);

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
                    cartItems=parseInt(cartItems)+parseInt(cart[i].quantity);
                }
            }
            setNumCartItems(cartItems);
            setCart(cart);
        };

        cartItemListener();
          
        document.addEventListener("cartItemInserted", cartItemListener);
    },[]);
    
    return {numCartItems,cart};
};

export {CartContext};
