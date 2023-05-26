import React from "react";
import Social from "../components/Social";
// import profilepic from "../assets/01.png";
import profilepic from "../assets/profile.png";
import ReactTypingEffect from "react-typing-effect";

const Home = () => {
  return (
    <div className="condiv home">
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
