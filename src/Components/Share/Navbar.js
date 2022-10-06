import { Avatar } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';


const Navbar = () => {
    const [user] = useAuthState(auth)
    return (
        <nav className='flex justify-between mx-14 mt-5 mb-10'>
            <div>
                <h1 className='text-[32px] font-bold text-[#584A4A]'><Link to='/'>LOGO</Link></h1>
            </div>
            <div className='flex items-center gap-3 text-base px-10 py-2 shadow-sm'>
            <Avatar alt="" src={user?.photoURL} />
                 {user?.displayName}
            </div>
        </nav>
    );
};

export default Navbar;