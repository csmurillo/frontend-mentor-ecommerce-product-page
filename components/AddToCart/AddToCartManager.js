import react from "react";

const AddToCartManager = ()=>{

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
        console.log(name);
        const cart=JSON.parse(localStorage.getItem('cart'));
        console.log(cart);
        console.log('!!!!!!!!!!!!!!!!!!!!');
        const newCart=cart.filter(item=>{
            console.log(item.name+'and'+name);
            if(item.name!=name){
                console.log(item.name+'and'+name);
                return item;
            }
            return null;
        });
        console.log(cart);
        localStorage.setItem('cart',JSON.stringify(newCart));
    };
    return {
        addToCart,removeFromCart
    };
};
export default AddToCartManager;



