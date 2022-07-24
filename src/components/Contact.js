import React from 'react';
import '../App.css';
import email from '../SVG/email.svg';
import gh from '../SVG/gh.svg';
import ig from '../SVG/ig.svg';
import linkedin from '../SVG/in.svg';
import messenger from '../SVG/messenger.svg';

const Contact = () => {
    return (
        <div className="contact">
            <h1 className='contact-section-title'>Get in Touch</h1>
            <div className="contact-wrapper">
                <div className="c-left">
                    <div className="c-left-wrapper">
                        <h1>You can find me on:</h1>
                        <div>
                            <a href="mailto:stephpp404@gmail.com"><img src={email} alt="email" /></a>
                            <a href="mailto:stephpp404@gmail.com"><h2>E-mail</h2></a>
                        </div>
                        <div>
                            <a href="https://m.me/stefanos.pappas.142"><img src={messenger} alt="messenger" /></a>
                            <a href="https://m.me/stefanos.pappas.142"><h2>Messenger</h2></a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/steph._.pp/"><img src={ig} alt="" /></a>
                            <a href="https://www.instagram.com/steph._.pp/"><h2>Instagram</h2></a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/stefanos-pappas/"><img src={linkedin} alt="" /></a>
                            <a href="https://www.linkedin.com/in/stefanos-pappas/"><h2>Linkedin</h2></a>
                        </div>
                        <div>
                            <a href="https://github.com/Stephpp/Stephpp"><img src={gh} alt="" /></a>
                            <a href="https://github.com/Stephpp/Stephpp"><h2>GitHub</h2></a>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <div className="c-right-wrapper">
                        <h1>hello</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;