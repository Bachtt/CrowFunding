import React from 'react';
import { Link } from 'react-router-dom';

const LayoutAuthentication = (props) => {
    const {children, heading = ""} = props;
    return (
        <div className='w-full min-h-screen bg-lite p-10 relative isolate'>
            <img src='/ellipse.png' alt='bg' className='pointer-events-none absolute bottom-0 left-0 right-0 z-[-1]'/>
            <Link to="/" className='block mb-5 lg:mb-16'>
                <img srcSet='/logo.png 2x' alt='crowfunding-app' />
            </Link>
            <div className='w-full max-w-[556px] bg-white rounded-lg px-5 py-8 lg:px-16 lg:py-12 mx-auto'>
                <h1 className='font-semibold text-lg lg:text-xl mb-1 lg:mb-3 text-center text-text1'>{heading}</h1>
                {children}   
            </div>
        </div>
    );
};

export default LayoutAuthentication;