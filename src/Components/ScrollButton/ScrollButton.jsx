import React, { useState } from 'react'
import './ScrollButton.scss'
import { useEffect } from 'react';
import { BsArrowUp } from 'react-icons/bs';

const ScrollButton = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <>

            <button className='scroll-btn' onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
            >
                <BsArrowUp />
            </button>
            

        </>
    )
}

export default ScrollButton
