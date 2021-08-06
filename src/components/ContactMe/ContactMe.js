import React from 'react';
import './ContactMe.css'
// import { Redirect } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    once: true,
  mirror: false,
  duration:500,
  offset:100
})

const ContactMe = () => {
    return (
        <div className="contactme">
            <div className="contact-me">
                <p>Feel free to contact me if you have any questions or concerns.</p>
                <button className="butn" onClick={()=>window.open("/contact")}>CONTACT</button>
            </div>
        </div>
    )
}

export default ContactMe
