import Slider from "react-slick";
import Image from "next/image";
import React, { useRef,useState, useEffect } from 'react';
import styles from './ModalSlider.module.css';
import CloseIcon from '../../../public/images/icon-close.svg';
import PrevIcon from '../../../public/images/icon-previous.svg';
import NextIcon from '../../../public/images/icon-next.svg';


const ModalSlider = ({closeModal,currentSlide,switchToImageIndex,onSwipeEnd,nextImage,prevImage}) =>{

        const slickSliderRef = useRef();

        useEffect(()=>{
            slickSliderRef.current.slickGoTo(currentSlide);
        },[currentSlide]);
        

        var settings = {
            dots: false,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />
        };

        function PrevArrow(props) {
            const { className, style, onClick } = props;
            return (
                <button type="button" className='absolute z-50 p-3 pr-4 top-[40%] -left-[5%] border-2 rounded-[50%] flex justify-center items-center hover:cursor-pointer bg-white '
                                onClick={()=>{prevImage(); }}>
                    <PrevIcon className={styles.prevIcon} />
                </button>
            );
          }
          function NextArrow(props) {
            const { className, style, onClick } = props;
            return (
            <button type="button" className='absolute z-50 p-3 pl-4 top-[40%] -right-[5%] border-2 rounded-[50%] flex justify-center items-center hover:cursor-pointer bg-white'
                            onClick={()=>{ nextImage();}}>
                  <NextIcon className={styles.nextIcon}/>
              </button>
            );
          }

          return (
            <div className={'absolute top-0 left-0 w-full h-full z-[9999] flex justify-center'}>
                <div className='absolute h-full w-full xl:bg-black xl:opacity-80'></div>
                <div className='w-[550px] h-96 mt-[6%]'>
                    <div className='hidden xl:block'>
                        <div className="w-100 ">
                            <div>
                                <div className='relative flex justify-end hover:cursor-pointer'>
                                    <CloseIcon className={styles.closeIcon+' closeIconGray absolute -top-8 hover:cursor-pointer'} onClick={closeModal}/>
                                </div>
                                <Slider ref={slickSliderRef} className="relative w-full" {...settings} 
                                        afterChange={(i)=>{onSwipeEnd(slickSliderRef,i);}}
                                >
                                    <div>
                                        <div className='relative w-full md:w-[100%] h-[550px] '>
                                            <Image className="rounded-2xl" src="/images/image-product-1.jpg" alt="Beige with white shoe being showcased with an orange background" layout="fill"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='relative w-full md:w-[100%] h-[550px] '>
                                            <Image className="rounded-2xl" src="/images/image-product-2.jpg" alt="Beige with white shoe being showcased with a branch for decoration and has an orange background" layout="fill"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='relative w-full md:w-[100%] h-[550px] '>
                                            <Image className="rounded-2xl" src="/images/image-product-3.jpg" alt="Beige with white shoe being showcased with two rocks underneath for decoration and has an orange background" layout="fill"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='relative w-full md:w-[100%] h-[550px] '>
                                            <Image className="rounded-2xl" src="/images/image-product-4.jpg" alt="Beige with white shoe being showcased with two rocks underneath for decoration, with the outer side of the shoe being completely shown to user and has an orange background" layout="fill"/>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <div>
                                <div className="hidden md:inline-block relative w-[100%] pt-8 px-10">
                                    <div className="flex w-full gap-4">
                                        <div className="w-[25%] group">
                                            <div className={"relative w-[100%] bg-white h-[88px] hover:cursor-pointer rounded-lg "+(currentSlide==0?'border-2 border-[#FF7E1B]':'')} onClick={()=>{switchToImageIndex(slickSliderRef,0)}}>
                                                <Image className={"group-hover:opacity-50 "+(currentSlide==0?'opacity-50 rounded-lg':'rounded-lg')} src="/images/image-product-1-thumbnail.jpg" alt="Beige with white shoe being showcased with an orange background" layout="fill"/>
                                            </div>
                                        </div>
                                        <div className="w-[25%] group">
                                            <div className={"relative w-[100%] bg-white h-[88px] hover:cursor-pointer rounded-lg "+(currentSlide==1?'border-2 border-[#FF7E1B]':'')} onClick={()=>{switchToImageIndex(slickSliderRef,1)}}>
                                                <Image className={"group-hover:opacity-50 "+(currentSlide==1?'opacity-50 rounded-lg':'rounded-lg')} src="/images/image-product-2-thumbnail.jpg" alt="Beige with white shoe being showcased with a branch for decoration and has an orange background" layout="fill"/>
                                            </div>
                                        </div>
                                        <div className="w-[25%] group">
                                            <div className={"relative w-[100%] bg-white h-[88px] hover:cursor-pointer rounded-lg "+(currentSlide==2?'border-2 border-[#FF7E1B]':'')} onClick={()=>{switchToImageIndex(slickSliderRef,2)}}>
                                                <Image className={"group-hover:opacity-50 "+(currentSlide==2?'opacity-50 rounded-lg':'rounded-lg')} src="/images/image-product-3-thumbnail.jpg" alt="Beige with white shoe being showcased with two rocks underneath for decoration and has an orange background" layout="fill"/>
                                            </div>
                                        </div>
                                        <div className="w-[25%] group">
                                            <div className={"relative w-[100%] bg-white h-[88px] hover:cursor-pointer rounded-lg "+(currentSlide==3?'border-2 border-[#FF7E1B]':'')} onClick={()=>{switchToImageIndex(slickSliderRef,3)}}>
                                                <Image className={"group-hover:opacity-50 "+(currentSlide==3?'opacity-50 rounded-lg':'rounded-lg')} src="/images/image-product-4-thumbnail.jpg" alt="Beige with white shoe being showcased with two rocks underneath for decoration, with the outer side of the shoe being completely shown to user and has an orange background" layout="fill"/>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                   </div> 
                </div>
            </div>
          );
    
};

export default ModalSlider;