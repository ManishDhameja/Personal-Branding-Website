import React from 'react'
import Navbar from '../Navbar/Navbar';
import Profile from '../../assets/ABoutt.jpeg'
import './About.scss'
// import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="about">
                <div className="about-content">
                    <div className="leftt">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="card-image">
                                    <img src={Profile} alt="" height="260"/>
                                </div>
                                <ul className="social-icons">
                                    <li><a href="https://www.facebook.com/ghurkaayush/" alt="" target="_blank" rel="noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                    </a></li>
                                    <li><a href="https://www.instagram.com/ayushghurka/" alt="" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="https://twitter.com/ayushghurka" alt="" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/ayushghurka" alt="" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                                {/* <div className="details">
                                    <h2>Ayush Ghurka
                                        <br />
                                        <span className="job-title">Teacher</span></h2>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="para">
                            <p>Hello! I am Ayush Ghurka, a 2022 grad in Electronics and Instrumentation . 
                                I am an amalgam of zeal and passion . With immense interest for mathematics . 
                                I have experience teaching students in India and around the world. Along with being a Q&amp;A Expert on Chegg ,
                                I manage Youtube channels with a minimum reach of 700k and Instagram reach of 100k . 
                                I am on a mission to assist students in their academic well-being and add sparkle to the monotonous study
                                techniques. </p>
                        </div>
                    </div>
                    <div className="cwm-social-icons">
                        <a href="https://www.facebook.com/ghurkaayush/" target="_blank" alt="" rel="noreferrer"><img src="https://cdn.fs.teachablecdn.com/yho35aJlSICjNd8Pe6Zk" height="60" alt=""/></a>
                        <a href="https://twitter.com/ayushghurka" target="_blank" alt="" rel="noreferrer"><img src="https://cdn.fs.teachablecdn.com/YjXpg90MTCWsPzj9TI3g" height="60" alt=""/></a>
                        <a href="https://www.youtube.com/channel/UCVrnkjUlLE7h0zcdn1kM6tA" target="_blank" alt="" rel="noreferrer"><img src="https://cdn.fs.teachablecdn.com/d0LbDKI1SKq7DjycxGA4" height="60" alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
