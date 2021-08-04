import React from 'react';
import './SubCourseOne.css'
import Lecture from '../../../assets/trigonometry.jpg'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const className10 = () => {
    return (
        <div>
            <div className="subcourse">
                <Navbar />
            </div>
            <h1 className="heading">
                <span>1</span>
                <span>0</span>
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
                            <h1 className="card-header">Trignometry</h1>
                            <p className="card-text">
                            Here I have discussed Trigonometry including its sub-topics like Trigonometric ratios, Trigonometric ratios of complementary angles, Trigonometric Identities, etc. with Explanations, Examples, Practice Problems, and Handwritten Notes.
                            </p>
                            <button className="card-btn" onClick={() => window.open("https://www.youtube.com/playlist?list=PL6_Q82ANVQs1eJjIcaoK8m1fVMLyEgLpr", "_blank")}>Learn <span>&rarr;</span ></button>
                            <button className="card-btn" onClick={() => window.open("https://drive.google.com/file/d/1uPlZ_voqoqQgK-GmdyeCr2FkB_5v6nu2/view?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default className10;