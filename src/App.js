import "./App.css";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebook, FaPhoneSquareAlt, FaGithub } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";
import Project1Pic from './images/Project1Pic.png';
import Project2Pic from './images/Project2Pic.png';
import Project3Pic from './images/Project3Pic.png';
import Project4Pic from './images/Project4Pic.png';
import AboutMeArt from './images/AboutMeArt.png';
import AboutMeBrand from './images/AboutMeBrand.png';
import AmyTitle from './images/AmyTitle.png';

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <a href=".logo">logo</a>
          <a href=".about-container">About</a>
          <a href=".projects-container">Software Development</a>
          <a href=".connect-container">Contact Me</a>
        </header>

        <container className='main-container'>
            <img src={AmyTitle} alt="AmyTitle"/>
        </container>

          <h2>About Me</h2>
        <container className='about-container'>
          <section className='about-section'>
            <img src={AboutMeArt} alt="AboutMeArt"/>
            <img src={AboutMeBrand} alt="AboutMeBrand"/>
          </section>
        </container>

          <h2>Select Projects</h2>
        <container className='projects-container'>
          <section className='projects-section'>
            <img src={Project1Pic} alt="project1pic"/>
            <img src={Project2Pic} alt="project2pic"/>
            <img src={Project3Pic} alt="project3pic"/>
            <img src={Project4Pic} alt="project4pic"/>
          </section>
        </container>

        <container className='connect-container'>
          <hr/>
          <h2>Let's Connect!</h2>
        </container>

        <footer>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <FaPhoneSquareAlt size="1.8em" color="black" />
          </a>
          <a href="mailto:someone@yoursite.com" target="_blank" rel="noreferrer">
            <GrMailOption size="1.7em" color="black" />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer">
            <AiFillLinkedin size="1.7em" color="black" />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer">
            <FaGithub size="1.7em" color="black" />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebook size="1.7em" color="black" />
          </a>
          {/* <div className='footer-text'>Amy Kumar 2021</div> */}
        </footer>
      </body>
    </div>
  );
}

export default App;
