import { useState,useEffect } from "react";




const Cart = () =>{
    const [items,setItems]=useState([]);
    useEffect(()=>{
        console.log(JSON.parse(localStorage.getItem('cart')));
        setItems(...items,JSON.parse(localStorage.getItem('cart')));
        
    },[]);

    return (
        <div className="flex justify-center">
            <div className="absolute flex flex-col mt-2 h-72 w-[23rem] z-[9999] bg-white rounded-3xl">
                <div className="h-20 w-full flex items-center pl-5 border-b-2">
                    <h1 className="text-xl font-bold font-kumbh">Cart</h1>
                </div>
                <div className="p-5 flex-1">
                    {/* <div className="relative h-[100%]">
                        <div className="h-full flex justify-center items-center">
                            Your Cart is Empty
                        </div>
                    </div> */}

                    {/* <div className="h-[50%]">
                        <button className='w-full py-5 px-10 bg-orange rounded-lg'>
                            <div className="flex justify-center">
                                <div>
                                    <p className="text-white font-bold">Checkout</p>
                                </div>
                            </div>
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );

};

export default Cart;