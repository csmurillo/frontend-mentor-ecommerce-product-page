import react from "react";

const AddToCartManager = ()=>{

    const addToCart = (name, price, quantity)=>{
        const cartItem=localStorage.getItem('cart');
        // if cart is empty
        if(cartItem==null){
            localStorage.setItem('cart',JSON.stringify([{key:name,itemInfo:{name,price,quantity}}]));
        }
        else{
            // console.log(typeof cartItem);
            // console.log(JSON.parse(cartItem));
            var cartMap = new Map(JSON.parse(cartItem).map(i => [i.key, i.itemInfo]));
            console.log(cartMap.get(''+name));
            console.log(cartMap);
            console.log('---------------!!!');
            // if item does not exist in cart
            if(cartMap.get(name)==null){
                let cartArr = Array.from(cartMap, ([key, itemInfo]) => ({ key, itemInfo }));
                cartArr.push({key:name,itemInfo:{name,price,quantity}});
                localStorage.setItem('cart',JSON.stringify(cartArr));
            }
            // if item exist in the cart just add quanitity
            else{
                // console.log('exist in the cart');
                const item=cartMap.get(''+name);
                // console.log(item.quantity);
                const newQuantity=parseInt(item.quantity)+parseInt(quantity);
                // console.log(parseInt(quantity)+':'+parseInt(item.quantity));
                cartMap.set(name,{name,price,quantity:newQuantity});

                console.log('-----!');
                console.log(cartMap.get(''+name));
                
                console.log(cartMap);
                console.log('-----!');
                let cartArr = Array.from(cartMap, ([key, itemInfo]) => ({ key, itemInfo }));
                localStorage.setItem('cart',JSON.stringify(cartArr));
                // console.log(cartItem);
            }
            // console.log(cartMap.get(''+name));
            // console.log('-----');
            // console.log(cartMap);
            // console.log(cartItem);
        }

    };

    return {
        addToCart
    };
};
export default AddToCartManager;