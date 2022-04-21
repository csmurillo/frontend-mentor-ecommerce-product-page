import react, {useState, useEffect,useRef} from "react";
import Cart from '../../../public/images/icon-cart.svg';

import styles from './AddToCart.module.css';
// import AddToCartManager from "./AddToCartManager";
import CartManager from "../../../utils/CartManager";
import { AddToCartContext } from "../../../context/Main/AddToCart/Context/AddToCartContext";

const AddToCart = ({itemInfo})=>{
    const inputRef = useRef();

    const {addToCart}=CartManager();

    const {quantity,submitAddToCart,addQuantity,subtractQuanity}=AddToCartContext(inputRef,itemInfo,addToCart);

    return (
        <form onSubmit={submitAddToCart} className='xl:flex xl:justify-between'>
            <div className="xl:w-[40%]">
                <div className='flex bg-lightGrayBlue rounded-lg py-4 mb-4 xl:h-full xl:py-0'>
                    <div className="flex justify-center items-center w-12">
                        <button type="button" className="font-bold text-4xl text-[#FF7E1B] flex items-start overflow-hidden p-0 m-0 h-[10px] leading-[0rem] hover:text-opacity-70" onClick={()=>{subtractQuanity()}}>
                            -
                        </button>
                    </div>
                    <div className='flex-1 flex justify-center xl:h-full'>
                        <input ref={inputRef} className='inline-block font-bold bg-lightGrayBlue border-none ml-4 text-lg focus:border-white'
                                type='number' value={quantity} readOnly/>
                    </div>
                    <div className="flex justify-center items-center w-12">
                        <button type="button" className="font-bold  text-3xl text-[#FF7E1B] flex items-start overflow-hidden p-0 m-0 h-[20px] leading-[1rem] hover:text-opacity-70" onClick={()=>{addQuantity()}}>
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className="xl:w-[55%]">
                <button type='submit' className='w-full py-4 px-10 bg-[#FF7E1B] hover:bg-opacity-70 rounded-lg'>
                    <div className="flex justify-center">
                        <div className="mr-4">
                            <Cart className={styles.addToCartIcon}/>
                        </div>
                        <div>
                            <p className="font-bold text-white">Add to cart</p>
                        </div>
                    </div>
                </button>
            </div>
        </form>
    );
};

export default AddToCart;
