import React from 'react'
import './About.scss'
import Roll from 'react-reveal/Roll';

import { ReactComponent as Search } from '../../Assets/search.svg'
const About = () => {
    return (
        <div className='container spacing'>
            <div className="flex-cards">
                <Roll left>
                    <div className="card">
                        <div className="back_drop"></div>
                        <div className="logo">
                            <Search className='icon' />
                        </div>
                        <div className="heading">
                            <h5>SERVICE 1</h5>
                        </div>
                        <div className="para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </Roll>
                <Roll left>
                    <div className="card">
                        <div className="back_drop"></div>
                        <div className="logo">
                            <Search className='icon' />
                        </div>
                        <div className="heading">
                            <h5>SERVICE 2</h5>
                        </div>
                        <div className="para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </Roll>
                <Roll left>
                    <div className="card">
                        <div className="back_drop"></div>
                        <div className="logo">
                            <Search className='icon' />
                        </div>
                        <div className="heading">
                            <h5>SERVICE 3</h5>
                        </div>
                        <div className="para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </Roll>
                <Roll left>
                    <div className="card">
                        <div className="back_drop"></div>
                        <div className="logo">
                            <Search className='icon' />
                        </div>
                        <div className="heading">
                            <h5>SERVICE 4</h5>
                        </div>
                        <div className="para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </Roll>
            </div>

        </div>
    )
}

export default About
