import Slider from "react-slick";
import Image from "next/image";
import React, { useRef,useState, useEffect } from 'react';


const SlickSlider = ({type}) =>{
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
            console.log('next image is being');
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

        if(type=='desktop'){
            console.log('desktop');
            var settings = {
                dots: false,
                infinite: true,
                speed: 100,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: <PrevArrow />,
                nextArrow: <NextArrow />
              };
          }
          else if(type=='mobile'){
            console.log('mobile from where');
            var settings = {
                dots: false,
                infinite: true,
                speed: 400,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: <PrevArrow />,
                nextArrow: <NextArrow />
              };
          }
          else if(type=='modal'){
              console.log('modal!!!!!!!');
            var settings = {
                dots: false,
                infinite: true,
                speed: 100,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: <PrevArrow />,
                nextArrow: <NextArrow />
              };
          }
        // component
        function PrevArrow(props) {
            const { className, style, onClick } = props;
            return (
                <div className={((type=='modal')?'top-[40%] -left-[5%] ':'top-[40%] left-[4%] ')+'absolute z-50 p-3 pr-4 border-2 rounded-[50%] flex justify-center items-center hover:cursor-pointer bg-white ' }
                                onClick={()=>{prevImage(); slickSliderRef.current.slickGoTo(currentSlide); }}>
                    <Image src='/images/icon-previous.svg' width={14} height={15}/>
                </div>
            );
          }
          function NextArrow(props) {
            const { className, style, onClick } = props;
            return (
            <div className={((type=='modal')?'top-[40%] -right-[5%] ':'top-[40%] right-[4%] ')+'absolute z-50 p-3 pl-4  border-2 rounded-[50%] flex justify-center items-center hover:cursor-pointer bg-white'}
                            onClick={()=>{ nextImage(); slickSliderRef.current.slickGoTo(currentSlide);}}>
                  <Image src='/images/icon-next.svg' width={14} height={15}/>
              </div>
            );
          }

          return (
            <div className="xl:w-[80%]">
                    <div>
                        <Slider ref={slickSliderRef} className="relative w-full md:w-[100%]" {...settings} 
                                afterChange={(i)=>{onSwipeEnd(i);}}
                        >
                            <div className="border">
                                <div className='relative w-full md:w-[100%] h-96 '>
                                    <Image src="/images/image-product-1.jpg" layout="fill"/>
                                </div>
                            </div>
                            <div>
                                <div className='relative w-full md:w-[100%] h-96 '>
                                    <Image src="/images/image-product-2.jpg" layout="fill"/>
                                </div>
                            </div>
                            <div>
                                <div className='relative w-full md:w-[100%] h-96 '>
                                    <Image src="/images/image-product-3.jpg" layout="fill"/>
                                </div>
                            </div>
                            <div>
                                <div className='relative w-full md:w-[100%] h-96 '>
                                    <Image src="/images/image-product-4.jpg" layout="fill"/>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div>
                        {
                            type!='mobile' && (
                                <div className="hidden md:inline-block relative border w-[100%]">
                                    <div className="flex w-full gap-4">
                                        <div className="w-[25%] group">
                                            <div className={"relative w-[100%] h-20 hover:cursor-pointer rounded-lg "+(currentSlide==0?'border-4 border-orange':'')} onClick={()=>{switchToImageIndex(0)}}>
                                                <Image className={"rounded-sm group-hover:opacity-50 "+(currentSlide==0?'opacity-50':'')} src="/images/image-product-1-thumbnail.jpg" layout="fill"/>
                                            </div>
                                        </div>
                                        <div className="w-[25%] group">
                                            <div className={"relative w-[100%] h-20 hover:cursor-pointer rounded-lg "+(currentSlide==1?'border-4 border-orange':'')} onClick={()=>{switchToImageIndex(1)}}>
                                                <Image className={"rounded-sm group-hover:opacity-50 "+(currentSlide==1?'opacity-50':'')} src="/images/image-product-2-thumbnail.jpg" layout="fill"/>
                                            </div>
                                        </div>
                                        <div className="w-[25%] group">
                                            <div className={"relative w-[100%] h-20 hover:cursor-pointer rounded-lg "+(currentSlide==2?'border-4 border-orange':'')} onClick={()=>{switchToImageIndex(2)}}>
                                                <Image className={"rounded-sm group-hover:opacity-50 "+(currentSlide==2?'opacity-50':'')} src="/images/image-product-3-thumbnail.jpg" layout="fill"/>
                                            </div>
                                        </div>
                                        <div className="w-[25%] group">
                                            <div className={"relative w-[100%] h-20 hover:cursor-pointer rounded-lg "+(currentSlide==3?'border-4 border-orange':'')} onClick={()=>{switchToImageIndex(3)}}>
                                                <Image className={"rounded-sm group-hover:opacity-50 "+(currentSlide==3?'opacity-50':'')} src="/images/image-product-4-thumbnail.jpg" layout="fill"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }     
                    </div>
            </div>
          );
    
};

export default SlickSlider;