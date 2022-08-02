import React, { useRef, useState } from 'react';
import '../App.css';
import gh from '../SVG/gh.svg';
import ig from '../SVG/ig.svg';
import linkedin from '../SVG/in.svg';
import fb from '../SVG/fb.svg';
import emailjs from 'emailjs-com';
import { credentials } from '../EmailJs-Credentials';
import validator from 'validator';


const Contact = () => {
    const contactRef = useRef();
    const [sendText, setsendText] = useState('Send')
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = document.forms["form"].name.value;
        const subject = document.forms["form"].subject.value;
        const email = document.forms["form"].email.value;
        const content = document.forms["form"].content.value;
        const message = document.getElementById('c-send-message');

        if (name === "" || subject === "" || email === "" || content === "") { //empty field check

                message.innerHTML = 'Please fill out all the fields'
                message.style.color = '#ff3c00'
                return;
        }

        if (!validator.isEmail(email)) { //invalid email check
          
                message.innerHTML = 'Invalid E-mail'
                message.style.color = '#ff3c00'
                return;
          
        } else {
            emailjs.sendForm(
                credentials.service_id,
                credentials.template_id,
                contactRef.current,
                credentials.public_key
            )
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            setsendText('Sending...')
            setInterval(() => {
                message.innerHTML = 'Message Sent'
                message.style.color = '#95D7AE'
                setsendText('Send')
            }, 2000);
        }
    }
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
                        <form name='form' className="c-form" ref={contactRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder='Name' name='name' autoComplete='new-name' />
                            <input type="text" placeholder='Subject' name='subject' autoComplete='new-subject' />
                            <input type="text" placeholder='E-mail' name='email' autoComplete='new-email' />
                            <textarea id='content' name="content" cols="30" rows="10" placeholder='Content' />
                            <div className='c-send-section'>
                                <button className='c-send-button'>{sendText}</button>
                                <h2 id='c-send-message'></h2>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;