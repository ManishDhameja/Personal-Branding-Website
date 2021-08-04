import React from 'react';
import './SubCourseOne.css'
import SST from '../../../assets/SST.jpg'
import MT from '../../../assets/MT.jpg'
import MDA from '../../../assets/MDA.jpg'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const ShortTricks = () => {
    return (
        <div>
            <div className="subcourse">
                <Navbar />
            </div>
                <h1 className="heading">
                    <span>S</span>
                    <span>-</span>
                    <span>T</span>
                    <span>R</span>
                    <span>I</span>
                    <span>C</span>
                    <span>K</span>
                    <span>S</span>
                </h1>
            <div className="grid">
                <div className="grid-item">
                    <div className="cardss">
                        
                            <img className="card-img" src={SST} alt="Rome" />
                        
                        <div className="card-content">
                            <h1 className="card-header">Vedic Maths use to Find Square</h1>
                            <p className="card-text">
                            Here I have discussed a Vedic mathematics Trick to find square of a number  in seconds and increase your calculation speed. 
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/playlist?list=PL6_Q82ANVQs0GXO5Q-vw62VVBSOefVAr3", "_blank")}>Learn <span>&rarr;</span ></button>
                            {/* <button className="card-btn" onClick={()=>window.open("https://drive.google.com/file/d/1j7PhOdK3bIL-34xr7E79qMQINJANmFWD/view?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button> */}
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cardss">
                    {/* <a href="#" > */}
                            <img className="card-img" src={MT} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Multiply numbers in few seconds</h1>
                            <p className="card-text">
                            Here I have discussed a 7 different multiplication tricks of  Vedic mathematics such that you can increase your calculation speed .
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/playlist?list=PL6_Q82ANVQs0GXO5Q-vw62VVBSOefVAr3", "_blank")}>Learn <span>&rarr;</span></button>
                            {/* <button className="card-btn" onClick={()=>window.open("https://drive.google.com/drive/folders/1mkmrHWAsxPkvEns8pn_qnWrTYPbYHeUN?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button> */}
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cardss">
                    {/* <a href="#" > */}
                            <img className="card-img" src={MDA} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Multiply, Add &amp; Substract</h1>
                            <p className="card-text">
                            Here I have discussed a Vedic mathematics Trick of addition subtraction multiplication & division to increase your calculation speed .
                            </p>
                            <button className="card-btn" onClick={()=>window.open("https://www.youtube.com/playlist?list=PL6_Q82ANVQs0GXO5Q-vw62VVBSOefVAr3", "_blank")}>Learn <span>&rarr;</span></button>
                            {/* <button className="card-btn" onClick={()=>window.open("https://drive.google.com/drive/folders/1_YhRJLMS6SjJaayoHqOjSfK9YRIJutsh?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button> */}
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
        )
}

            export default ShortTricks;