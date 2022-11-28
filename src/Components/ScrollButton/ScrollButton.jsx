import React, { useState } from 'react'
import './ScrollButton.scss'
import { useEffect } from 'react';
import { BsArrowUp } from 'react-icons/bs';
import Slide from 'react-reveal/Slide';


const ScrollButton = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <>
            <Slide bottom>
                <button className='scroll-btn' onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
                >
                    <BsArrowUp />
                </button>
            </Slide>


        </>
    )
}

export default ScrollButton
