import SlickSlider from '../Slider';
import Image from 'next/image'
import AddToCart from '../AddToCart';
import react, { useState } from 'react';


const Main = ()=>{
    // get item info
    const [itemInfo,setItemInfo]=useState({
        name:'Fall Limited Edition Sneakers',
        description:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        originalPrice:250,
        price:125
    });
    const {name,description,originalPrice,price}=itemInfo;
    
    return(
        <main className="">
            {/* <SlickSlider/> */}
            <div>
                <div className='block md:hidden'>
                    <SlickSlider type='mobile'/>
                </div>
                <div className='hidden md:block'>
                    <SlickSlider type='desktop'/>
                </div>
            </div>
            <div>
                <section className='py-3 px-5'>
                    <div className='mb-3'>
                        <h2 className='text-sm tracking-wide font-kumbh font-bold uppercase text-orange opacity-80'>Sneaker Company</h2>
                    </div>
                    <div className='mb-5'>
                        <h1 className='text-3xl font-kumbh font-bold'>{name}</h1>
                    </div>
                    <div className='mb-5'>
                        <p className='text-darkGrayBlue'>
                            {description}
                        </p>
                    </div>
                    <div className='flex justify-between mb-5'>
                        <div className='flex'>
                            <div className='mr-5'>
                                <p className='text-3xl font-kumbh font-bold'>${price}.00</p>
                            </div>
                            <div className='flex justify-end items-center'>
                                <p className='py-[1px] px-2 bg-paleOrange rounded-lg text-1xl text-orange opacity-80 font-bold font-kumbh'>50%</p>
                            </div>
                        </div>
                        <div className='flex justify-end items-center'>
                            <p className='line-through text-grayBlue font-bold'>
                                ${originalPrice}.00
                            </p>
                        </div>
                    </div>
                    <AddToCart itemInfo={itemInfo}/>
                </section>
            </div>
        </main>
    );
};

export default Main;