import React from 'react';
import { TbUser } from 'react-icons/tb';


const Navbar = () => {
    return (
        <nav className='flex justify-between mx-14 mt-5 mb-10'>
            <div>
                <h1 className='text-[32px] font-bold text-[#584A4A]'>LOGO</h1>
            </div>
            <div className='flex items-center gap-3 text-base px-10 py-2 shadow-sm'>
                <TbUser />username@resoluteai.in
            </div>
        </nav>
    );
};

export default Navbar;