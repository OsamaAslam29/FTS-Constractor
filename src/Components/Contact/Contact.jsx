import React from 'react'
import './Contact.scss'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AiOutlineCaretRight } from 'react-icons/ai';
import Recaptcha from "react-google-recaptcha"

const Contact = () => {
    const [isOpen, setOpen] = useState(false)

    function onChange(value) {
        console.log("Captcha value:", value);
    }
    return (
        <div className='contact-container spacing' id='contact'>
            <div className="heading">
                <div className='flex'>
                    <h4>Keep in Touch</h4>
                    <div className='border'></div>
                </div>
                <h2>Contact Us</h2>

            </div>
            <div className="flex-contact">
                <div className="video-section">
                    {/* <React.Fragment> */}
                        {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="" onClose={() => setOpen(false)} />
                    </React.Fragment> */}
                        <div className="startContainer">
                            <button className="button pulseBox" onClick={() => setOpen(true)}><AiOutlineCaretRight className='icon' /> </button>
                        </div>
                </div>
                <div className="contact-form">
                    <div className="headings">
                        <div className='flex'>
                            <h4>Reservation</h4>
                            <div className='border'></div>
                        </div>
                        <h2>Keep in Touch</h2>

                    </div>
                    <div className="flex-fields">
                        <div className="flex-inputs">
                            <TextField className='input' color="warning" label="Your Name" variant="filled" />
                            <TextField className='input' color="warning" label="Your Email" variant="filled" />
                        </div>
                        <div className="flex-inputs">
                            <TextField className='input' color="warning" label="Phone No." variant="filled" />
                            <TextField className='input' color="warning" label="Subject" variant="filled" />
                        </div>
                        <div className="flex-inputs">
                            <TextField className='input' color="warning" label="Message" variant="filled" />
                        </div>
                        <div className="flex-inputs">
                            <Recaptcha 
                                sitekey="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"
                                onChange={onChange}
                                style={{display:"flex",justifyContent:"center"}}
                            />
                        </div>
                        <div className="flex-inputs">
                            <Button className='button' variant="contained" disableElevation>Send Message</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
