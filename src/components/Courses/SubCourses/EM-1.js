import React from 'react';
import './SubCourseOne.css'
import Lecture from '../../../assets/DC.jpg'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const EM1 = () => {
    return (
        <div className="container">
            <div className="subcourse">
                <Navbar />
            </div>
            <h1 className="heading">
                <span>M</span>
                <span>1</span>
                <span>-</span>
                <span>U</span>
                <span>N</span>
                <span>I</span>
                <span>T</span>
                <span>S</span>
            </h1>
            <div className="grid">
                <div className="grid-item">
                    <div className="cardss">
                        {/* <a href="#" > */}
                            <img className="card-img" src={Lecture} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Diffrential Calculus</h1>
                            <p className="card-text">
                            Here I have discussed the entire differential calculus including its sub-topics like Eulers Theorem , Total Differentiation , Jacobian etc. with Explanations, Examples, Practice Problems, and Handwritten Notes. 
                            </p>
                            <button className="card-btn" onClick={() => window.open("https://www.youtube.com/playlist?list=PL6_Q82ANVQs0jHWS-UwQpT_ixvEkoQA0-", "_blank")}>Learn <span>&rarr;</span ></button>
                            <button className="card-btn" onClick={() => window.open("https://drive.google.com/drive/folders/1Ef-OPKCV1QGRLr8Q-sUMLGA95GHUuYYC?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EM1;