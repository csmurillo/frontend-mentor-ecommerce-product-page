import react from "react";

const CartManager = ()=>{

    const addToCart = (name, price, quantity)=>{
        const cart=JSON.parse(localStorage.getItem('cart'));
        // if cart is empty
        if(cart==null){
            localStorage.setItem('cart',JSON.stringify([{name,price,quantity}]));
        }
        else{
            const item = cart.find(item => item.name==name);
            // item does not exist
            if(item==undefined){
                cart.push({name,price,quantity});
                localStorage.setItem('cart',JSON.stringify(cart));
            }
            // item exist add quantity
            else{
                let newCart=cart.map(item=>{
                    if(item.name==name){
                        let newQuantity=parseInt(quantity)+parseInt(item.quantity);
                        return {name, price, quantity:newQuantity};
                    }
                    return item;
                });
                localStorage.setItem('cart',JSON.stringify(newCart));
            }
        }
    };
    const removeFromCart = (name)=>{
        const cart=JSON.parse(localStorage.getItem('cart'));
        const newCart=cart.filter(item=>{
            if(item.name!=name){
                return item;
            }
            return null;
        });
        localStorage.setItem('cart',JSON.stringify(newCart));
    };
    return {addToCart,removeFromCart};
};
export default CartManager;



