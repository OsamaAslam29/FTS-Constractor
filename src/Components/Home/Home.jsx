import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.scss'
const Home = () => {
  return (
    <div className='home-container'>
      <Navbar className="postion" />
      <div className="container" id='home'>
        <div className="fts-group">
          <h1>FTS General Contractors Services</h1>
          <h3>Sample Landing Page</h3>
          <div className='primary-button'>
            <a href="tel:">Call Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
