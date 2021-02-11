import "./App.css";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebook, FaPhoneSquareAlt, FaGithub } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <a href=".logo">logo</a>
          <a href=".about">About</a>
          <a href=".software">Software Development</a>
          <a href=".footer">Contact Me</a>
        </header>
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
