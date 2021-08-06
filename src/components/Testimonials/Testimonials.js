import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.scss";
// import Path from '../../assets/Path.png'
import Parwani from '../../assets/parwami.jpg'
import Hirani from '../../assets/hirani.jpg'
import Godani from '../../assets/Mohann.jpeg'
import Shaily from '../../assets/Shaily.jpg'
import Avi from '../../assets/avi.jpeg'
// import Shivangi from '../../assets/shivangi.jpg'
import Aish from '../../assets/aish.jpg'
import usa from '../../assets/usa.jpeg'
import Manish from '../../assets/Manish.jpg'
import prag from '../../assets/prag.jpg'
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    once: true, 
  mirror: false,
  duration:1000,
  offset:150
})

const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px", position:"relative", top:"51px", right:"6px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px", position:"relative", top:"49px", left:"15px" }} />
    </div>
  );
};
const Testimonial = () => {
  return (
    <div 
      className="testimonial" id="testimonials"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="content" style={{ width: "50%", textAlign: "center" }}>
        <h1 style={{ marginTop:48, marginBottom: 35, marginLeft: -15, marginRight: -15 }}>TESTIMONIALS</h1>

        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots >
          <Card 
            img={usa}
            description="Ayush Sir is a great help to me in many of the chapters that need clarification. He always assists me with the doubts .While in school when we learn something, we sometimes have doubts that need to be solved but we aren't able to get that help,  Ayush Sir gives one-on-one assistance and also gives a deep understanding of the topic using examples, tests, etc. All in all he is a great teacher. "
            name = "Akshara Govil"
            designation= " Rose Hill Middle School Redmond, Washington"/>
            <Card 
              img={Manish}
              description="Ayush sir has a great methodology of teaching, his way of explaining the concepts from scratch to an advance level is what makes his videos loved by everyone. One could easily pass with flying colours by Only completing the playlist uploaded by Sir. Thankyou so much for all your efforts and I would recommend everyone who is stuck in the concepts of mathematics to visit his channel once "
              name = "Manish Dhameja"
              designation= " EI Undergrad (SGSITS)"/>
          <Card 
            img={Shaily}
            description="Ayush sir has a great methodology of teaching, his way of explaining the concepts from scratch to an advance level is what makes his videos loved by everyone. One could easily pass with flying colours by Only completing the course uploaded by Sir. Thankyou so much for all your efforts and I would recommend everyone who is stuck in the concepts of mathematics to visit his channel once "
            name = "Shaily Bhaiya"
            designation= " CS Undergrad (SGSITS)"/>
          <Card 
            img={prag}
            description="Ayush Sir's mathematics videos have proven to be a tremendous help to me. There are many tough topics in the course but he teaches them in a way that is easier to grasp and the concepts become clearer. He works so hard on providing the videos and is always ready to lend a helping hand to clear personal doubts."
            name = "Praggati Ghosh"
            designation= " EI Undergrad (SGSITS)"/>
          <Card 
            img={Godani}
            description="He is very helpful as a teacher and try to be available personally for doubts. His Courses are also very helpful for mathematics. I strongly recommend everyone who are finding difficulties in mathematics to learn from him and his videos."
            name = "Mohan Godani"
            designation= "EI Undergrad (SGSITS)"/>
          <Card img={Parwani}
            description="Ayush Sir is highly encouraging and supportive. He solves complex problems in simple and understandable ways. He guides the students in the best possible way and I love to learn from his notes."
            name = "Ayush Parwani"
            designation= "EC Undergrad (SGSITS)" />
          <Card img={Avi}
            description="If  you want to learn maths with fun then I strongly recommend ayush ghurka sir. His method of teaching to students is easier than any other and he is so friendly that there is no fear to ask any questions in front of all class and always available for last minute doubts.
            Definitely best teacher for maths and any other tooo..........🤗"
            name = "Avi Chourasiya"
            designation= "CS Undergrad (LNCT)" />
          <Card img={Hirani}
            description="Ayush sir is a great confident and mentor whose guidance helped me a lot. He is highly enthusiastic, brilliant and hard working person.
            He teaches every problem in an easy and proper way so that we could't find any difficulty even in solving complex problems. He is always ready to solve our doubts and to boost our confidence whenever needed."
            name = "Vishita Hirani"
            designation= "Mech Undergrad (SGSITS)" />
          <Card img={Aish}
            description="Ayush sir is really an amazing teacher, he explains every concept clearly, gives sufficient questions to practice and is always available for clearing doubts...
            He provided with high quality notes after which I don't need to go through the books because he make notes after referring 2-3 books, one of the most hardworking teacher I know..."
            name = "Aishwarya Gupta"
            designation= "EI Undergrad (SGSITS)" />
        </Slider>
      </div>
    </div>
  );
};

const Card = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={props.img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />

      <p className="description">
        <span className= "span">{props.name}</span> ,<br></br>
        {props.designation}
      </p>
      <p className="desc">
        {props.description}
      </p>
      


    </div>
  );
};

export default Testimonial;