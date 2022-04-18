import Slider from "react-slick";
import Image from "next/image";
import React, { useRef,useState, useEffect } from 'react';


const DesktopSlider = ({openModal}) =>{
        const [currentSlide,setCurrentSlide]=useState(0);
        const slickSliderRef = useRef();

        const switchToImageIndex= (i)=>{
            slickSliderRef.current.slickGoTo(i);
            setCurrentSlide(i);
        };
        const onSwipeEnd = (sliderPos)=>{
            setCurrentSlide(sliderPos);
            slickSliderRef.current.slickGoTo(sliderPos+1);
        };
        const nextImage=()=>{
            if(currentSlide==3){
                setCurrentSlide(0);
            }
            else{
                setCurrentSlide(currentSlide+1);
            }
        };
        const prevImage=()=>{
            if(currentSlide==0){
                setCurrentSlide(3);
            }
            else{
                setCurrentSlide(currentSlide-1);
            }
        };
        useEffect(()=>{
            slickSliderRef.current.slickGoTo(currentSlide);
        },[currentSlide]);


        var settings = {
            dots: false,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable:false
            };
         

          return (
            <div className="xl:w-[80%]">
                    <div>
                        <Slider ref={slickSliderRef} className="relative w-full md:w-[100%]" {...settings} 
                                afterChange={(i)=>{onSwipeEnd(i);}}
                        >
                            <div className="border">
                                <div className='relative w-full md:w-[100%] h-96 hover:cursor-pointer'>
                                    <Image src="/images/image-product-1.jpg" layout="fill" onClick={openModal}/>
                                </div>
                            </div>
                            <div>
                                <div className='relative w-full md:w-[100%] h-96 hover:cursor-pointer'>
                                    <Image src="/images/image-product-2.jpg" layout="fill" onClick={openModal}/>
                                </div>
                            </div>
                            <div>
                                <div className='relative w-full md:w-[100%] h-96 hover:cursor-pointer'>
                                    <Image src="/images/image-product-3.jpg" layout="fill" onClick={openModal}/>
                                </div>
                            </div>
                            <div>
                                <div className='relative w-full md:w-[100%] h-96 hover:cursor-pointer'>
                                    <Image src="/images/image-product-4.jpg" layout="fill" onClick={openModal}/>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div>
                        <div className="hidden md:inline-block relative w-[100%]">
                            <div className="flex w-full gap-4">
                                <div className="w-[25%] group">
                                    <div className={"relative w-[100%] h-20 hover:cursor-pointer rounded-xl "+(currentSlide==0?'border-2 border-[#FF7E1B]':'')} onClick={()=>{switchToImageIndex(0)}}>
                                        <Image className={"rounded-lg group-hover:opacity-50 "+(currentSlide==0?'opacity-50':'')} src="/images/image-product-1-thumbnail.jpg" layout="fill"/>
                                    </div>
                                </div>
                                <div className="w-[25%] group">
                                    <div className={"relative w-[100%] h-20 hover:cursor-pointer rounded-xl "+(currentSlide==1?'border-2 border-[#FF7E1B]':'')} onClick={()=>{switchToImageIndex(1)}}>
                                        <Image className={"rounded-lg group-hover:opacity-50 "+(currentSlide==1?'opacity-50':'')} src="/images/image-product-2-thumbnail.jpg" layout="fill"/>
                                    </div>
                                </div>
                                <div className="w-[25%] group">
                                    <div className={"relative w-[100%] h-20 hover:cursor-pointer rounded-xl "+(currentSlide==2?'border-2 border-[#FF7E1B]':'')} onClick={()=>{switchToImageIndex(2)}}>
                                        <Image className={"rounded-lg group-hover:opacity-50 "+(currentSlide==2?'opacity-50':'')} src="/images/image-product-3-thumbnail.jpg" layout="fill"/>
                                    </div>
                                </div>
                                <div className="w-[25%] group">
                                    <div className={"relative w-[100%] h-20 hover:cursor-pointer rounded-xl "+(currentSlide==3?'border-2 border-[#FF7E1B]':'')} onClick={()=>{switchToImageIndex(3)}}>
                                        <Image className={"rounded-lg group-hover:opacity-50 "+(currentSlide==3?'opacity-50':'')} src="/images/image-product-4-thumbnail.jpg" layout="fill"/>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
            </div>
          );
    
};

export default DesktopSlider;