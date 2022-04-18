import { useState,useEffect } from "react";
import Image from "next/image";
import TrashIcon from '../../public/images/icon-delete.svg';
import AddToCartManager from "../AddToCart/AddToCartManager";

const Cart = ({cart}) =>{
    const {removeFromCart}=AddToCartManager();
    const [items,setItems]=useState([]);
    useEffect(()=>{
        console.log('cart loaded!!!');
        // console.log(JSON.parse(localStorage.getItem('cart')));
        if(JSON.parse(localStorage.getItem('cart'))){
            setItems(JSON.parse(localStorage.getItem('cart')));
        }
        // setItems(JSON.parse(localStorage.getItem('cart')));
        // setItems(...items,JSON.parse(localStorage.getItem('cart')));
        
    },[]);
    useEffect(()=>{
        console.log('cart updated');
        setItems(cart);
        // if(JSON.parse(localStorage.getItem('cart'))){
            // setItems(JSON.parse(localStorage.getItem('cart')));
        // }
    },[cart]);

    return (
        <div className="flex justify-center xl:justify-end xl:drop-shadow-2xl">
            <div className="absolute flex flex-col mt-2 h-72 w-[90%] max-w-[28rem] md:w-[23rem] z-[9999] bg-white rounded-3xl xl:-mt-4">
                <div className="h-20 w-full flex items-center pl-5 border-b-2">
                    <h1 className="text-xl font-bold font-kumbh">Cart</h1>
                </div>
                <div className="p-5 flex-1">
                    {
                        items.length>0&&
                        <div>
                            <div className="mb-5">
                            {items&&items.map(item=>(
                                <div className="flex">
                                    <div className="mr-3">
                                        <Image className="rounded" src="/images/image-product-1-thumbnail.jpg" width={50} height={50} />
                                    </div>
                                    <div className="flex-1">
                                        <div>
                                            <div>
                                                <p className="text-md font-kumbh text-darkGrayBlue">{item.name}</p>
                                                <p className="text-md text-darkGrayBlue">${item.price}.00 x {item.quantity} <span className="font-bold text-black">${item.price*item.quantity}.00</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <TrashIcon className="hover:cursor-pointer" onClick={()=>{removeFromCart(item.name)}}/>
                                    </div>
                                </div>
                            ))}
                            </div>
                            <div className="">
                                <button className='w-full py-5 px-10 bg-orange rounded-lg'>
                                    <div className="flex justify-center">
                                        <div>
                                            <p className="text-white font-bold">Checkout</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                    </div>
                    }
                    {
                        items.length<=0&&<div className="relative h-[100%]">
                        <div className="h-full flex justify-center items-center">
                            <p className="font-bold font-kumbh text-darkGrayBlue text-sm">Your Cart is Empty</p>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );

};

export default Cart;