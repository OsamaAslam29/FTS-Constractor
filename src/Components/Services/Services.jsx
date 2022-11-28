import React from 'react'
import './Services.scss'
import first from '../../Assets/first.png'
import second from '../../Assets/second.jpg'
import third from '../../Assets/third.jpg'
import forth from '../../Assets/forth.jpg'
import Zoom from 'react-reveal/Zoom';

const Services = () => {
    return (
        <>
            <div className="container spacing" id='about'>
                <div className="flex-about">
                    <div className="images-box">
                        <div className="upper">
                            <Zoom>
                                <div className="large-image">
                                    <img src={first} alt="" />
                                </div>
                            </Zoom>
                            <Zoom>
                            <div className="small-image">
                                <img src={second} alt="" />
                            </div>
                            </Zoom>
                        </div>
                        <div className="lower">
                        <Zoom>
                            <div className="small-image">
                                <img src={third} alt="" />
                            </div>
                            </Zoom>
                            <Zoom>
                            <div className="large-image">
                                <img src={forth} alt="" />
                            </div>
                            </Zoom>
                        </div>
                    </div>
                    <div className="about-box">
                        <div className="heading">
                            <div className='flex'>
                                <h4>About Us</h4>
                                <div className='border'></div>
                            </div>
                            <h2>FTS General Contractors Services</h2>

                        </div>
                        <div className="para">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.


                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container spacing' id='services'>
                <div className="flex-services">
                    <h2>FTS General Contractors Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

            </div>
        </>
    )
}

export default Services
