import React from 'react';
import './SubCourseOne.css'
import Lecture from '../../../assets/Time.jpg'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const QT = () => {
    return (
        <div>
            <div className="subcourse">
                <Navbar />
            </div>
            <h1 className="heading">
                <span>A</span>
                <span>P</span>
                <span>T</span>
                <span>I</span>
                <span>T</span>
                <span>U</span>
                <span>D</span>
                <span>E</span>
            </h1>
            <div className="grid">
                <div className="grid-item">
                    <div className="cardss">
                        {/* <a href="#" > */}
                            <img className="card-img" src={Lecture} alt="Rome" />
                        {/* </a> */}
                        <div className="card-content">
                            <h1 className="card-header">Time &amp; Work</h1>
                            <p className="card-text">
                            Here I have discussed the real-world use of the topic time and work. Also covered all of its subtopics like Work &amp; Wages, Formula Based questions etc. with examples, problems and handwritten notes.
                            </p>
                            <button className="card-btn" onClick={() => window.open("https://www.youtube.com/playlist?list=PL6_Q82ANVQs1XEcQPiucSYc7Pmxf4mA5q", "_blank")}>Learn <span>&rarr;</span ></button>
                            <button className="card-btn" onClick={() => window.open("https://drive.google.com/drive/folders/1Sd4SwTwSRq1fplGn4l9LILJSOTkur3HP?usp=sharing", "_blank")}>Resources <span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default QT;