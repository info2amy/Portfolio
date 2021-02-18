import "./App.css";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebook, FaPhoneSquareAlt, FaGithub } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";
import Project1Pic from "./images/Project1Pic.png";
import Project2Pic from "./images/Project2Pic.png";
import Project3Pic from "./images/Project3Pic.png";
import Project4Pic from "./images/Project4Pic.png";
import AboutMeArtwork from "./images/AboutMeArtwork.png";
import AboutMeBrand from "./images/AboutMeBrand.png";
import AmyTitle from "./images/AmyTitle.png";
import AmyLogo from "./images/AmyLogo.png";
import Languages from "./images/Languages.png";

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <a href="#">
            <img className="logo" id="logo" src={AmyLogo} alt="logo" />
          </a>
          <a href="#about-container">About</a>
          <a href="#projects-container">Software Development</a>
          <a href="#connect-container">Contact Me</a>
        </header>

        <container className="main-container">
          <img className="title" src={AmyTitle} alt="AmyTitle" />
        </container>

        <h2>About Me</h2>
        <container className="about-container" id="about-container">
          <section className="about-section">
            <img src={AboutMeArtwork} alt="AboutMeArtwork" />
            <img src={AboutMeBrand} alt="AboutMeBrand" />
            <img id="lang" src={Languages} alt="Languages" />
          </section>
        </container>

        <h2>Select Projects</h2>
        <container className="projects-container" id="projects-container">
          <section className="projects-section-1">
            <a href="https://info2amy.github.io/Whats-for-dinner/">
              <img src={Project1Pic} alt="project1pic" />
            </a>
            <section className="text">
              <h3>What's for Dinner?</h3>
              <p>My first project, after 10 days of coding!</p>
              <p>
                This app was built using HTML, CSS, JavaScript and Axios along
                with a third-party API. I was really pleased with making one of
                the containers look like a dining table, which becomes set for
                dinner once a main ingredient is entered! And I added a YouTube
                link for prep information.
              </p>
            </section>
          </section>
          <br />
          <section className="projects-section-2">
            <a href="https://clearlake-club-inc.netlify.app">
              <img src={Project2Pic} alt="project2pic" />
            </a>
            <section className="text">
              <h3>Clearlake</h3>
              {/* <p>My second project, after 20 days of lessons!</p> */}
              <p>
                To utilize and develop my understanding of React, this app was
                created as a site to gather and share family pictures, memories
                and history. Airtable API was utilized for data creation and
                storage, and also employed were React, React Router and Axios,
                as well as CSS styling.
              </p>
            </section>
          </section>
          <section className="projects-section-3">
            <a href="https://jovial-meitner-83abc5.netlify.app/">
              <img src={Project3Pic} alt="project3pic" />
            </a>
            <section className="text">
              <h3>The Wanderin' Bard</h3>
              {/* <p>My third project, after 30 days of lessons!</p> */}
              <p>
                The Wanderin' Bard is a webstore for unusual instruments from
                around the world. It was designed as a group partnership, giving
                experience with collaboration and Git version control. It uses a
                React frontend and a backend built with Express and MongoDB.
              </p>
            </section>
          </section>
          <section className="projects-section-4">
            <a href="https://the-gardeners-journal.netlify.app/">
              <img src={Project4Pic} alt="project4pic" />
            </a>
            <section className="text">
              <h3>The Gardener's Journal</h3>
              {/* <p>My fourth project, after 40 days of lessons!</p> */}
              <p>
                This application is designed to help gardeners with organizing
                and cataloging information about their favorite plants, whether
                in their home, their garden or in their dreams! Built as a
                full-stack project with Ruby on Rails for the backend and React
                for the frontend, this app has full CRUD capabilities as well as
                user authentication.
              </p>
            </section>
          </section>
        </container>

        <container className="connect-container" id="connect-container">
          <hr />
          <h2>Let's Connect!</h2>
        </container>

        <footer>
          <a
            href="https://drive.google.com/file/d/1xXaC0h4ZhJtB02R1tZnfFPXnYFWBLyRj/view?usp=sharing"
            className="footer-text"
          >
            Résumé
          </a>
          <a href="mailto:info2amy@yahoo.com" target="_blank" rel="noreferrer">
            <GrMailOption size="3em" color="black" />
          </a>
          <a
            href="https://www.linkedin.com/in/amy-a-kumar/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size="3em" color="black" />
          </a>
          <a
            href="https://github.com/info2amy?tab=repositories/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size="3em" color="black" />
          </a>
          {/* <a href="https://facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebook size="3em" color="black" />
          </a> */}
          {/* <div className='footer-text'>Amy Kumar 2021</div> */}
        </footer>
      </body>
    </div>
  );
}

export default App;
