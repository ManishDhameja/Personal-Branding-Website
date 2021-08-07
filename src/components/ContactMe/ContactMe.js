import React from 'react';
import './ContactMe.css'
import { Link } from 'react-router-dom'
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
                <Link to={'/contact'}>
                    <button className="butn">CONTACT</button>
                </Link>
            </div>
        </div>
    )
}

export default ContactMe
