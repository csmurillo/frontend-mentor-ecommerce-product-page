import { useState, useEffect } from 'react';

const SliderContext = ()=>{
    const [currentSlide,setCurrentSlide]=useState(0);

    const switchToImageIndex= (slickSliderRef,i)=>{
        slickSliderRef.current.slickGoTo(i);
        setCurrentSlide(i);
    };

    const onSwipeEnd = (slickSliderRef,sliderPos)=>{
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

    return {currentSlide,switchToImageIndex,onSwipeEnd,nextImage,prevImage};
};

export {SliderContext};
