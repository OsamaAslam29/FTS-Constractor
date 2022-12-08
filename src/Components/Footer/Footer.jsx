import React from 'react'
import "./Footer.scss"
import { MdLocationPin } from 'react-icons/md';
import { MdLocalPhone } from 'react-icons/md';
import { HiMail } from 'react-icons/hi';

import { RiTwitterFill } from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa';
import { FaGlobeAmericas } from 'react-icons/fa';
import { ImYoutube } from 'react-icons/im';
import { FaYelp } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { GrGoogle } from 'react-icons/gr';
import Slide from 'react-reveal/Slide';



import { FaAngleRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <div className="container">
                    <div className="flex-footer">
                        <Slide left>
                            <div className="flex-contact">
                                <div className="heading">
                                    <h4>Contact</h4>
                                    <div className='border'></div>
                                </div>
                                <div className="info">
                                    <a href="https://www.google.com/maps/place/United+States/@37.6,-95.665,9z/data=!4m6!3m5!1s0x54eab584e432360b:0x1c3bb99243deb742!8m2!3d37.09024!4d-95.712891!16zL20vMDljN3cw?hl=en&gl=US">
                                        <MdLocationPin target="_blank" className='icon' />
                                        <p>United States of America</p>
                                    </a>
                                    <a href="tel:(678) 666 5226">
                                        <MdLocalPhone className='icon' />
                                        <p>(678) 666 5226</p>
                                    </a>
                                    <a href="mailto:info@firmtechsol.com">
                                        <HiMail className='icon' />
                                        <p>info@firmtechsol.com</p>
                                    </a>
                                </div>
                                <div className="icons">
                                    <a href='https://twitter.com' className="circle">
                                        <RiTwitterFill className='icon' />
                                    </a>
                                    <a href='https://www.facebook.com/' className="circle">
                                        <FaFacebookF className='icon' />
                                    </a>
                                    <a href='https://firmtechsol.com/' className="circle">
                                        <FaGlobeAmericas className='icon' />
                                    </a>
                                    <a href='https://youtu.be/c78EavDvxG0' className="circle">
                                        <ImYoutube className='icon' />
                                    </a>
                                    <a href='https://www.yelp.com' className="circle">
                                        <FaYelp className='icon' />
                                    </a>
                                    <a href='https://www.instagram.com' className="circle">
                                        <RiInstagramFill className='icon' />
                                    </a>
                                    <a href='https://www.google.com/business/' className="circle">
                                        <GrGoogle className='icon' />
                                    </a>
                                </div>
                            </div>
                        </Slide>
                        <Slide bottom>
                            <div className="links">
                                <div className="heading">
                                    <h4>Related Links</h4>
                                    <div className='border'></div>
                                </div>
                                <div className="scroll-menu">
                                    <a href="https://weblymart.com/landpage/dummy/100-FTS-Moving-Services">
                                        <FaAngleRight className="icon" />
                                        <p>FTS Moving Services</p>
                                    </a>
                                    <a href="https://weblymart.com/landpage/dummy/100-FTS-Roofing-Services">
                                        <FaAngleRight className="icon" />
                                        <p>FTS Roofing Services</p>
                                    </a>
                                    <a href="https://weblymart.com/landpage/dummy/100-FTS-Windows-Services">
                                        <FaAngleRight className="icon" />
                                        <p>FTS Windows Services</p>
                                    </a>
                                    <a href="https://weblymart.com/landpage/dummy/100-FTS-Plumbing-Services">
                                        <FaAngleRight className="icon" />
                                        <p>FTS Plumbing Services</p>
                                    </a>
                                    <a href="https://weblymart.com/landpage/dummy/100-FTS-Flooring-Services">
                                        <FaAngleRight className="icon" />
                                        <p>FTS Flooring Services</p>
                                    </a>
                                    <a href="https://weblymart.com/landpage/dummy/100-FTS-Remodeling-Services">
                                        <FaAngleRight className="icon" />
                                        <p>FTS Remodeling Services</p>
                                    </a>
                                    <a href="https://weblymart.com/landpage/dummy/100-FTS-Locksmiths-Services">
                                        <FaAngleRight className="icon" />
                                        <p>FTS Locksmiths Services</p>
                                    </a>
                                    <a href="https://weblymart.com/landpage/dummy/100-FTS-Landscaping-Services">
                                        <FaAngleRight className="icon" />
                                        <p>FTS Landscaping Services</p>
                                    </a>
                                    <a href="https://weblymart.com/landpage/dummy/100-FTS-Appliance-Repair">
                                        <FaAngleRight className="icon" />
                                        <p>FTS Appliance Repair</p>
                                    </a>
                                    <a href="https://weblymart.com/landpage/dummy/100-FTS-Garage-Doors-Services">
                                        <FaAngleRight className="icon" />
                                        <p>FTS Garage Doors Services</p>
                                    </a>
                                    <a href="https://weblymart.com/landpage/dummy/100-FTS-Pest-Controls-Services">
                                        <FaAngleRight className="icon" />
                                        <p>FTS Pest Controls Services</p>
                                    </a>
                                    <a href="https://weblymart.com/landpage/dummy/100-FTS-Kitchen-&-Bath-Services">
                                        <FaAngleRight className="icon" />
                                        <p>FTS Kitchen & Bath Services</p>
                                    </a>
                                    <a href="https://weblymart.com/landpage/dummy/100-FTS-Chimney-Sweeps-Services">
                                        <FaAngleRight className="icon" />
                                        <p>FTS Chimney Sweeps Services</p>
                                    </a>
                                    <a href="https://weblymart.com/landpage/dummy/100-FTS-Home-Inspectors-Services">
                                        <FaAngleRight className="icon" />
                                        <p>FTS Home Inspectors Services</p>
                                    </a>
                                    <a href="https://weblymart.com/landpage/dummy/100-FTS-Shades-Blinds-Services">
                                        <FaAngleRight className="icon" />
                                        <p>FTS Shades & Blinds Services</p>
                                    </a>
                                    <a href="https://weblymart.com/landpage/dummy/100-FTS-Cabinets-Services">
                                        <FaAngleRight className="icon" />
                                        <p>FTS Cabinets Services</p>
                                    </a>
                                </div>
                            </div>
                        </Slide>
                        <Slide right>
                            <div className="location">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d203655.84375164827!2d-95.038779!3d37.1022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1669152173874!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </Slide>
                    </div>
                    <div className="border"></div>
                    <div className="copyright">
                        <p>© Copyright 2022 | Powered by <b><a href="http://firmtechservices.com/">FTS</a></b>. All Right Reserved.</p>
                    </div>


                </div>

            </div>
            
        </>
    )
}

export default Footer
