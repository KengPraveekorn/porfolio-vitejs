import React from "react";
import Social from "../components/Social";
import ReactTypingEffect from "react-typing-effect";

// Image
import profilepic from "../assets/profile.png";
import jslogo from "../assets/js-logo.png";
import htmllogo from "../assets/html-logo.png";
import csslogo from "../assets/css-logo.png";

// Css
import "../css/logo.css";

const Home = () => {
  return (
    <div className="condiv home">
      <img src={jslogo} alt="javascript-logo" className="jslogo" />
      <img src={htmllogo} alt="html-logo" className="htmllogo"/>
      <img src={csslogo} alt="css-logo" className="csslogo"/>
      <img src={profilepic} alt="profile" className="profilepic" />
      <ReactTypingEffect
        text={['I am Praveekorn', 'I am Web Developer']}
        speed={80}
        eraseDelay={200}
        className="typingeffect"
      />
      <Social />
    </div>
  );
};

export default Home;
