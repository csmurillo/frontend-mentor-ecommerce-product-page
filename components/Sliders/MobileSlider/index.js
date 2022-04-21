import Slider from "react-slick";
import Image from "next/image";
import React, { useRef,useState, useEffect } from 'react';
// import { SliderContext } from "../../../context/SliderContext";


const MobileSlider = ({type,currentSlide,onSwipeEnd,nextImage,prevImage}) =>{

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
                <div className='absolute z-50 p-3 pr-4 top-[40%] left-[4%] border-2 rounded-[50%] flex justify-center items-center hover:cursor-pointer bg-white '
                                onClick={()=>{prevImage(); slickSliderRef.current.slickGoTo(currentSlide); }}>
                    <Image src='/images/icon-previous.svg' alt='left arrow' width={14} height={15}/>
                </div>
            );
          }
          function NextArrow(props) {
            const { className, style, onClick } = props;
            return (
            <div className='absolute z-50 p-3 pl-4 top-[40%] right-[4%] border-2 rounded-[50%] flex justify-center items-center hover:cursor-pointer bg-white'
                            onClick={()=>{ nextImage(); slickSliderRef.current.slickGoTo(currentSlide);}}>
                  <Image src='/images/icon-next.svg' alt="right arrow" width={14} height={15}/>
              </div>
            );
          }

          return (
            <div>
                    <div>
                        <Slider ref={slickSliderRef} className="relative w-full" {...settings} 
                                afterChange={(i)=>{onSwipeEnd(slickSliderRef,i);}}
                        >
                            <div className="border">
                                <div className='relative w-full h-80 '>
                                    <Image src="/images/image-product-1.jpg" alt="Beige with white shoe being showcased with an orange background" layout="fill"/>
                                </div>
                            </div>
                            <div>
                                <div className='relative w-full h-80 '>
                                    <Image src="/images/image-product-2.jpg" alt="Beige with white shoe being showcased with a branch for decoration and has an orange background" layout="fill"/>
                                </div>
                            </div>
                            <div>
                                <div className='relative w-full h-80 '>
                                    <Image src="/images/image-product-3.jpg" alt="Beige with white shoe being showcased with two rocks underneath for decoration and has an orange background" layout="fill"/>
                                </div>
                            </div>
                            <div>
                                <div className='relative w-full h-80 '>
                                    <Image src="/images/image-product-4.jpg" alt="Beige with white shoe being showcased with two rocks underneath for decoration, with the outer side of the shoe being completely shown to user and has an orange background" layout="fill"/>
                                </div>
                            </div>
                        </Slider>
                    </div>
            </div>
          );
    
};

export default MobileSlider;