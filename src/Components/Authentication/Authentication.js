import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { FcGoogle } from 'react-icons/fc';

const Authentication = () => {
    const [signInWithGoogle, gUser] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    if (gUser) {
        navigate('/');
    }
    return (
        <div className='flex justify-center'>
            <div className='shadow-md border rounded-md w-1/3 flex justify-center'>
                <button className='mx-20 py-40'
                    onClick={() => signInWithGoogle()} >
                    <h2 className='text-lg font-bold whitespace-nowrap mb-10'>For Manage Student </h2>
                    <span className='text-5xl flex justify-center mb-2'><FcGoogle /></span>
                    <span className='text-xl text-green-500 font-bold'>Continue with Google</span>
                </button>

            </div>
        </div>
    );
};

export default Authentication;