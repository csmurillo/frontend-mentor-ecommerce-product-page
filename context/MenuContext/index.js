import { useState, useEffect } from 'react';

const MenuContext = ()=>{
    const [menu,setMenu]=useState(false);
    const closeMenu = ()=>{
        setMenu(false);
    };
    const openMenu = ()=>{
        setMenu(true);
        setCartModal(false);
    };
    return {};
};

export {MenuContext};
