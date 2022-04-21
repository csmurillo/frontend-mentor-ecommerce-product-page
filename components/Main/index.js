import AddToCart from './AddToCart';
import react, { useState } from 'react';

import styles from './Main.module.css';
import DesktopSlider from '../Sliders/DesktopSlider';
import MobileSlider from '../Sliders/MobileSlider';
import ModalSlider from '../Sliders/ModalSlider';
import { SliderContext } from '../../context/SliderContext';
import { SliderModalContext } from '../../context/SliderModalContext';

const Main = ()=>{

    const {currentSlide,switchToImageIndex,onSwipeEnd,nextImage,prevImage}=SliderContext();
    const {modal, openModal, closeModal}=SliderModalContext();
    
    // get item info
    const [itemInfo,setItemInfo]=useState({
        name:'Fall Limited Edition Sneakers',
        description:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        originalPrice:250,
        price:125
    });
    const {name,description,originalPrice,price}=itemInfo;
    
    return(
        <>
            {/* slider modal */}
            {modal&&
                <div className='hidden md:block'>
                    <ModalSlider currentSlide={currentSlide} switchToImageIndex={switchToImageIndex} onSwipeEnd={onSwipeEnd} nextImage={nextImage} prevImage={prevImage} closeModal={closeModal}/>    
                </div>
            }
            <main className={styles.xlGrid+' flex-1 xl:pb-32 xl:pt-20 xl:px-10'}>
                <div className={styles.xlShoe}>
                    <div className='block md:hidden'>
                        <MobileSlider currentSlide={currentSlide} onSwipeEnd={onSwipeEnd} nextImage={nextImage} prevImage={prevImage} type='mobile'/>
                    </div>
                    <div className='hidden md:block'>
                        <DesktopSlider currentSlide={currentSlide} switchToImageIndex={switchToImageIndex} onSwipeEnd={onSwipeEnd} nextImage={nextImage} prevImage={prevImage} openModal={openModal}/>
                    </div>
                </div>
                <div className={styles.xlShoeDetails+' flex items-center'}>
                    <section className='pb-20 pt-6 px-6 xl:py-3 xl:px-5'>
                        <div className='mb-4 xs:mb-6'>
                            <h2 className='font-kumbh font-bold uppercase tracking-wide text-[#FF7E1B] text-sm opacity-80 leading-4'>Sneaker Company</h2>
                        </div>
                        <div className='mb-5'>
                            <h1 className='font-kumbh font-bold text-3xl md:text-5xl'>{name}</h1>
                        </div>
                        <div className='mb-5'>
                            <p className='font-kumbh font-normal text-base text-darkGrayBlue leading-7'>
                                {description}
                            </p>
                        </div>
                        <div className='flex justify-between mb-5 xl:block'>
                            <div className='flex'>
                                <div className='mr-5'>
                                    <p className='font-kumbh font-bold text-3xl'>${price}.00</p>
                                </div>
                                <div className='flex justify-end items-center'>
                                    <p className='font-kumbh font-bold text-base text-[#FF7E1B] bg-paleOrange rounded-lg opacity-80 py-[1px] px-2'>50%</p>
                                </div>
                            </div>
                            <div className='flex justify-end items-center xl:justify-start'>
                                <p className='font-bold text-base line-through text-grayBlue'>
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