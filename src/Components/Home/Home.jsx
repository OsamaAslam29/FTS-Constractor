import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.scss'

import Bounce from 'react-reveal/Bounce';

const Home = () => {
  return (
    <>
    <div className='home-container'>
      <Navbar className="postion" />
      <div className="container" id='home'>
        <div className="fts-group">
      <Bounce left>
          <h1>FTS General Contractors Services</h1>
          <h3>Sample Landing Page</h3>
          <div className='primary-button'>
            <a href="tel:(678) 666 5226">Call Us</a>
          </div>
        </Bounce>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
