import React, { useState } from 'react'
import './Navbar.scss'
import logo from '../../Assets/logo.png'

// ****** Mui Hameburger ********
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const Navbar = () => {



    const [background, setBackground] = useState(false);





    const [state, setState] = React.useState({

        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 265 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='main'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="border"></div>
                <div className="nav">
                    <a href="#home" className='active'>Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                    <a href="#gallery">Testimonial</a>
                    <div className='right'>
                        <a href="tel:(470) 999-6819">Contact Us</a>
                    </div>
                </div>
            </div>

        </Box>
    );




    const changeNavBar = () => {
        if (window.scrollY >= 80) {
            setBackground(true)
        } else {
            setBackground(false)      
        }
    }
    window.addEventListener("scroll", changeNavBar);
   
    return (

        <div className={background ? 'nav-container scroll' : 'nav-container'}>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menu">
                <div className="web-menu">
                    <a href="#home" className='active'>Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                    <a href="#testimonail">Testimonial</a>
                    <a className='call' href="#home">Call Us</a>
                </div>
                <div className="mobile-menu">
                    <div className='ham_none'>
                        {['top'].map((anchor) => (
                            <React.Fragment key={anchor}>

                                <div className="menu">
                                    <MenuIcon onClick={toggleDrawer(anchor, true)} style={{ fontSize: "30px" }} />
                                </div>
                                <SwipeableDrawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                    onOpen={toggleDrawer(anchor, true)}
                                >
                                    {list(anchor)}
                                </SwipeableDrawer>
                            </React.Fragment>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Navbar
