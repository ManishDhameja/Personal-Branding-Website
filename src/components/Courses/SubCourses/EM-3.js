import React from 'react';
import './SubCourseOne.css'
import Lecture from '../../../assets/Lect.jpg'
import pde from '../../../assets/pde.jpg'
import fourier from '../../../assets/FOURIER.jpg'
import FD from '../../../assets/Finite-Difference.jpg'
import NA from '../../../assets/NA.jpg'
import LT from '../../../assets/LT.png'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const SubCourseOne = () => {
    return (
        <div>
            <div className="subcourse">
                <Navbar />
            </div>
                <h1 className="heading">
                    <span>M</span>
                    <span>3</span>
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
                            <img className="card-img" src={pde} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Partial Diffrential Equation</h1>
                            <p className="card-text">
                            Here I have discussed Partial Differential Equation (PDE) including its sub-topics like the Formation of the partial differential equation, solution of PDE by the method of multipliers, solution of homogeneous PDE, Particular Integral, Complementary Function, method of separation of variables, etc. with Explanations, Examples, Practice Problems, and Handwritten Notes. 
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/playlist?list=PL6_Q82ANVQs00LyULUZJxDfmVq_j1qVX1", "_blank")}>Learn <span>&rarr;</span ></button>
                            <button className="card-btn" onClick={()=>window.open("https://drive.google.com/drive/folders/1zhYaysBMQ6OCOTMfs1HhwEeo3bcktkeP?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cardss">
                    {/* <a href="#" > */}
                            <img className="card-img" src={fourier} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Fourier Series &amp; Transform</h1>
                            <p className="card-text">
                            Here I have discussed Fourier Series and Fourier Transform including its sub-topics like Dirichlet conditions, Fourier integral, Euler's Formulae, Fourier sine, and cosine series Fourier inverse transform, etc. with Explanations, Examples, Practice Problems, and Handwritten Notes.
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/playlist?list=PL6_Q82ANVQs12R2l0S1Pd19GfHiplMf1_", "_blank")}>Learn <span>&rarr;</span></button>
                            <button className="card-btn" onClick={()=>window.open("https://drive.google.com/drive/folders/1JUYARt9ymlGFcqsyBDBMO47r3WIbk_0F?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cardss">
                    {/* <a href="#" > */}
                            <img className="card-img" src={FD} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Finite Difference (Analysis)</h1>
                            <p className="card-text">
                            Here I have discussed Finite Difference (Numerical Analysis) including its sub-topics like Finite difference operators, Newtons Forward and Backward Interpolation, Lagrange's Interpolation, Newtons divide and difference Formula Numerical Integration and differentiation, Difference Equation, etc. with Explanations, Examples, Practice Problems, and Handwritten Notes. 
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/playlist?list=PL6_Q82ANVQs0WC1qrn8CLasFkuuZJTMb0", "_blank")}>Learn <span>&rarr;</span></button>
                            <button className="card-btn" onClick={()=>window.open("https://drive.google.com/drive/folders/1eUpQSZyU_PIqLb4CBsZAxSnPbBuoJiSg?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cardss">
                    {/* <a href="#" > */}
                            <img className="card-img" src={NA} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Numerical Analysis</h1>
                            <p className="card-text">
                            Here I have discussed Numerical Analysis including its sub-topics like Bisection method, Regula falsi or False position method, Newton Raphson method, Gauss Elimination & Gauss Jordan method, Gauss-Seidel and Gauss Jacobi method, Taylor series method Picard's method, Runge Kutta method, etc. with Explanations, Examples, Practice Problems, and Handwritten Notes.
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/playlist?list=PL6_Q82ANVQs3hiT4gN6yKvb-8Fu7uFtzc", "_blank")}>Learn <span>&rarr;</span></button>
                            <button className="card-btn" onClick={()=>window.open("https://drive.google.com/drive/folders/13aHaI7_cAtndtBwO0FqvXB9kxAMJ2SZf?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cardss">
                    {/* <a href="#" > */}
                            <img className="card-img" src={LT} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Laplace Transform</h1>
                            <p className="card-text">
                            Here I have discussed Laplace Transform including its sub-topics like Basic Laplace Transform, Properties of Laplace transform, Laplace inverse transform, convolution theorem, solving differential using Laplace, etc. with Explanations, Examples, Practice Problems, and Handwritten Notes. 
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/playlist?list=PL6_Q82ANVQs2vVwcIXWti3LXiGQvWaaBS", "_blank")}>Learn <span>&rarr;</span></button>
                            <button className="card-btn" onClick={()=>window.open("https://drive.google.com/drive/folders/1AFRhr1G8_B4HfN3lAIjEFaAwOFmuXS2c?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cardss">
                    {/* <a href="#" > */}
                            <img className="card-img" src={Lecture} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Statics &amp; Probability</h1>
                            <p className="card-text">
                            Here I have discussed Statistics &amp; Probability including its sub-topics like Random variables, Probability Mass Function and Probability Density Function, Mean and Variance of the Random Variable, Cumulative Distribution Function, etc. with Explanations, Examples, Practice Problems, and Handwritten Notes. 
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/playlist?list=PL6_Q82ANVQs239UbtCZ9UyDeZkn9WKUE5", "_blank")}>Learn <span>&rarr;</span></button>
                            <button className="card-btn" onClick={()=>window.open("https://drive.google.com/drive/folders/1LBqQeJ6C7042SW_w-WoWMzAjI6wyRRcT?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        )
}

            export default SubCourseOne;





























            