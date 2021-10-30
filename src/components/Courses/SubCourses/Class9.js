import React from 'react';
import './SubCourseOne.css'
import Polynomial from '../../../assets/polynomial.jpg'
import NS from '../../../assets/NS.jpg'
import LE from '../../../assets/LE.jpg'
import CG from '../../../assets/CG.jpg'
import NCERT from '../../../assets/NCERT.jpg'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const className9 = () => {
    return (
        <div className="container">
            <div className="subcourse">
                <Navbar />
            </div>
                <h1 className="heading">
                    <span>0</span>
                    <span>9</span>
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
                            <img className="card-img" src={Polynomial} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Polynomial</h1>
                            <p className="card-text">
                            Here I have discussed Polynomial including its sub-topics like Zeros of polynomial, Long division method, Remainder theorem, Factor theorem, Algebraic identities, etc. with Explanations, Examples, Practice Problems, and Handwritten Notes. 
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/playlist?list=PL6_Q82ANVQs3tW2JhRV9jqEeqFOFtNQTd", "_blank")}>Learn <span>&rarr;</span ></button>
                            <button className="card-btn" onClick={()=>window.open("https://drive.google.com/file/d/1j7PhOdK3bIL-34xr7E79qMQINJANmFWD/view?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cardss">
                    {/* <a href="#" > */}
                            <img className="card-img" src={NS} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Number System</h1>
                            <p className="card-text">
                            Here I have discussed the Number System including its sub-topics like Rational numbers, Irrational numbers and their representation on the number line, Real numbers on the number line, Laws of Exponents, Rationalization, etc. with Explanations, Examples, Practice Problems, and Handwritten Notes. 
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/playlist?list=PL6_Q82ANVQs3qBHburMDtDfNAxGuWhxpo", "_blank")}>Learn <span>&rarr;</span></button>
                            <button className="card-btn" onClick={()=>window.open("https://drive.google.com/drive/folders/1mkmrHWAsxPkvEns8pn_qnWrTYPbYHeUN?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cardss">
                    {/* <a href="#" > */}
                            <img className="card-img" src={LE} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Linear Equations in Two Variables</h1>
                            <p className="card-text">
                            Here I have discussed Linear Equations in Two Variables including its sub-topics like Solution Of Linear Equation in Two Variables, its Graphical Representation, etc. with Explanations, Examples, Practice Problems, and Handwritten Notes. 
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/playlist?list=PL6_Q82ANVQs1vqgYJCHqhaiYGTVd6cKO5", "_blank")}>Learn <span>&rarr;</span></button>
                            <button className="card-btn" onClick={()=>window.open("https://drive.google.com/drive/folders/1_YhRJLMS6SjJaayoHqOjSfK9YRIJutsh?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cardss">
                    {/* <a href="#" > */}
                            <img className="card-img" src={CG} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Coordinate Geometry</h1>
                            <p className="card-text">
                            Here I have discussed Entire Coordinate Geometry in 15 minutes with NCERT solutions &amp; its Explanations, Examples and Practice Problems.
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/playlist?list=PL6_Q82ANVQs0l1pO9VQcNPVBjvkbk-Ue6", "_blank")}>Learn <span>&rarr;</span></button>
                            {/* <button className="card-btn" onClick={()=>window.open("https://drive.google.com/drive/folders/13aHaI7_cAtndtBwO0FqvXB9kxAMJ2SZf?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button> */}
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cardss">
                    {/* <a href="#" > */}
                            <img className="card-img" src={NCERT} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">NCERT Solutions</h1>
                            <p className="card-text">
                            It Contains all the solutions for className 9th Maths NCERT.
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/playlist?list=PL6_Q82ANVQs1ufqU6rC5U7eyIAt6UayYG", "_blank")}>Learn <span>&rarr;</span></button>
                            {/* <button className="card-btn" onClick={()=>window.open("https://drive.google.com/drive/folders/1AFRhr1G8_B4HfN3lAIjEFaAwOFmuXS2c?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        )
}

            export default className9;