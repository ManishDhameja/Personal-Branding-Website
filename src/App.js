import './App.scss';
// import Navbar from './components/Navbar/Navbar';
import { Route,Switch, Redirect} from 'react-router-dom';
// import Intro from './components/Intro/Intro';
import Home from './components/Home/Home';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
// import Testimonials from './components/Testimonials/Testimonials';
// import Portfolio from './components/Portfolio/Portfolio';
import EM3 from './components/Courses/SubCourses/EM-3';
import QT from './components/Courses/SubCourses/QT';
import EM1 from './components/Courses/SubCourses/EM-1';
import EM2 from './components/Courses/SubCourses/EM-2';
import EM4 from './components/Courses/SubCourses/EM-4';
import Class10 from './components/Courses/SubCourses/Class10';
import Class9 from './components/Courses/SubCourses/Class9';
import BasicMaths from './components/Courses/SubCourses/BasicMaths';
import ShortTricks from './components/Courses/SubCourses/ShortTrick';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { HashRouter } from 'react-router-dom';
// ..

const App = () => {
  AOS.init({
    offset: 200,
    duration: 2000
  })
  return (
    <div className="app">
      {/* <Home/> */}
      <HashRouter>
         <Switch>
          <Route path='/' component={Home} exact>
            {/* <Home /> */}
          </Route>
          {<Route path='/courses' component={Courses} exact>
            {/* <Courses /> */}
          </Route>}
          {/* 
           */}
          <Route path='/blogs' component={Blog} exact>
            {/* <Blog /> */}
          </Route> 
          <Route path='/about' component={About} exact >
            {/* <About /> */}
          </Route>
          <Route path='/contact' component={Contact} exact>
            {/* <Contact /> */}
          </Route> 
          <Route path='/EngineeringMathematics-3' component={EM3} exact>
            {/* <EM3 /> */}
          </Route> 
          <Route path='/EngineeringMathematics-1' component={EM1} exact>
            {/* <EM1 /> */}
          </Route> 
          <Route path='/EngineeringMathematics-2' component={EM2} exact>
            {/* <EM2 /> */}
          </Route> 
          <Route path='/EngineeringMathematics-4' component={EM4} exact>
            {/* <EM4 /> */}
          </Route> 
          <Route path='/class-9' component={Class9} exact>
            {/* <Class9 /> */}
          </Route> 
          <Route path='/class-10' component={Class10} exact>
            {/* <Class10 /> */}
          </Route> 
          <Route path='/basicmathematics' component={BasicMaths} exact>
            {/* <BasicMaths /> */}
          </Route> 
          <Route path='/shorttricks' component={ShortTricks} exact>
            {/* <ShortTricks /> */}
          </Route> 
          <Route path='/aptitude' component={QT} exact>
            {/* <ShortTricks /> */}
          </Route> 
          <Redirect to ="/" />
        </Switch> 
      </HashRouter>
    </div>

    
  );
}

export default App;
