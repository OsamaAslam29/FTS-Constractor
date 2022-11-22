import React from 'react'
import "./Footer.scss"
import { MdLocationPin } from 'react-icons/md';
const Footer = () => {
    return (
        <div className='footer-container spacing'>
            <div className="container">
                <div className="flex-footer">
                    <div className="flex-contact">
                        <div className="heading">
                            <h4>Contact</h4>
                            <div className='border'></div>
                        </div>
                        <div className="info">
                            <a href="#">
                                <MdLocationPin className='icon' />
                                <p>United States of America</p>
                            </a>
                            <a href="#">
                                <MdLocationPin className='icon' />
                                <p>(678) 666 5226</p>
                            </a>
                            <a href="#">
                                <MdLocationPin className='icon' />
                                <p>info@firmtechsol.com</p>
                            </a>
                        </div>
                        <div className="icons">
                            <a href='#' className="circle">
                                <MdLocationPin className='icon' />
                            </a>
                            <a href='#' className="circle">
                                <MdLocationPin className='icon' />
                            </a>
                            <a href='#' className="circle">
                                <MdLocationPin className='icon' />
                            </a>
                            <a href='#' className="circle">
                                <MdLocationPin className='icon' />
                            </a>
                            <a href='#' className="circle">
                                <MdLocationPin className='icon' />
                            </a>
                            <a href='#' className="circle">
                                <MdLocationPin className='icon' />
                            </a>
                            <a href='#' className="circle">
                                <MdLocationPin className='icon' />
                            </a>
                        </div>
                    </div>
                    <div className="links">
                        <div className="heading">
                            <h4>Contact</h4>
                            <div className='border'></div>
                        </div>
                        <div className="scroll-menu">
                            <a href="#">
                                <MdLocationPin />
                                <p>FTS Moving Services</p>
                            </a>
                            <a href="#">
                                <MdLocationPin />
                                <p>FTS Moving Services</p>
                            </a>
                            <a href="#">
                                <MdLocationPin />
                                <p>FTS Moving Services</p>
                            </a>
                            <a href="#">
                                <MdLocationPin />
                                <p>FTS Moving Services</p>
                            </a>
                            <a href="#">
                                <MdLocationPin />
                                <p>FTS Moving Services</p>
                            </a>
                            <a href="#">
                                <MdLocationPin />
                                <p>FTS Moving Services</p>
                            </a>
                            <a href="#">
                                <MdLocationPin />
                                <p>FTS Moving Services</p>
                            </a>
                        </div>
                    </div>

                    <div className="location">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d203655.84375164827!2d-95.038779!3d37.1022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1669152173874!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="border"></div>
                <div className="copyright">
                <p>© Copyright 2022 | Powered by <b><a href="http://firmtechservices.com/">FTS</a></b>. All Right Reserved.</p>
                </div>


            </div>

        </div>
    )
}

export default Footer
