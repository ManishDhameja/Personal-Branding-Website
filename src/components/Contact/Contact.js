import React from 'react'
import emailjs from 'emailjs-com'
// import { useForm } from 'react-hook-form';
import { init } from "ityped";
import { useState, useEffect, useRef } from "react";
import './Contact.scss'
import Navbar from '../Navbar/Navbar'
import Email from '../../assets/email.png'
import Shape from '../../assets/shape.png'
import Alert from '@material-ui/lab/Alert';
import { db } from './Firebase';

// const inputs = document.querySelectorAll(".input");

// function focusFunc() {
//     let parent = this.parentNode;
//     parent.classNameList.add("focus");
// }

// function blurFunc() {
//     let parent = this.parentNode;
//     if (this.value === "") {
//         parent.classNameList.remove("focus");
//     }
// }

// inputs.forEach((input) => {
//     input.addEventListener("focus", focusFunc);
//     input.addEventListener("blur", blurFunc);
// });


const Contact = () => {

    // const [reply, setReply] = useState(false);
    // const [loader, setLoader] = useState(false);

    // const onSubmit = (data) =>console.log(data)

    let emailRegex = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}"
    let phoneRegex = "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-./0-9]*$"

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name && !email && !phone && !message) {
            setErrorMessage("All fields required");
        }
        else {
            if (!name) {
                setErrorMessage("Name required")
            }
            else {
                if (!email) {
                    setErrorMessage("Email required")
                }
                else {
                    if (!email.match(emailRegex)) {
                        setErrorMessage("Enter a valid Email")
                    }
                    else {
                        if (!phone) {
                            setErrorMessage("Phone required")
                        }
                        else {
                            if (!phone.match(phoneRegex)) {
                                setErrorMessage("Enter a valid Phone number")
                            }
                            else {
                                if (!message) {
                                    setErrorMessage("Enter your message")
                                }
                                else {
                                    setErrorMessage(false);
                                    setSuccessMessage("Thanks, I'll reply ASAP 😃")
                                    db.collection("contacts")
                                        .add({
                                            name: name,
                                            email: email,
                                            phone: phone,
                                            message: message,
                                        })
                                        .catch((error) => {
                                            alert(error.message);
                                        });
                                    emailjs.sendForm('service_yob5rfq', 'template_jxypxhm', e.target, 'user_s7quN9zwKeWVijA1vCz2O')
                                        .then((result) => {
                                            console.log(result.text);
                                        }, (error) => {
                                            console.log(error.text);
                                        });
                                    e.target.reset()
                                    setName("")
                                    setEmail("")
                                    setPhone("")
                                    setMessage("")
                                    setTimeout(() => {
                                        setSuccessMessage("");
                                    }, 7000);

                                }
                            }
                        }
                    }
                }

            }
        }
        // setReply(true);
        // setLoader(true);


    }


    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Let's get in Touch 🤝", "Email me and", "Get your Job Done 👍"],
        });
    }, []);



    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    return (
        <div className="og">
            <Navbar />
            <div className='contact'>
                <div className="heading-container">
                    <div className="screen-heading">
                        <span> Contact us</span>
                    </div>
                    <div className="screen-sub-heading">
                        <span> Let's Keep In Touch </span>
                    </div>
                    <div className="heading-seperator">
                        <div className="seperator-line">
                        </div>
                        <div className="seperator-blob">
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contents">
                    <span className="big-circle"></span>
                    <img src={Shape} className="square" alt="" />
                    <div className="form">
                        <div className="contact-info">
                            <h3 className="title"><span ref={textRef}></span></h3>
                            <p className="text">
                                Your feedback is important to us. We create content to learn with ease. Reach out  via message if you have any suggestions or queries.
                            </p>

                            <div className="info">
                                {/* <div className="information">
                                    <img src="img/location.png" className="icon" alt="" />
                                    <p>92 Cherry Drive Uniondale, NY 11553</p>
                                </div> */}
                                <div className="information">
                                    <img src={Email} className="icon" alt="" />
                                    <p className="paras">ghurkaayush1999@gmail.com</p>
                                </div>
                                {/* <div className="information">
                                    <img src="img/phone.png" className="icon" alt="" />
                                    <p>123-456-789</p>
                                </div> */}
                            </div>
                            <div className="social-media">
                                <p>Connect with me :</p>
                                <div className="social-icon">
                                    <a href="https://www.facebook.com/ghurkaayush/" alt="" target="_blank" rel="noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCVrnkjUlLE7h0zcdn1kM6tA" alt="" target="_blank" rel="noreferrer">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a href="https://www.instagram.com/ayushghurka/" alt="" target="_blank" rel="noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/ayushghurka" alt="" target="_blank" rel="noreferrer">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://twitter.com/ayushghurka" alt="" target="_blank" rel="noreferrer">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="contact-form">
                            <span className="circle one"></span>
                            <span className="circle two"></span>
                            <form className="forms" onSubmit={handleSubmit} autoComplete="off">
                                <h3 className="title">Message me</h3>
                                {/* {Error message alert} */}
                                {errorMessage ? <Alert severity="error">{errorMessage
                                }</Alert> : ""}

                                {/* {Success Message Alert} */}
                                {successMessage ? <Alert severity="success">{successMessage}</Alert> : ""}

                                <div className="input-container">
                                    <input type="text" name="name" className="input" placeholder="Name" value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                    {/* <label for=""></label> */}
                                    {/* <span>Name </span> */}
                                </div>
                                <div className="input-container">
                                    <input type="email" className="input" placeholder="Email" value={email} name="email"
                                        onChange={(e) => setEmail(e.target.value)} />
                                    {/* <label for=""></label> */}
                                    {/* <span>Email</span> */}

                                </div>
                                <div className="input-container">
                                    <input type="tel" className="input" placeholder="Phone" value={phone} name="phone"
                                        onChange={(e) => setPhone(e.target.value)} />
                                    {/* <label for=""></label> */}

                                </div>
                                <div className="input-container textarea">
                                    <textarea className="input" placeholder="Message" value={message} name="message" onChange={(e) => setMessage(e.target.value)}></textarea>
                                    {/* <label for=""></label> */}
                                    {/* <span>Message</span> */}
                                </div>
                                <input type="submit" value="Send" className="btn" />
                                {/* {reply && <span className="btnspan">Thanks, I'll reply ASAP 😃</span>} */}
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
