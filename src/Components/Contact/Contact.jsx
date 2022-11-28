import React from 'react'
import './Contact.scss'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AiOutlineCaretRight } from 'react-icons/ai';
import Recaptcha from "react-google-recaptcha";
import Slide from 'react-reveal/Slide';


const Contact = () => {
    const [isOpen, setOpen] = useState(false)

    function onChange(value) {
        console.log("Captcha value:", value);
    }
    return (
        <div className='contact-container spacing' id='contact'>
            <Slide bottom>
                <div className="heading">
                    <div className='flex'>
                        <h4>Keep in Touch</h4>
                        <div className='border'></div>
                    </div>
                    <h2>Contact Us</h2>

                </div>
            </Slide>
            <div className="flex-contact">
                <Slide bottom>
                    <div className="video-section">
                        <Slide bottom>
                            <React.Fragment>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                                <div className="startContainer">
                                    <button className="button pulseBox" onClick={() => setOpen(true)}><AiOutlineCaretRight className='icon' /> </button>
                                </div>
                            </React.Fragment>
                        </Slide>
                    </div>
                </Slide>
                <Slide bottom>
                    <div className="contact-form">
                        <Slide bottom>
                            <div className="headings">
                                <div className='flex'>
                                    <h4>Reservation</h4>
                                    <div className='border'></div>
                                </div>
                                <h2>Keep in Touch</h2>

                            </div>
                        </Slide>
                        <div className="flex-fields">
                            <Slide bottom>
                                <div className="flex-inputs">
                                    <TextField className='input' color="warning" label="Your Name" variant="filled" />
                                    <TextField className='input' color="warning" label="Your Email" variant="filled" />
                                </div>
                            </Slide>
                            <Slide bottom>
                                <div className="flex-inputs">
                                    <TextField className='input' color="warning" label="Phone No." variant="filled" />
                                    <TextField className='input' color="warning" label="Subject" variant="filled" />
                                </div>
                            </Slide>
                            <Slide bottom>
                                <div className="flex-inputs">
                                    <TextField className='input' color="warning" label="Message" variant="filled" />
                                </div>
                            </Slide>
                            <Slide bottom>
                                <div className="flex-inputs">
                                    <Recaptcha
                                        sitekey="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"
                                        onChange={onChange}
                                        style={{ display: "flex", justifyContent: "center" }}
                                    />
                                </div>
                            </Slide>
                            <Slide bottom>
                                <div className="flex-inputs">
                                    <Button className='button' variant="contained" disableElevation>Send Message</Button>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default Contact
