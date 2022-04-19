import { useState,useEffect } from "react";
import Image from "next/image";
import TrashIcon from '../../public/images/icon-delete.svg';
import AddToCartManager from "../AddToCart/AddToCartManager";

const Cart = ({cart}) =>{

    const {removeFromCart}=AddToCartManager();
    const [items,setItems]=useState([]);
    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('cart'))){
            setItems(JSON.parse(localStorage.getItem('cart')));
        }
    },[]);
    useEffect(()=>{
        console.log('cart updated');
        setItems(cart);
    },[cart]);

    return (
        <div className="flex justify-center md:justify-end xl:-mr-24 xl:drop-shadow-2xl">
            <div className="absolute flex flex-col mt-2 md:-mt-6 h-64 w-[23rem] xl:w-[23rem] z-[9999] bg-white rounded-3xl xl:-mt-4">
                <div className="h-14 w-full flex items-center pl-5 border-b-2">
                    <h1 className="text-base font-bold font-kumbh">Cart</h1>
                </div>
                <div className="p-6 flex-1">
                    {
                        items.length>0&&
                        <div className="flex flex-col">
                            <div className="mb-6">
                            {items&&items.map(item=>(
                                <div className="flex">
                                    <div className="mr-3">
                                        <Image className="rounded" src="/images/image-product-1-thumbnail.jpg" width={50} height={50} />
                                    </div>
                                    <div className="flex-1">
                                        <div>
                                            <div>
                                                <p className="text-base font-kumbh text-darkGrayBlue">{item.name}</p>
                                                <p className="text-base text-darkGrayBlue">${item.price}.00 x {item.quantity} <span className="font-bold text-black">${item.price*item.quantity}.00</span></p>
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
                                <button className='w-full py-5 px-10 bg-[#FF7E1B] rounded-lg hover:opacity-70'>
                                    <div className="flex justify-center">
                                        <div>
                                            <p className="text-base text-white font-bold">Checkout</p>
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