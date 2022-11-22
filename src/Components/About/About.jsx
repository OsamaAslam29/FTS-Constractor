import React from 'react'
import './About.scss'
import { ReactComponent as Search } from '../../Assets/search.svg'
const About = () => {
  return (
    <div className='container spacing' id='about'>
      <div className="flex-cards">
        <div className="card">
            <div className="logo">
                <Search className='icon'/>
            </div>
            <div className="heading">
                <h5>SERVICE 1</h5>
            </div>
            <div className="para">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <div className="card">
            <div className="logo">
                <Search className='icon'/>
            </div>
            <div className="heading">
                <h5>SERVICE 1</h5>
            </div>
            <div className="para">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <div className="card">
            <div className="logo">
                <Search className='icon'/>
            </div>
            <div className="heading">
                <h5>SERVICE 1</h5>
            </div>
            <div className="para">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <div className="card">
            <div className="logo">
                <Search className='icon'/>
            </div>
            <div className="heading">
                <h5>SERVICE 1</h5>
            </div>
            <div className="para">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
