import React, {useRef,useState,useEffect} from 'react';
import Image from 'next/image';

const Slider = ()=>{
    // const [currentSlide,setCurrentSlide]=useState(1);

    // const [slidePositions,setSlidePositions]=useState([]);
    // const [pxMovement,setPxMovement]=useState(null);
    // const [slideItems,setSlideItems]=useState({
    //     slider1:{
    //         slideItem:null,
    //         position:null
    //     },
    //     slider2:{
    //         slideItem:null,
    //         position:null
    //     },
    //     slider3:{
    //         slideItem:null,
    //         position:null
    //     },
    //     slider4:{
    //         slideItem:null,
    //         position:null
    //     }
    // });
    // const slideItem1 = useRef();
    // const slideItem2 = useRef();
    // const slideItem3 = useRef();
    // const slideItem4 = useRef();
    // useEffect(()=>{
    //     setSlideItems({...slideItems,['slider1']:{slideItem1:'no'}});
    //     console.log(slideItem1.current.style);
    //     console.log(slideItem1.current.offsetWidth);
    //     for(var i=0; i<=4;i++){
    //         setSlidePositions(slidePositions.push(i*slideItem1.current.offsetWidth));
    //         console.log('how many times');
    //     }
    //     setPxMovement(slideItem1.current.offsetWidth);
    // },[]);
    // useEffect(()=>{
    //     console.log('updated');
    //     console.log('px movemnet'+pxMovement);
    //     console.log('slide position'+slidePositions);
    // },[slideItems]);
    useEffect(()=>{
        console.log('how many times');
    },[]);
    return (
        <div className="relative">
            <div className="absolute">
                <button className="">left</button>
            </div>
            <div className="absolute">
                <button className="">right</button>
            </div>
            <div className='relative md:w-[500px] h-72 overflow-hidden'>
                <div className='absolute w-full h-full' ref={slideItem1}>
                    <div className='relative w-full h-72'>
                        <Image src='/images/image-product-1.jpg' layout='fill'/>
                    </div>
                </div>
                <div className='absolute w-full h-full -right-full' ref={slideItem2}>
                    <div className='relative w-full h-72'>
                        <Image src='/images/image-product-2.jpg' layout='fill'/>
                    </div>
                </div>
                <div className='absolute w-full h-full' ref={slideItem3}>
                    <div className='relative w-full h-72'>
                        <Image src='/images/image-product-3.jpg' layout='fill'/>
                    </div>
                </div>
                <div className='absolute w-full h-full' ref={slideItem4}>
                    <div className='relative w-full h-72'>
                        <Image src='/images/image-product-4.jpg' layout='fill'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;