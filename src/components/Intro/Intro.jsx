import "./Intro.scss";
import { init } from "ityped";
import { useHistory } from "react-router-dom";
import { useEffect, useRef } from "react";
import Image from '../../assets/ayushh.png'
// import Profile from '../../assets/picture.jpg';
// import Down from '../../assets/down.png'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init({
  once: true,
mirror: false,
duration:2000,
offset:150
});

export default function Intro() {

  


  let history = useHistory();

  const textRef = useRef();

  useEffect(() => {

    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Mathematics Tutor", "Content Creator", "Passionate Mentor"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="right" >
        <div className="wrapper">
          <div className="border" >
            <h2>Hi There, I'm</h2>
            <h1>Ayush Ghurka</h1>
            <h3>
              I am a <span ref={textRef}></span>
            </h3>
            {/* <div className="btn"> */}
            <button onClick={() => history.push('/about')} >About me</button>
            <div className="bg"></div>
            <div className="bg-gradient"></div>
            {/* </div> */}
          </div>
          {/* <a href="#testimonials">
            <img src={Down} alt="" />
          </a> */}

          <div className="social-iconed" >
            <a href="https://www.facebook.com/ghurkaayush/" alt="" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCVrnkjUlLE7h0zcdn1kM6tA" alt="" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/ayushghurka/" alt="" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/ayushghurka" alt="" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/ayushghurka" alt="" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="left">
        <div className="home__img">
          <img src={Image} alt="Ayush Ghurka" />
        </div>
      </div>
    </div>
  );
}