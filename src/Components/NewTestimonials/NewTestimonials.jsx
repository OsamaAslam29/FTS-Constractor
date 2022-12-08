import React from 'react'
import "./NewTestimonials.scss";
import { FaQuoteLeft } from 'react-icons/fa';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as Pic } from '../../Assets/image.svg';

import Bounce from 'react-reveal/Bounce';


const arr = [
  {
    img: <FaQuoteLeft />,
    heading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    pic: <Pic />,
    bio: "CLIENT 3",
    data: "Customer",
  },
  {
    img: <FaQuoteLeft />,
    heading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    pic: <Pic />,
    bio: "CLIENT 1",
    data: "Customer",
  },
  {
    img: <FaQuoteLeft />,
    heading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    pic: <Pic />,
    bio: "CLIENT 2",
    data: "Customer",
  },
  {
    img: <FaQuoteLeft />,
    heading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    pic: <Pic />,
    bio: "CLIENT 3",
    data: "Customer",
  },
  {
    img: <FaQuoteLeft />,
    heading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    pic: <Pic />,
    bio: "CLIENT 1",
    data: "Customer",
  },
  {
    img: <FaQuoteLeft />,
    heading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    pic: <Pic />,
    bio: "CLIENT 2",
    data: "Customer",
  },

];

const NewTestimonials = () => {

  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0",
    infinite: true,

    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,

        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="tContianer">
      <div className="heading">
        <div className='flex'>
          <h4>Testimonail</h4>
          <div className='border'></div>
        </div>
        <h2>Our Clients Say</h2>
      </div>

      <div className="slider__container">

        <Slider {...settings}>
          {arr.map((data, i) => {
            return (
              <div className="tcards">
                <Bounce bottom>
                  <div className="card1">
                    <div className="icon">{data.img}</div>
                    <p className="text">{data.heading}</p>
                    <div className="bio">
                      <div className='img-color'>{data.pic}</div>
                      <div className="data">
                        <h5>{data.bio}</h5>
                        <small>{data.data}</small>
                      </div>
                    </div>
                  </div>
                </Bounce>
              </div>
            );


          })}
        </Slider>
      </div>
    </div>
  );
};

export default NewTestimonials;
