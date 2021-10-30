import React from 'react';
import './SubCourseOne.css'
import Lecture from '../../../assets/Matrices.jpg'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const EM2 = () => {
    return (
        <div className="container">
            <div className="subcourse">
                <Navbar />
            </div>
            <h1 className="heading">
                <span>M</span>
                <span>2</span>
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
                            <h1 className="card-header">Matrices</h1>
                            <p className="card-text">
                            Here I have discussed Matrices including its sub-topics like the inverse of the matrix, the rank of the matrix, the normal form of the matrix, Eigen values and eigenvectors of matrices, etc. with Explanations, Examples, Practice Problems, and Handwritten Notes. 
                            </p>
                            <button className="card-btn" onClick={() => window.open("https://www.youtube.com/playlist?list=PL6_Q82ANVQs03opKzE88dDzKbTwqZhRFB", "_blank")}>Learn <span>&rarr;</span ></button>
                            <button className="card-btn" onClick={() => window.open("https://drive.google.com/drive/folders/19sPsw92t-zgt9lxp6tleKurn8pJlwAuB?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EM2;