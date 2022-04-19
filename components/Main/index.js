// import SlickSlider from '../Slider';
import Image from 'next/image'
import AddToCart from '../AddToCart';
import react, { useState } from 'react';

import styles from './Main.module.css';
import DesktopSlider from '../Sliders/DesktopSlider';
import MobileSlider from '../Sliders/MobileSlider';
import ModalSlider from '../Sliders/ModalSlider';
import { SliderContext } from '../../context/SliderContext';

const Main = ()=>{
    const {currentSlide,switchToImageIndex,onSwipeEnd,nextImage,prevImage}=SliderContext();
    const [modal,setModal]=useState(false);
    // get item info
    const [itemInfo,setItemInfo]=useState({
        name:'Fall Limited Edition Sneakers',
        description:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        originalPrice:250,
        price:125
    });
    const {name,description,originalPrice,price}=itemInfo;
    
    const openModal = ()=>{
        setModal(true);
    };
    const closeModal = ()=>{
        setModal(false);
    };

    return(
        <>
            {/* slider modal */}
            {modal&&
                <div className='hidden md:block'>
                    <ModalSlider currentSlide={currentSlide} switchToImageIndex={switchToImageIndex} onSwipeEnd={onSwipeEnd} nextImage={nextImage} prevImage={prevImage} closeModal={closeModal}/>    
                </div>
            }
            <main className={styles.xlGrid+' flex-1 xl:pb-32 xl:pt-20 xl:px-10'}>
                {/* <SlickSlider/> */}
                <div className={styles.xlShoe}>
                    <div className='block md:hidden'>
                        <MobileSlider currentSlide={currentSlide} onSwipeEnd={onSwipeEnd} nextImage={nextImage} prevImage={prevImage} type='mobile'/>
                    </div>
                    <div className='hidden md:block'>
                        <DesktopSlider currentSlide={currentSlide} switchToImageIndex={switchToImageIndex} onSwipeEnd={onSwipeEnd} nextImage={nextImage} prevImage={prevImage} openModal={openModal}/>
                    </div>
                </div>
                <div className={styles.xlShoeDetails+' flex items-center'}>
                    <section className='xl:py-3 xl:px-5 pb-20 pt-6 px-6'>
                        <div className='xs:mb-6 mb-4'>
                            <h2 className='text-sm tracking-wide font-kumbh font-bold uppercase text-[#FF7E1B] opacity-80 leading-4'>Sneaker Company</h2>
                        </div>
                        <div className='mb-5'>
                            <h1 className='md:text-5xl text-3xl font-kumbh font-bold'>{name}</h1>
                        </div>
                        <div className='mb-5'>
                            <p className='text-darkGrayBlue leading-7 text-base	font-kumbh font-normal'>
                                {description}
                            </p>
                        </div>
                        <div className='flex justify-between mb-5 xl:block'>
                            <div className='flex'>
                                <div className='mr-5'>
                                    <p className='text-3xl font-kumbh font-bold'>${price}.00</p>
                                </div>
                                <div className='flex justify-end items-center'>
                                    <p className='py-[1px] px-2 bg-paleOrange rounded-lg text-base text-orange opacity-80 font-bold font-kumbh'>50%</p>
                                </div>
                            </div>
                            <div className='flex justify-end items-center xl:justify-start'>
                                <p className='line-through text-grayBlue font-bold text-base'>
                                    ${originalPrice}.00
                                </p>
                            </div>
                        </div>
                        <AddToCart itemInfo={itemInfo}/>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Main;