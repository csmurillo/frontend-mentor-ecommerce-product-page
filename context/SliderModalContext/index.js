import { useState, useEffect } from 'react';

const SliderModalContext = ()=>{
    const [modal,setModal]=useState(false);
    const openModal = ()=>{
        setModal(true);
    };
    const closeModal = ()=>{
        setModal(false);
    };
    return {modal, openModal, closeModal};
};

export {SliderModalContext};
