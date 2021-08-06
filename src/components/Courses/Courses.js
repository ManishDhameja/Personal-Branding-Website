import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Courses.scss'
import { Link } from 'react-router-dom' 
import Icon1 from '../../assets/green m11.png'
import m4 from '../../assets/green m4.png'
import m3 from '../../assets/green m3.png'
import c9 from '../../assets/green 9th.png'
import c10 from '../../assets/green 10th.png'
import Basic from '../../assets/green basic math.png'
import ST from '../../assets/green short trick.png'
import m2 from '../../assets/green m2.png'
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
                        <img style={{width:"90%"}} src={Icon1} alt=""/>
                        {/* <h2>E</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/courses"> */}
                        <Link to = {"/EngineeringMathematics-1"}>
                            <button className="btns btn-outline-danger">Start Learning »
                            </button>
                        </Link>
                        {/* </a> */}
                        
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car" >
                        <img style={{width:"90%"}} src={m2} alt=""/>
                        {/* <h2>Python Practice Programs With Logic &amp;</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                        <Link to ={"/EngineeringMathematics-2"}>
                            <button className="btns btns-outline-danger">Start Learning »
                            </button>
                        </Link>
                        {/* </a> */}
                        {/* </p> */}
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car">
                        <img style={{width:"90%"}} src={m3} alt=""/>
                        {/* <h2>Python Practice Programs With Logic &amp;</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                        <Link to ={"/EngineeringMathematics-3"}>
                            <button className="btns btns-outline-danger">Start Learning »
                            </button>
                        </Link>
                        {/* </a> */}
                        {/* </p> */}
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car">
                        <img style={{width:"90%"}} src={m4} alt=""/>
                        {/* <h2>Python Practice Programs With Logic &amp;</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                        <Link to ={"/EngineeringMathematics-4"}>

                            <button className="btns btns-outline-danger">Start Learning »
                            </button>
                        </Link>
                        {/* </a> */}
                        {/* </p> */}
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car" >
                        <img style={{width:"90%"}} src={c9} alt=""/>
                        {/* <h2>Python Practice Programs With Logic &amp;</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                        <Link to= {"/class-9"}>

                            <button className="btns btns-outline-danger">Start Learning »
                            </button>
                        </Link>
                        {/* </a> */}
                        {/* </p> */}
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car">
                        <img style={{width:"90%"}} src={c10} alt=""/>
                        {/* <h2>Python Practice Programs With Logic &amp;</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                        <Link to ={"/class-10"}>
                            <button className="btns btns-outline-danger" >Start Learning »
                            </button>
                        </Link>
                        {/* </a> */}
                        {/* </p> */}
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car" >
                        <img style={{width:"90%"}} src={Basic} alt=""/>
                        {/* <h2>Python Practice Programs With Logic</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                        <Link to ={"/basicmathematics"}>
                            <button className="btns btns-outline-danger">Start Learning »
                            </button>
                        </Link>
                        {/* </a> */}
                        {/* </p> */}
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car" >
                        <img style={{width:"90%"}} src={ST} alt=""/>
                        {/* <h2>Python Practice Programs With Logic &amp;</h2> */}
                        {/* <p>Python Practice Programs With Logic &amp; Explanation In Hindi</p> */}
                        {/* <p><a href="/videos/python-practice-programs-in-hindi-1"> */}
                        <Link to = {"/shorttricks"} >
                            <button className="btns btns-outline-danger" >Start Learning »
                            </button>
                        </Link>
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
