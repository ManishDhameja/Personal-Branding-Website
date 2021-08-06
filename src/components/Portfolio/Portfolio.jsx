import React,{Component} from 'react';
// import { useEffect } from 'react';
import './Portfolio.scss';
import Aos from 'aos';
import svg from '../../assets/1.png'
import svg2 from '../../assets/2.png'
import svg3 from '../../assets/3.png'
import svg4 from '../../assets/4.png'

Aos.init({
    once: true,
  mirror: false,
  duration:1500,
  offset:150
})
class Portfolio extends Component  {
    
    // gsap.registerPlugin(ScrollTrigger);

    // useEffect(()=>{
    //     let t2 = gsap.timeline({ scrollTrigger:'header'});

    //     t2.from('header',{duration:2,delay:0.5,x:60})
    // },[])

    render(){
        return (
            <div className="Portfolio" id="portfolio">
                <div className="course-block block liquid_html  " id="block-11363519">
                    <div className="page-container">
                        <div className="featurettes">
                            <header >
                                <div className="text-gradient">&lt; WHY AYUSH GHURKA? &gt;</div>
                                <h2>Clear, Concise, Comprehensive, and Practical with No Fluff!</h2>
                            </header>
                            <div className="featurette">
                                <div>
                                    <div className="featurette-highlight" >Easy to Browse</div>
                                    <h3><strong>Novice-friendly and Simple learning Interface</strong> </h3>
                                    <p>
                                    The website is easy to navigate and you can find your learning resources with just a few clicks. Ayush's students praise his ability to break down complex topics into simple and digestible lessons that anyone can understand. 
                                    </p>
                                </div>
                                <img src={svg} alt=""/>
                            </div>
                            <div className="featurette">
                                <div>
                                    <div className="featurette-highlight">Basics driven content</div>
                                    <h3><strong>Concise and Precise</strong></h3>
                                    <p>
                                    With freedom to choose your own course we focus on strengthening your basics by providing handwritten notes along with video lectures.
                                    </p>
                                </div>
                                <img src={svg2} alt="" />
                            </div>
                            <div className="featurette">
                                <div>
                                    <div className="featurette-highlight">Teacher assuming a role of a friend</div>
                                    <h3><strong>Mentor as your Friend</strong></h3>
                                    <p>
                                    Learning with Ayush is no longer a task but yes pleasure. His calm, friendly, and approachable way is one of the reasons students love to learn from him.
                                    </p>
                                </div>
                                <img src={svg3} alt=""/>
                            </div>
                            <div className="featurette">
                                <div>
                                    <div className="featurette-highlight">Fun Learning and Pleasing Videos</div>
                                    <h3><strong>Interactive and collaborative</strong></h3>
                                    <p>
                                    Flipped classrooms, gamified lessons, animations and quizzes will keep you engaging. You can even ask your doubts and give suggestions for the same. 
                                    </p>
                                </div>
                                <img src={svg4} alt="" />
                            </div>
                            
                        </div>
                    </div>






                </div>
            </div>
    )
        }
}

export default Portfolio
