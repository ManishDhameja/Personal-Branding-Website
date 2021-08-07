import React, { useState} from "react";
import "./Navbar.css";
// import {gsap} from 'gsap'
import { Headerlist } from "./HeaderList";
import { NavLink } from "react-router-dom";
import Logo from '../../assets/aglog.jpeg'
// import {
//   FaYoutubeSquare,
// } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

  // useEffect(() => {
  //   let t1 = gsap.timeline();

  //   t1.from('.header-list li',{duration:2,delay:1,y:30, ease:'expo.out',stagger:0.2 })
    
  // }, [])

  const [clicked, setClicked] = useState(false)
  const headerlist = Headerlist.map(({ url, title }, index) => {
    return (
      <li onClick={()=>setClicked(false)} key={index}>
        <NavLink exact to={url} activeClassName="active">{title}</NavLink>
      </li>
    )
  });
  const handleClicked =() =>{
    setClicked(!clicked)
  }
  return (
    <nav>
      <div className="logo">
        < a href ="/"><img className="imagess" src={Logo} alt=""></img></a>
      </div>
      <div className="header-icon" onClick={handleClicked}>
        <i className={clicked ? "fas fa-times" :"fas fa-bars"}></i>
      </div>
      <ul className={ clicked ? "header-list": "header-list close"}>
        {headerlist}
        {/* <div className="Youtube">
          <div class="g-ytsubscribe" data-channelid="UCVrnkjUlLE7h0zcdn1kM6tA" data-layout="default" data-count="default"></div>
        </div> */}

      </ul>
    </nav>


  );
};

export default Navbar;