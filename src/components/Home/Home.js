import './Home.scss';
import Navbar from '../Navbar/Navbar';
// import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Intro from '../Intro/Intro';
// import About from './components/About/About';
// import Courses from '../Courses/Courses';
// import Resources from './components/Resources/Resources';
import Email from '../Email/Email'
import Testimonials from '../Testimonials/Testimonials';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import ContactMe from '../ContactMe/ContactMe'

const Home = () => {
  return (
    <div className="container">
        <Navbar />
        <div className="sections">
          <Intro />
          <Portfolio/>
          <Email />
          <Testimonials/>
          <ContactMe/>
          <Footer/>
        </div>   
    </div>

    
  );
}

export default Home;
