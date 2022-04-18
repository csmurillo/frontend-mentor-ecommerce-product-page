
import CloseIcon from '../../public/images/icon-close.svg';

import styles from './Menu.module.css';
const Menu = ({closeMenu})=>{

    return(
        <div className="absolute top-0 h-full w-full">
            <div className="absolute z-[9999] h-full w-full bg-veryDarkBlue opacity-80"></div>
            <div className="absolute min-h-full w-72 bg-white z-[99999]">
                <div className='p-5'>
                    <div className='mb-14'>
                        <CloseIcon className={styles.closeIcon+' hover:cursor-pointer'} onClick={closeMenu}/>
                    </div>
                    <ul className='text-black font-bold font-kumbh text-xl'>
                        <li className='mb-4'>Collections</li>
                        <li className='mb-4'>Men</li>
                        <li className='mb-4'>Women</li>
                        <li className='mb-4'>About</li>
                        <li className='mb-4'>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;