import { useState, useEffect } from 'react';

const MenuContext = (setCartModal)=>{
    const [menu,setMenu]=useState(false);
    const closeMenu = ()=>{
        setMenu(false);
    };
    const openMenu = ()=>{
        setMenu(true);
        setCartModal(false);
    };
    return {menu,closeMenu,openMenu};
};

export {MenuContext};
