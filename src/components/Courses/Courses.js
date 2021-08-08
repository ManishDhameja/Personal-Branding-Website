import React from 'react'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'
import './Courses.scss'
// import { Link } from 'react-router-dom' 
import Icon1 from '../../assets/Group 257.png'
import m4 from '../../assets/Group 260.png'
import m3 from '../../assets/Group 259.png'
import c9 from '../../assets/Group 261.png'
import c10 from '../../assets/Group 262.png'
import Basic from '../../assets/Group 263.png'
import ST from '../../assets/Group 264.png'
import m2 from '../../assets/Group 258.png'
import AT from '../../assets/Group 265.png'
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
                    <div className="col-md-6 col-lg-4 text-center car">
                        <Link to={"/EngineeringMathematics-1"}>
                            <img style={{width:"120%"}} src={Icon1} alt=""/>
                        </Link>
                        {/* <h2>E</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/courses"> */}
                        {/* <Link to = {"/EngineeringMathematics-1"}>
                            <button className="btns btn-outline-danger">Start Learning »
                            </button>
                        </Link> */}
                        {/* </a> */}
                        
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car" >
                    <Link to={"/EngineeringMathematics-2"}>
                            <img style={{width:"120%"}} src={m2} alt=""/>
                        </Link>
                        {/* <h2>Python Practice Programs With Logic &amp;</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                        {/* <Link to ={"/EngineeringMathematics-2"}>
                            <button className="btns btns-outline-danger">Start Learning »
                            </button>
                        </Link> */}
                        {/* </a> */}
                        {/* </p> */}
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car">
                    <Link to = {"/EngineeringMathematics-3"}>
                            <img style={{width:"120%"}} src={m3} alt=""/>
                        </Link>
                        {/* <h2>Python Practice Programs With Logic &amp;</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                        {/* <Link to ={"/EngineeringMathematics-3"}>
                            <button className="btns btns-outline-danger">Start Learning »
                            </button>
                        </Link> */}
                        {/* </a> */}
                        {/* </p> */}
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car">
                    <Link to={"/EngineeringMathematics-4"}>
                            <img style={{width:"120%"}} src={m4} alt=""/>
                        </Link>
                        {/* <h2>Python Practice Programs With Logic &amp;</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                        {/* <Link to ={"/EngineeringMathematics-4"}>

                            <button className="btns btns-outline-danger">Start Learning »
                            </button>
                        </Link> */}
                        {/* </a> */}
                        {/* </p> */}
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car" >
                    <Link to={"/class-9"}>
                            <img style={{width:"120%"}} src={c9} alt=""/>
                        </Link>
                        {/* <h2>Python Practice Programs With Logic &amp;</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                        {/* <Link to= {"/class-9"}>

                            <button className="btns btns-outline-danger">Start Learning »
                            </button>
                        </Link> */}
                        {/* </a> */}
                        {/* </p> */}
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car">
                    <Link to={"/class-10"}>
                            <img style={{width:"120%"}} src={c10} alt=""/>
                        </Link>
                        {/* <h2>Python Practice Programs With Logic &amp;</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                        {/* <Link to ={"/class-10"}>
                            <button className="btns btns-outline-danger" >Start Learning »
                            </button>
                        </Link> */}
                        {/* </a> */}
                        {/* </p> */}
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car" >
                    <Link to={"/basicmathematics"}>
                            <img style={{width:"120%"}} src={Basic} alt=""/>
                        </Link>
                        {/* <h2>Python Practice Programs With Logic</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                        {/* <Link to ={"/basicmathematics"}>
                            <button className="btns btns-outline-danger">Start Learning »
                            </button>
                        </Link> */}
                        {/* </a> */}
                        {/* </p> */}
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car" >
                    <Link to={"/shorttricks"}>
                            <img style={{width:"120%"}} src={ST} alt=""/>
                        </Link>
                        {/* <h2>Python Practice Programs With Logic &amp;</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                        {/* <Link to = {"/shorttricks"} >
                            <button className="btns btns-outline-danger" >Start Learning »
                            </button>
                        </Link> */}
                        {/* </a> */}
                        {/* </p> */}
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car" >
                    <Link to={"/aptitude"}>
                            <img style={{width:"120%"}} src={AT} alt=""/>
                        </Link>
                        {/* <h2>Python Practice Programs With Logic &amp;</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                        {/* <Link to = {"/shorttricks"} >
                            <button className="btns btns-outline-danger" >Start Learning »
                            </button>
                        </Link> */}
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
