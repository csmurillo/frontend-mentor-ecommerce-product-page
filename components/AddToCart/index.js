import react, {useState} from "react";
import Cart from '../../public/images/icon-cart.svg';

import styles from './AddToCart.module.css';
import AddToCartManager from "./AddToCartManager";

const AddToCart = ({itemInfo})=>{

    const {addToCart}=AddToCartManager();

    const {name,price,originalPrice}=itemInfo;

    const [quantity,setQuantity]=useState(0);
    const submitAddToCart = (e)=>{
        e.preventDefault();
        if(quantity==0){
            return;
        }

        addToCart(name,price,quantity);
        setQuantity(0);
        // if(localStorage.getItem){

        // }
        // localStorage.setItem({name,price,quantity:});
    };
    const addQuantity=()=>{
        setQuantity(quantity+1);
    };
    const subtractQuanity=()=>{
        if(quantity!=0){
            setQuantity(quantity-1);
        }
    };

    return (
        <form onSubmit={submitAddToCart}>
            <div>
                <div className='bg-lightGrayBlue flex mb-4'>
                    <div className='px-4'>
                        <button type="button" onClick={()=>{subtractQuanity()}}>
                            <p  className='text-4xl font-bold text-orange'>-</p>
                        </button>
                    </div>
                    <div className='flex-1 flex justify-center'>
                        <input className='w-8 ml-4 text-lg font-bold bg-lightGrayBlue inline-block border-none focus:border-white'
                                type='number' value={quantity} readOnly/>
                    </div>
                    <div className='px-4'>
                        <button type="button" className="text-3xl" onClick={()=>{addQuantity()}}>
                            <p  className='text-3xl font-bold text-orange'>+</p>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <button type='submit' className='w-full py-5 px-10 bg-orange rounded-lg'>
                    <div className="flex justify-center">
                        <div className="mr-4">
                            <Cart className={styles.addToCartIcon}/>
                        </div>
                        <div>
                            <p className="text-white font-bold">Add to cart</p>
                        </div>
                    </div>
                </button>
            </div>
        </form>
    );
};

export default AddToCart;