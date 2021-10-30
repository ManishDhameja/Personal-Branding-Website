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
            <div className="containers-fluid">
                <div className="row my-4 mx-4">
                    <div className="col-md-6 col-lg-4 text-center car">
                        <Link to={"/EngineeringMathematics-1"}>
                            <img style={{width:"120%"}} src={Icon1} alt=""/>
                        </Link>
                        
                        
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car" >
                    <Link to={"/EngineeringMathematics-2"}>
                            <img style={{width:"120%"}} src={m2} alt=""/>
                        </Link>
                        
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car">
                    <Link to = {"/EngineeringMathematics-3"}>
                            <img style={{width:"120%"}} src={m3} alt=""/>
                        </Link>
                        
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car">
                    <Link to={"/EngineeringMathematics-4"}>
                            <img style={{width:"120%"}} src={m4} alt=""/>
                        </Link>
                        
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car" >
                    <Link to={"/class-9"}>
                            <img style={{width:"120%"}} src={c9} alt=""/>
                        </Link>
                        
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car">
                    <Link to={"/class-10"}>
                            <img style={{width:"120%"}} src={c10} alt=""/>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car" >
                    <Link to={"/basicmathematics"}>
                            <img style={{width:"120%"}} src={Basic} alt=""/>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car" >
                    <Link to={"/shorttricks"}>
                            <img style={{width:"120%"}} src={ST} alt=""/>
                        </Link>
                        
                    </div>
                    <div className="col-md-6 col-lg-4 text-center car" >
                    <Link to={"/aptitude"}>
                            <img style={{width:"120%"}} src={AT} alt=""/>
                        </Link>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Courses
