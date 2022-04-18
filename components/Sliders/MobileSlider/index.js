import Slider from "react-slick";
import Image from "next/image";
import React, { useRef,useState, useEffect } from 'react';


const MobileSlider = ({type}) =>{
        const [currentSlide,setCurrentSlide]=useState(0);
        const slickSliderRef = useRef();

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
            speed: 400,
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
                    <Image src='/images/icon-previous.svg' width={14} height={15}/>
                </div>
            );
          }
          function NextArrow(props) {
            const { className, style, onClick } = props;
            return (
            <div className='absolute z-50 p-3 pl-4 top-[40%] right-[4%] border-2 rounded-[50%] flex justify-center items-center hover:cursor-pointer bg-white'
                            onClick={()=>{ nextImage(); slickSliderRef.current.slickGoTo(currentSlide);}}>
                  <Image src='/images/icon-next.svg' width={14} height={15}/>
              </div>
            );
          }

          return (
            <div>
                    <div>
                        <Slider ref={slickSliderRef} className="relative w-full" {...settings} 
                                afterChange={(i)=>{onSwipeEnd(i);}}
                        >
                            <div className="border">
                                <div className='relative w-full h-96 '>
                                    <Image src="/images/image-product-1.jpg" layout="fill"/>
                                </div>
                            </div>
                            <div>
                                <div className='relative w-full h-96 '>
                                    <Image src="/images/image-product-2.jpg" layout="fill"/>
                                </div>
                            </div>
                            <div>
                                <div className='relative w-full h-96 '>
                                    <Image src="/images/image-product-3.jpg" layout="fill"/>
                                </div>
                            </div>
                            <div>
                                <div className='relative w-full h-96 '>
                                    <Image src="/images/image-product-4.jpg" layout="fill"/>
                                </div>
                            </div>
                        </Slider>
                    </div>
            </div>
          );
    
};

export default MobileSlider;