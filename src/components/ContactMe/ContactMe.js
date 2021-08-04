import React from 'react';
import './ContactMe.css'
// import { Redirect } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    once: true,
  mirror: false,
  duration:1500,
  offset:150
})

const ContactMe = () => {
    return (
        <div className="contactme">
            <div className="contact-me" data-aos="fade-up">
                <p>Feel free to contact me if you have any questions or concerns.</p>
                <button className="butn" onClick={()=>window.open("/contact")} data-aos="zoom-in">CONTACT</button>
            </div>
        </div>
    )
}

export default ContactMe
