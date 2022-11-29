import React from 'react'
import './Testimonial.scss'
import { FaQuoteLeft } from 'react-icons/fa';
import profile from '../../Assets/image.svg'
 
import Slider from "react-slick"; 
import { FaBeer } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const arr = [
    {
        img: <FaBeer />,
        heading: "Lorem Ipsum",
    },
    {
        img: <FaBeer />,
        heading: "Lorem Ipsum",
    },
    {
        img: <FaBeer />,
        heading: "Lorem Ipsum",
    },
    {
        img: <FaBeer />,
        heading: "Lorem Ipsum",
    },
    {
        img: <FaBeer />,
        heading: "Lorem Ipsum",
    },
];

const Testimonial = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        // asNavFor: ".slider-for",
        centerMode: true,
        responsive: [
            {
                breakpoint: 1270,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
        ],
    };

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
                {/* <div className="flex-testimonial">
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
                </div> */}
                <div className="parent">
                    <Slider {...settings}>
                        {arr.map((data, i) => {
                            return (
                                <div className="slide_parent" key={i}>
                                    <div>
                                        {data.img}
                                    </div>
                                    <div className="text">{data.heading}</div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
