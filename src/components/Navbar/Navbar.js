import React, { useState} from "react";
import "./Navbar.css";
import { Headerlist } from "./HeaderList";
import { NavLink } from "react-router-dom";
import Logo from '../../assets/aglog.jpeg'

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const headerlist = Headerlist.map(({ url, title }, index) => {
    return (
      <li onClick={()=>setClicked(false)} key={index} style={{paddingLeft:"15px"}}>
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

      </ul>
    </nav>


  );
};

export default Navbar;