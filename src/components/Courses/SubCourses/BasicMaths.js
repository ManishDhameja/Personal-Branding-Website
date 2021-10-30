import React from 'react';
import './SubCourseOne.css'
import D2 from '../../../assets/D2.jpg'
import Divisi from '../../../assets/Divisi.jpg'
import BI from '../../../assets/BI.jpg'
import SPLITTING from '../../../assets/SPLITTING.jpg'
import LCM from '../../../assets/LCM.jpg'
import PF from '../../../assets/PF.jpg'
import D from '../../../assets/NEW.jpg'
import CTSM from '../../../assets/CTSM.jpg'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const BasicMaths = () => {
    return (
        <div className="container">
            <div className="subcourse">
                <Navbar />
            </div>
                <h1 className="heading">
                    <span>B</span>
                    <span>A</span>
                    <span>S</span>
                    <span>I</span>
                    <span>C</span>
                    <span>M</span>
                    <span>A</span>
                    <span>T</span>
                    <span>H</span>
                    <span>S</span>
                </h1>
            <div className="grid">
                <div className="grid-item">
                    <div className="cardss">
                        {/* <a href="#" > */}
                            <img className="card-img" src={D} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Diffrentiation</h1>
                            <p className="card-text">
                            All the basic concepts of differentiation For Physics, For NEET starting from How to Apply Formulas, Quotient Rule of differentiation, Product Rule of differentiation, Chain Rule of differentiation, etc. 
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/watch?v=S9nY5-kZ9d8&list=PL6_Q82ANVQs3ipNH5gpFJjO6l3nZeSnoE&index=1&t=2s", "_blank")}>Learn <span>&rarr;</span ></button>
                            <button className="card-btn" onClick={()=>window.open("https://drive.google.com/file/d/1Oas1Rwg4HbiFXZZX_Z4r9mV7V6052xKK/view?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cardss">
                    {/* <a href="#" > */}
                            <img className="card-img" src={Divisi} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Divisiblity</h1>
                            <p className="card-text">
                            In this video, I have discussed Tricks For checking divisibility tests for 2,3,4,5,6,7,8,9,10,11 with examples of each.
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/watch?v=s8Z_quMpKv4&list=PL6_Q82ANVQs3ipNH5gpFJjO6l3nZeSnoE&index=2&t=2s", "_blank")}>Learn <span>&rarr;</span></button>
                            <button className="card-btn" onClick={()=>window.open("https://drive.google.com/file/d/1Tx43FgZGSIfMVbFEFXQN-3rRB70efYoD/view?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cardss">
                    {/* <a href="#" > */}
                            <img className="card-img" src={LCM} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">How to Find LCM</h1>
                            <p className="card-text">
                            In this video, I have discussed how to Find LCM also discussed its three simple tricks such that you can do whichever you like also, discussed its examples and some major questions in which students generally do mistakes.
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/watch?v=MPqY25fszC4&list=PL6_Q82ANVQs3ipNH5gpFJjO6l3nZeSnoE&index=3", "_blank")}>Learn <span>&rarr;</span></button>
                            {/* <button className="card-btn" onClick={()=>window.open("https://drive.google.com/drive/folders/1LBqQeJ6C7042SW_w-WoWMzAjI6wyRRcT?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button> */}
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cardss">
                    {/* <a href="#" > */}
                            <img className="card-img" src={CTSM} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Completing the Square Method</h1>
                            <p className="card-text">
                            In this video, In 5 minutes I have discussed the Step by Step technique to solve questions using completing the square method with its examples. This is a very useful method to find the roots of any quadratic equation, generally used in className 10th.
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/watch?v=3yYnTpiV_qw&list=PL6_Q82ANVQs3ipNH5gpFJjO6l3nZeSnoE&index=4", "_blank")}>Learn <span>&rarr;</span></button>
                            {/* <button className="card-btn" onClick={()=>window.open("https://drive.google.com/drive/folders/1LBqQeJ6C7042SW_w-WoWMzAjI6wyRRcT?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button> */}
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cardss">
                    {/* <a href="#" > */}
                            <img className="card-img" src={D2} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Diffrentiation (IMP Questions)</h1>
                            <p className="card-text">
                            Practice Problems of Differentiation, Differentiation Most Important Questions. All Repeated Questions in Exam, Questions Based on  Quotient Rule, Product Rule, Chain Rule, etc.
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/watch?v=-8eyerY4SHg&list=PL6_Q82ANVQs3ipNH5gpFJjO6l3nZeSnoE&index=5", "_blank")}>Learn <span>&rarr;</span></button>
                            {/* <button className="card-btn" onClick={()=>window.open("https://drive.google.com/drive/folders/1Sd4SwTwSRq1fplGn4l9LILJSOTkur3HP?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button> */}
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cardss">
                    {/* <a href="#" > */}
                            <img className="card-img" src={SPLITTING} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Splitting the Middle Term</h1>
                            <p className="card-text">
                                Here I have discussed how to solve Splitting the Middle Term Just in 3 Easy Steps with its most important examples!!!
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/watch?v=191mwDGQkIc&list=PL6_Q82ANVQs3ipNH5gpFJjO6l3nZeSnoE&index=6", "_blank")}>Learn <span>&rarr;</span></button>
                            {/* <button className="card-btn" onClick={()=>window.open("https://drive.google.com/drive/folders/1LBqQeJ6C7042SW_w-WoWMzAjI6wyRRcT?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button> */}
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cardss">
                    {/* <a href="#" > */}
                            <img className="card-img" src={BI} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Basic Integration</h1>
                            <p className="card-text">
                            Here I have discussed Basic Integration  Formulas, Integration by parts, Integration by Substitution, Definite Integration you can do  Quick Revision for CBSE 12 Maths &amp; Competitive Exams You can also watch this video if you wanna learn Integration in Physics.
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/watch?v=rZVYflb0Fbo&list=PL6_Q82ANVQs3ipNH5gpFJjO6l3nZeSnoE&index=7", "_blank")}>Learn <span>&rarr;</span></button>
                            <button className="card-btn" onClick={()=>window.open("https://drive.google.com/file/d/1xSU1lyORO5wG4X1L-Q-ZVEJnaPk6mllY/view?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cardss">
                    {/* <a href="#" > */}
                            <img className="card-img" src={PF} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Partial Fraction</h1>
                            <p className="card-text">
                            In this video,  I have discussed about Partial Fraction what Partial Fraction is, how to solve Partial Fraction, all different types of partial fractions  Fully Explained in Hindi  with Examples &amp; Notes.
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/watch?v=f7VXHJMiqeM&list=PL6_Q82ANVQs3ipNH5gpFJjO6l3nZeSnoE&index=8", "_blank")}>Learn <span>&rarr;</span></button>
                            <button className="card-btn" onClick={()=>window.open("https://drive.google.com/file/d/1ghqWfMQFn9m8SYHtALl1A7_e5_ERFSwf/view?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        )
}

            export default BasicMaths;





























            