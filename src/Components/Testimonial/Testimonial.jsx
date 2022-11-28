import React from 'react'
import './Testimonial.scss'
import { FaQuoteLeft } from 'react-icons/fa';
import profile from '../../Assets/image.svg'





const Testimonial = () => {


    return (
        <div className='testimonail-container'>
            <div className="container spacing">
                <div className="heading">
                    <div className='flex'>
                        <h4>Testimonail</h4>
                        <div className='border'></div>
                    </div>
                    <h2>Our Clients Say</h2>
                </div>
                <div className="flex-testimonial">
                    <div className="testimonail">
                        <FaQuoteLeft className='icon'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="bio">
                            <img src={profile} alt="" />
                            <div className="data">
                                <h5>CLIENT 1</h5>
                                <small>Customer</small>
                            </div>
                        </div>

                    </div>
                    <div className="testimonail">
                        <FaQuoteLeft className='icon'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="bio">
                            <img src={profile} alt="" />
                            <div className="data">
                                <h5>CLIENT 1</h5>
                                <small>Customer</small>
                            </div>
                        </div>

                    </div>
                    <div className="testimonail">
                        <FaQuoteLeft className='icon'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="bio">
                            <img src={profile} alt="" />
                            <div className="data">
                                <h5>CLIENT 1</h5>
                                <small>Customer</small>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
