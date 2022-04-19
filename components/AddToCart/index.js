import react, {useState, useEffect,useRef} from "react";
import Cart from '../../public/images/icon-cart.svg';

import styles from './AddToCart.module.css';
import AddToCartManager from "./AddToCartManager";

const AddToCart = ({itemInfo})=>{
    const inputRef = useRef();

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

    return (
        <form onSubmit={submitAddToCart} className='xl:flex xl:justify-between'>
            <div className="xl:w-[40%]">
                <div className='bg-lightGrayBlue flex mb-4 xl:h-full rounded-lg py-4 xl:py-0'>
                    <div className="flex justify-center items-center w-12">
                        <button type="button" className="p-0 m-0 h-[10px] leading-[0rem] overflow-hidden text-4xl font-bold flex items-start text-orange hover:text-opacity-70" onClick={()=>{subtractQuanity()}}>
                            -
                        </button>
                    </div>
                    <div className='flex-1 flex justify-center xl:h-full'>
                        <input ref={inputRef} className='ml-4 text-lg font-bold bg-lightGrayBlue inline-block border-none focus:border-white'
                                type='number' value={quantity} readOnly/>
                    </div>
                    <div className="flex justify-center items-center w-12">
                        <button type="button" className="p-0 m-0 h-[20px] leading-[1rem] overflow-hidden text-3xl font-bold flex items-start text-orange hover:text-opacity-70" onClick={()=>{addQuantity()}}>
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className="xl:w-[55%]">
                <button type='submit' className='w-full py-4 px-10 bg-orange hover:bg-opacity-70 rounded-lg'>
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
