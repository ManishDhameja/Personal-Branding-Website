import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Courses.scss'
import Icon1 from '../../assets/M-1.png'
import m4 from '../../assets/M-4.png'
import m3 from '../../assets/M-3.png'
import c9 from '../../assets/sample3.png'
import c10 from '../../assets/sample4.png'
import Basic from '../../assets/Basicm.png'
import ST from '../../assets/STT.png'
import m2 from '../../assets/M--2.png'
import Footer from '../Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    once: true,
  mirror: false,
  duration:1500,
  offset:150
})

const Courses = () => {
    return (
        <div className="courses">
            <div className="cn">
                <Navbar />
            </div>
            {/* <h1 class="heading">
                    <span>0</span>
                    <span>9</span>
                    <span>-</span>
                    <span>U</span>
                    <span>N</span>
                    <span>I</span>
                    <span>T</span>
                    <span>S</span>
                </h1> */}
            <div className="containers-fluid">
                <div className="row my-4 mx-4">
                    <div className="col-md-6 col-lg-4 text-center" data-aos="fade-left">
                        <img width="200" height="178"  src={Icon1} alt=""/>
                        {/* <h2>E</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/courses"> */}
                            <button className="btns btn-outline-danger" onClick={()=> window.open("/EngineeringMathematics-1", "_blank")}>Start Learning »
                            </button>
                        {/* </a> */}
                        
                    </div>
                    <div className="col-md-6 col-lg-4 text-center" data-aos="fade-up">
                        <img width="200" height="180" src={m2} alt=""/>
                        {/* <h2>Python Practice Programs With Logic &amp;</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                            <button className="btns btns-outline-danger" onClick={()=> window.open("/EngineeringMathematics-2", "_blank")}>Start Learning »
                            </button>
                        {/* </a> */}
                        {/* </p> */}
                    </div>
                    <div className="col-md-6 col-lg-4 text-center" data-aos="fade-right">
                        <img width="200" height="180" class="rounded-circle" src={m3} alt=""/>
                        {/* <h2>Python Practice Programs With Logic &amp;</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                            <button className="btns btns-outline-danger" onClick={()=> window.open("/EngineeringMathematics-3", "_blank")}>Start Learning »
                            </button>
                        {/* </a> */}
                        {/* </p> */}
                    </div>
                    <div className="col-md-6 col-lg-4 text-center" data-aos="fade-left">
                        <img width="200" height="180" src={m4} alt=""/>
                        {/* <h2>Python Practice Programs With Logic &amp;</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                            <button className="btns btns-outline-danger" onClick={()=> window.open("/EngineeringMathematics-4", "_blank")}>Start Learning »
                            </button>
                        {/* </a> */}
                        {/* </p> */}
                    </div>
                    <div className="col-md-6 col-lg-4 text-center" data-aos="fade-up">
                        <img width="200" height="180" src={c9} alt=""/>
                        {/* <h2>Python Practice Programs With Logic &amp;</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                            <button className="btns btns-outline-danger" onClick={()=> window.open("/class-9", "_blank")}>Start Learning »
                            </button>
                        {/* </a> */}
                        {/* </p> */}
                    </div>
                    <div className="col-md-6 col-lg-4 text-center" data-aos="fade-right">
                        <img width="200" height="180" src={c10} alt=""/>
                        {/* <h2>Python Practice Programs With Logic &amp;</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                            <button className="btns btns-outline-danger" onClick={()=> window.open("/class-10", "_blank")}>Start Learning »
                            </button>
                        {/* </a> */}
                        {/* </p> */}
                    </div>
                    <div className="col-md-6 col-lg-4 text-center" data-aos="fade-left">
                        <img width="200" height="120" src={Basic} alt=""/>
                        {/* <h2>Python Practice Programs With Logic</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                            <button className="btns btns-outline-danger" onClick={()=> window.open("/basicmathematics", "_blank")}>Start Learning »
                            </button>
                        {/* </a> */}
                        {/* </p> */}
                    </div>
                    <div className="col-md-6 col-lg-4 text-center" data-aos="fade-up">
                        <img width="200" height="120" src={ST} alt=""/>
                        {/* <h2>Python Practice Programs With Logic &amp;</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                            <button className="btns btns-outline-danger" onClick={()=> window.open("/shorttricks", "_blank")}>Start Learning »
                            </button>
                        {/* </a> */}
                        {/* </p> */}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Courses
