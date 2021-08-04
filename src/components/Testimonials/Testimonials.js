import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.scss";
import Parwani from '../../assets/parwami.jpg'
import Hirani from '../../assets/hirani.jpg'
import Godani from '../../assets/godani.jpg'
import Shaily from '../../assets/Shaily.jpg'
import Avi from '../../assets/avi.jpeg'
import Shivangi from '../../assets/shivangi.jpg'
import Aish from '../../assets/aish.jpg'
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    once: true,
  mirror: false,
  duration:1500,
  offset:150
})

const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonial = () => {
  return (
    <div 
      className="testimonial" id="testimonials"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="content" style={{ width: "50%", textAlign: "center" }} data-aos="fade-up">
        <h1 style={{ marginTop:48, marginBottom: 60 }}>TESTIMONIALS</h1>

        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots data-aos="fade-up">
          <Card 
            img={Shaily}
            description="Ayush sir has a great methodology of teaching, his way of explaining the concepts from scratch to an advance level is what makes his videos loved by everyone. One could easily pass with flying colours by Only completing the playlist uploaded by Sir. Thankyou so much for all your efforts and I would recommend everyone who is stuck in the concepts of mathematics to visit his channel once "
            name = "Shaily Bhaiya"
            designation= " CS Undergrad (SGSITS)"/>
          <Card 
            img={Godani}
            description="He is very helpful as a teacher and try to be available personally for doubts. His videos on You Tube are also very helpful for mathematics. I strongly recommend everyone who are finding difficulties in mathematics to learn from him and his videos. His notes are also very helpful."
            name = "Mohan Godani"
            designation= "EI Undergrad (SGSITS)"/>
          <Card img={Parwani}
            description="Ayush Sir is highly encouraging and supportive. He solves complex problems in simple and understandable ways. He guides the students in the best possible way and I would love to see his YouTube channel grow."
            name = "Ayush Parwani"
            designation= "EC Undergrad (SGSITS)" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg"
            description="Ayush Sir is highly encouraging and supportive. He solves complex problems in simple and understandable ways. He guides the students in the best possible way and I would love to see his YouTube channel grow."
            name = "Ayush Parwani"
            designation= "Analyst" />
          <Card img={Avi}
            description="If  you want to learn maths with fun then I strongly recommend ayush ghurka youtube channel. His method of teaching to students is easier than any other and he is so friendly that there is no fear to ask any questions in front of all class and always available for last minute doubts.
            Definitely best teacher for maths and any other tooo..........🤗"
            name = "Avi Chourasiya"
            designation= "CS Undergrad (LNCT)" />
          <Card img={Hirani}
            description="Ayush sir is a great confidant and mentor whose guidance helped me a lot. He is highly enthusiastic, brilliant and hard working person.
            He teaches every problem in an easy and proper way so that we could't find any difficulty even in solving complex problems. He is always ready to solve our doubts and to boost our confidence whenever needed."
            name = "Vishita Hirani"
            designation= "Mech Undergrad (SGSITS)" />
          <Card img={Shivangi}
            description="I have been through a lot of videos of Ayush Ghurka sir on his Youtube channel and found them very sophisticated. The hand-written notes that he provides for free, are concise as well. I am thankful for him being a mindful senior and will always be grateful for the guidance he provides to all his students and juniors."
            name = "Shivangi Jain"
            designation= "EI Undergrad (SGSITS)" />
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

      <p className="desc">
        {props.description}
      </p>
      <p className="description">
        <span className= "span">{props.name}</span> ,
        {props.designation}
      </p>
      


    </div>
  );
};

export default Testimonial;