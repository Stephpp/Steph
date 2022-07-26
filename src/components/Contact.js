import React from 'react';
import '../App.css';
import email from '../SVG/email.svg';
import gh from '../SVG/gh.svg';
import ig from '../SVG/ig.svg';
import linkedin from '../SVG/in.svg';
import fb from '../SVG/fb.svg';

const Contact = () => {
    return (
        <div className="contact">
            <h1 className='contact-section-title'>Get in Touch</h1>
            <div className="contact-wrapper">
                <div className="c-left">
                    <div className="c-left-wrapper">
                        <h1>You can find me on:</h1>
                        {/* <div>
                            <a href="mailto:stephpp404@gmail.com"><img src={email} alt="email" /></a>
                            <a href="mailto:stephpp404@gmail.com"><h2>E-mail</h2></a>
                        </div> */}
                        <a href="https://www.instagram.com/steph._.pp/">
                            <div>
                                <img src={ig} alt="instagram" />
                                <h2>Instagram</h2>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/stefanos-pappas/">
                            <div>
                                <img src={linkedin} alt="linkedin" />
                                <h2>Linkedin</h2>
                            </div>
                        </a>
                        <a href="https://github.com/Stephpp">
                            <div>
                                <img src={gh} alt="github" />
                                <h2>GitHub</h2>
                            </div>
                        </a>
                        <a href="https://www.facebook.com/stefanos.pappas.142/">
                            <div>
                                <img src={fb} alt="facebook" />
                                <h2>Facebook</h2>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="c-right">
                    <div className="c-right-wrapper">
                        <h2 className='c-title'>Or send a direct email:</h2>
                        <div className="c-form">
                            <div>
                                <input type="text" placeholder='Name' />
                            </div>
                            <div>
                                <input type="text" placeholder='Subject' />
                            </div>
                            <div>
                                <input type="text" placeholder='E-mail' />
                            </div>
                            <div>
                                <h3 className='c-content-title'>Content</h3>
                                <textarea name="" id="" cols="30" rows="10">
                                </textarea>
                            </div>
                            <button className='c-sumbit-button'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;