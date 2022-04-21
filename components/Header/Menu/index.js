
import CloseIcon from '../../../public/images/icon-close.svg';

const Menu = ({closeMenu})=>{

    return(
        <div className="absolute top-0 h-full w-full xl:hidden">
            <div className="absolute z-[9999] h-full w-full bg-veryDarkBlue opacity-80"></div>
            <div className="absolute min-h-full w-72 bg-white z-[99999]">
                <div className='p-7'>
                    <div className='mb-14'>
                        <CloseIcon className='hover:cursor-pointer' onClick={closeMenu}/>
                    </div>
                    <ul className='text-black font-bold font-kumbh text-xl'>
                        <li className='mb-4 hover:cursor-pointer'>Collections</li>
                        <li className='mb-4 hover:cursor-pointer'>Men</li>
                        <li className='mb-4 hover:cursor-pointer'>Women</li>
                        <li className='mb-4 hover:cursor-pointer'>About</li>
                        <li className='mb-4 hover:cursor-pointer'>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;

